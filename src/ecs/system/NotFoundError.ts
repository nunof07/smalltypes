export default class NotFoundError extends Error {
    constructor(...args: any[]) {
        super(...args);
        Error.captureStackTrace(this, NotFoundError);
    }
}