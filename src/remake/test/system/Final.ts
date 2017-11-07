import { final } from '@main/system/index';

/**
 * Sealed class.
 */
@final
export class Final {
    private readonly message: string;

    constructor(message: string = '') {
        this.message = message;
    }
    public hello(): string {
        return this.message;
    }
}
