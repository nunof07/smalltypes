import { DuplicateError } from '../system/index';

export default class ComponentDuplicateError extends DuplicateError {
    constructor(...args: any[]) {
        super(...args);
    }
}