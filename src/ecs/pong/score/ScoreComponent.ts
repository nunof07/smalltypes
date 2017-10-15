import { Component } from '@core/index';
import { ComponentId } from '@core/index';
import { BaseComponentId } from '@base/index';
import { Scalar } from '@system/index';

export class ScoreComponent implements Component, Scalar<number> {
    public static readonly ID = new BaseComponentId(ScoreComponent.name);
    private score: number;

    constructor() {
        this.score = 0;
    }
    id(): ComponentId {
        return ScoreComponent.ID;
    }
    value(): number {
        return this.score;
    }
    increment(): void {
        this.score += 1;
    }
}