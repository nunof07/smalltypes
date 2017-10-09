import { NotFoundError } from '../../system/index';

export class ComponentNotFoundError extends NotFoundError {
    constructor(...args: any[]) {
        super(...args);
    }
}