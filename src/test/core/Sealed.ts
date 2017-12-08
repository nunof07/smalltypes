import { sealed } from '@main';

/**
 * Sealed class.
 */
@sealed
export class Sealed {
    public hello(): string {
        return 'Hello World!';
    }
}
