import { frozen } from '@main';

/**
 * Frozen class.
 */
@frozen
export class Frozen {
    public hello(): string {
        return 'Hello World!';
    }
}
