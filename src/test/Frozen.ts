import { frozen } from '@main/index';

/**
 * Frozen class.
 */
@frozen
export class Frozen {
    public hello(): string {
        return 'Hello World!';
    }
}
