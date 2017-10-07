import { Prefab } from '../core/index';
import { Component } from '../core/index';
import { BitmapText } from '../bitmapText/index';
import { BitmapFont } from '../bitmapText/index';
import { Position } from '../position/index';
import Score from './Score';

export default class ScorePrefab implements Prefab {
    private position: Position;
    private font: BitmapFont;

    constructor(position: Position, font: BitmapFont) {
        this.position = position;
        this.font = font;
    }

    create(): Component[] {
        return [
            new Score(),
            new BitmapText(
                this.position,
                this.font,
                32,
                '0'
            )
        ];
    }
}