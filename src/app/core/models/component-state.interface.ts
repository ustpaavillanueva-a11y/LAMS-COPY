import { LoadingState } from './loading-state.enum';

/**
 * Interface representing the state of a component during async operations.
 * Use this to track loading, success, and error states with associated data.
 */
export interface ComponentState<T = any> {
    /** Current loading state */
    state: LoadingState;

    /** Data payload (populated on success) */
    data?: T;

    /** Error message (populated on error) */
    error?: string;

    /** Timestamp of last update */
    lastUpdated?: Date;
}

/**
 * Creates an initial idle state
 */
export function createIdleState<T = any>(): ComponentState<T> {
    return {
        state: LoadingState.IDLE,
        lastUpdated: new Date()
    };
}

/**
 * Creates a loading state
 */
export function createLoadingState<T = any>(): ComponentState<T> {
    return {
        state: LoadingState.LOADING,
        lastUpdated: new Date()
    };
}

/**
 * Creates a success state with data
 */
export function createSuccessState<T = any>(data: T): ComponentState<T> {
    return {
        state: LoadingState.SUCCESS,
        data,
        lastUpdated: new Date()
    };
}

/**
 * Creates an error state with error message
 */
export function createErrorState<T = any>(error: string): ComponentState<T> {
    return {
        state: LoadingState.ERROR,
        error,
        lastUpdated: new Date()
    };
}
