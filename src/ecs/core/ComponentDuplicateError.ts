import DuplicateError from './DuplicateError';

export default class ComponentDuplicateError extends DuplicateError {
    constructor(...args) {
        super(...args);
    }
}