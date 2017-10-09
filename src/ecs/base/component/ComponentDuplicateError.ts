import { DuplicateError } from '../../system/index';

export class ComponentDuplicateError extends DuplicateError {
    constructor(...args: any[]) {
        super(...args);
    }
}