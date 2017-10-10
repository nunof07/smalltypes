import { Prefab } from '../../core/index';
import { Component } from '../../core/index';
import { BaseBitmapText } from '../../base/index';
import { BitmapFont } from '../../core/index';
import { Position } from '../../core/index';
import { ScoreComponent } from './ScoreComponent';

export class Score implements Prefab {
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