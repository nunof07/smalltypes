import { frozen } from '@main/system/index';

/**
 * Frozen class.
 */
@frozen
export class Frozen {
    public hello(): string {
        return 'Hello World!';
    }
}
