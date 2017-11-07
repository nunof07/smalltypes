import { Final } from '@test/system/Final';

/**
 * Child of {@link Final}.
 */
export class FinalSub extends Final {
    constructor(message: string = '') {
        super(message);
    }
}
