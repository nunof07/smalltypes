import { Prefab } from '../core/index';
import { Component } from '../core/index';
import { BitmapText } from '../bitmapText/index';
import { BitmapFont } from '../bitmapText/index';
import { Position } from '../position/index';
import ScoreComponent from './ScoreComponent';

export default class Score implements Prefab {
    private position: Position;
    private font: BitmapFont;
    private charSize: number;

    constructor(position: Position, font: BitmapFont, charSize: number) {
        this.position = position;
        this.font = font;
        this.charSize = charSize;
    }

    create(): Component[] {
        return [
            new ScoreComponent(),
            new BitmapText(
                this.position,
                this.font,
                this.charSize,
                '0'
            )
        ];
    }
}