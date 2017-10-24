/**
 * Sealed test.
 */
//import { hello } from '@main/system/index';
import { hello } from '@main/system/index';
import { expect } from 'chai';
import * as mocha from 'mocha';

describe('Hello function', () => {

    it('should return hello world', () => {
        const result: string = hello();
        expect(result).to.equal('Hello world!');
    });

    // it('should return hello world2', () => {
    //     const result: string = hello();
    //     expect(result).to.equal('Hello world2!');
    // });

});
