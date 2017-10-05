export default class DuplicateError extends Error {
    constructor(...args) {
        super(...args);
        Error.captureStackTrace(this, DuplicateError);
    }
}