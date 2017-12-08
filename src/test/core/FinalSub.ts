import { Final } from '@test/core/Final';

/**
 * Child of {@link Final}.
 */
export class FinalSub extends Final {
    constructor(message: string = '') {
        super(message);
    }
}
