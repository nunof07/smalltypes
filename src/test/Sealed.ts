import { sealed } from '@main/index';

/**
 * Sealed class.
 */
@sealed
export class Sealed {
    public hello(): string {
        return 'Hello World!';
    }
}
