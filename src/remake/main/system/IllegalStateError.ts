/**
 * Illegal state exception.
 */
export class IllegalStateError extends Error {
    constructor(message?: string) {
        super(message);
        Error.captureStackTrace(this, this.constructor);
    }
}
