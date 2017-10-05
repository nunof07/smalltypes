import Component from '../core/Component';
import ComponentId from '../core/ComponentId';
import CoreComponentId from '../core/CoreComponentId';

export default class Score implements Component {
    public static readonly ID = new CoreComponentId('score');

    private score: number;

    constructor() {
        this.score = 0;
    }

    id(): ComponentId {
        return Score.ID;
    }

    value(): number {
        return this.score;
    }

    increment(): void {
        this.score += 1;
    }

}