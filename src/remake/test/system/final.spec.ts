/**
 * Final decorator test.
 */
import { IllegalInheritanceException } from '@main/system/index';
import { Final } from '@test/system/Final';
import { FinalSub } from '@test/system/FinalSub';
import { expect } from 'chai';
import * as mocha from 'mocha';

describe('final decorator', () => {

    it('should keep type', () => {
        expect(new Final() instanceof Final).to.equal(true, 'must be Final');
    });

    it('should allow parameters', () => {
        expect(() => new Final('hello')).to.not.throw(Error, 'must not throw exception');
    });

    it('should keep prototype', () => {
        expect(new Final('hello').hello()).to.equal('hello', 'result must be hello');
    });

    it('should forbid sub classes', () => {
        expect(() => new FinalSub()).to.throw(IllegalInheritanceException);
    });

});
