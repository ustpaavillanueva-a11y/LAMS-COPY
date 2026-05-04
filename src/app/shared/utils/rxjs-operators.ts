import { Observable, OperatorFunction, timer } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, delay, tap } from 'rxjs/operators';

/**
 * Custom RxJS operators for common patterns in the application.
 */

/**
 * Debounces input with a default delay of 300ms and removes duplicate values.
 * Perfect for search inputs and filters.
 *
 * Usage:
 * ```typescript
 * searchInput$.pipe(
 *   debounceInput(300)
 * ).subscribe(value => { ... });
 * ```
 */
export function debounceInput<T>(time: number = 300): OperatorFunction<T, T> {
    return (source: Observable<T>) => source.pipe(debounceTime(time), distinctUntilChanged());
}

/**
 * Delays showing loading state to prevent flashing for fast requests.
 * Only shows loading indicator if request takes longer than the delay.
 *
 * Usage:
 * ```typescript
 * this.http.get(url).pipe(
 *   delayedLoading(200, () => this.showLoading = true)
 * ).subscribe(...);
 * ```
 */
export function delayedLoading<T>(delayMs: number = 200, onShowLoading: () => void): OperatorFunction<T, T> {
    return (source: Observable<T>) => {
        let loadingShown = false;

        // Start a timer to show loading after delay
        const loadingTimer = timer(delayMs).subscribe(() => {
            loadingShown = true;
            onShowLoading();
        });

        return source.pipe(
            tap({
                next: () => {
                    // Cancel loading timer if request completes before delay
                    if (!loadingShown) {
                        loadingTimer.unsubscribe();
                    }
                },
                error: () => {
                    // Cancel loading timer on error
                    if (!loadingShown) {
                        loadingTimer.unsubscribe();
                    }
                },
                complete: () => {
                    // Cancel loading timer on completion
                    loadingTimer.unsubscribe();
                }
            })
        );
    };
}

/**
 * Retries failed requests with exponential backoff.
 * Useful for handling temporary network issues.
 *
 * Usage:
 * ```typescript
 * this.http.get(url).pipe(
 *   retryWithBackoff(3, 1000)
 * ).subscribe(...);
 * ```
 */
export function retryWithBackoff<T>(maxRetries: number = 3, initialDelay: number = 1000): OperatorFunction<T, T> {
    return (source: Observable<T>) => source.pipe(retryWithBackoffInternal(maxRetries, initialDelay));
}

function retryWithBackoffInternal<T>(maxRetries: number, delayMs: number, retryCount: number = 0): OperatorFunction<T, T> {
    return (source: Observable<T>) => {
        return source.pipe(
            switchMap((value) => {
                if (retryCount < maxRetries) {
                    return timer(delayMs * Math.pow(2, retryCount)).pipe(switchMap(() => source.pipe(retryWithBackoffInternal(maxRetries, delayMs, retryCount + 1))));
                }
                return source;
            })
        );
    };
}

/**
 * Caches the result of an observable for a specified duration.
 * Prevents redundant API calls for the same data.
 *
 * Usage:
 * ```typescript
 * this.http.get(url).pipe(
 *   cacheFor(60000) // Cache for 1 minute
 * ).subscribe(...);
 * ```
 */
export function cacheFor<T>(duration: number): OperatorFunction<T, T> {
    let cache: T | null = null;
    let cacheTime: number | null = null;

    return (source: Observable<T>) =>
        new Observable((subscriber) => {
            const now = Date.now();

            if (cache !== null && cacheTime !== null && now - cacheTime < duration) {
                // Return cached value
                subscriber.next(cache);
                subscriber.complete();
            } else {
                // Fetch new value and cache it
                source.subscribe({
                    next: (value) => {
                        cache = value;
                        cacheTime = Date.now();
                        subscriber.next(value);
                    },
                    error: (error) => subscriber.error(error),
                    complete: () => subscriber.complete()
                });
            }
        });
}

/**
 * Adds a minimum delay to ensure smooth transitions.
 * Prevents jarring instant loading for very fast requests.
 *
 * Usage:
 * ```typescript
 * this.http.get(url).pipe(
 *   minimumDelay(500) // Ensure at least 500ms passes
 * ).subscribe(...);
 * ```
 */
export function minimumDelay<T>(minDelay: number): OperatorFunction<T, T> {
    return (source: Observable<T>) => {
        const startTime = Date.now();

        return source.pipe(
            switchMap((value) => {
                const elapsed = Date.now() - startTime;
                const remainingDelay = Math.max(0, minDelay - elapsed);

                if (remainingDelay > 0) {
                    return timer(remainingDelay).pipe(switchMap(() => [value]));
                }

                return [value];
            })
        );
    };
}
