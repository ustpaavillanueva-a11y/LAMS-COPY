import { Component, OnDestroy, Directive } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Base component that provides automatic subscription cleanup.
 * All components that make HTTP calls or subscribe to observables should extend this class.
 *
 * Usage:
 * ```typescript
 * export class MyComponent extends BaseComponent implements OnInit {
 *   ngOnInit() {
 *     this.myService.getData()
 *       .pipe(takeUntil(this.destroy$))
 *       .subscribe(data => { ... });
 *   }
 * }
 * ```
 */
@Directive()
export abstract class BaseComponent implements OnDestroy {
    /**
     * Subject that emits when the component is destroyed.
     * Use this with takeUntil() operator to automatically unsubscribe from observables.
     */
    protected destroy$ = new Subject<void>();

    /**
     * Cleanup method called when component is destroyed.
     * Automatically unsubscribes from all observables using takeUntil(this.destroy$).
     */
    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
