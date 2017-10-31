/**
 * Illegal inheritance exception.
 */
export class IllegalInheritanceError extends Error {
    constructor(message?: string) {
        super(message);
        Error.captureStackTrace(this, this.constructor);
    }
}
