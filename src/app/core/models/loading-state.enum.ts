/**
 * Enum representing the different states a component can be in during data operations.
 * This ensures explicit state handling and prevents state mixing (e.g., loading=true while showing error).
 */
export enum LoadingState {
    /** Initial state - no operation has started */
    IDLE = 'idle',

    /** Data is being fetched or operation is in progress */
    LOADING = 'loading',

    /** Operation completed successfully */
    SUCCESS = 'success',

    /** Operation failed with an error */
    ERROR = 'error'
}

/**
 * Helper function to check if the state is loading
 */
export function isLoading(state: LoadingState): boolean {
    return state === LoadingState.LOADING;
}

/**
 * Helper function to check if the state is in error
 */
export function isError(state: LoadingState): boolean {
    return state === LoadingState.ERROR;
}

/**
 * Helper function to check if the state is successful
 */
export function isSuccess(state: LoadingState): boolean {
    return state === LoadingState.SUCCESS;
}

/**
 * Helper function to check if the state is idle
 */
export function isIdle(state: LoadingState): boolean {
    return state === LoadingState.IDLE;
}
