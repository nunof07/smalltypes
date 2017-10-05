import NotFoundError from './NotFoundError';

export default class ComponentNotFoundError extends NotFoundError {
    constructor(...args) {
        super(...args);
    }
}