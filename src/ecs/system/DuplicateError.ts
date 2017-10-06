export default class DuplicateError extends Error {
    constructor(...args: any[]) {
        super(...args);
        Error.captureStackTrace(this, DuplicateError);
    }
}