import { Position } from '../../core/index';

export class BasePosition implements Position {
    private coordinates: number[];

    constructor(x: number, y: number) {
        this.coordinates = [x, y];
    }

    x(): number {
        return this.coordinates[0];
    }

    y(): number {
        return this.coordinates[1];
    }
}