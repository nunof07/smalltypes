import {
    FunctionOf,
    MapOf
} from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link MapOf} test.
 */
@suite
export class MapOfTest {
    @test
    public isScalar(): void {
        expect(
            new MapOf(
                ['hello'],
                (input: string): [string, string] => {
                    return [input, input];
                }
            ).isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public isMap(): void {
        expect(
            new MapOf(
                [],
                (input: string): [string, string] => {
                    return [input, input];
                }
            )
            .value()
        ).to.be.an.instanceOf(Map);
    }

    @test
    public sizeTest(): void {
        expect(
            new MapOf(
                ['a', 'b', 'c'],
                (input: string): [string, string] => {
                    return [input, input];
                }
            )
            .value()
            .size
        ).to.equal(3);
    }

    @test
    public getTest(): void {
        expect(
            new MapOf(
                ['hello'],
                (input: string): [string, string] => {
                    return [input, input];
                }
            )
            .value()
            .get('hello')
        ).to.equal('hello');
    }

    @test
    public fromFunctionObject(): void {
        expect(
            new MapOf(
                ['a', 'b', 'c'],
                new FunctionOf((input: string): [string, string] => {
                    return [input, input];
                })
            )
            .value()
            .size
        ).to.equal(3);
    }
}
