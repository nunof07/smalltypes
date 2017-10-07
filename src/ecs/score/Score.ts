import { Component } from '../core/index';
import { ComponentId } from '../core/index';
import { BaseComponentId } from '../base/index';

export default class Score implements Component {
    public static readonly ID = new BaseComponentId(Score.name);

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