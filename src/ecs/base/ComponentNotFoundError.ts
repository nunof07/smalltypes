import { NotFoundError } from '../system/index';

export default class ComponentNotFoundError extends NotFoundError {
    constructor(...args: any[]) {
        super(...args);
    }
}