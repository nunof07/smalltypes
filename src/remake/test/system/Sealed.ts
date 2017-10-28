import { sealed } from '@main/system/index';

/**
 * Sealed class.
 */
@sealed
export class Sealed {
    public hello(): string {
        return 'Hello World!';
    }
}
