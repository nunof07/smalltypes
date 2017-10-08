import { Prefab } from '../core/index';
import { Component } from '../core/index';
import { BaseBitmapText } from '../text/index';
import { BitmapFont } from '../font/index';
import { Position } from '../position/index';
import ScoreComponent from './ScoreComponent';

export default class Score implements Prefab {
    private position: Position;
    private font: BitmapFont;

    constructor(position: Position, font: BitmapFont) {
        this.position = position;
        this.font = font;
    }

    create(): Component[] {
        return [
            new ScoreComponent(),
            new BaseBitmapText(
                this.position,
                this.font,
                '0'
            )
        ];
    }
}