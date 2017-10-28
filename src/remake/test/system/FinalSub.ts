import { final } from '@main/system/index';
import { Final } from '@test/system/Final';

/**
 * Child of Final.
 */
export class FinalSub extends Final {
    constructor(message: string = '') {
        super(message);
    }
}
