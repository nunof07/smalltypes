import { Prefab } from '@core/index';
import { ComponentPool } from '@core/index';
import { BaseBitmapText } from '@base/index';
import { MapComponentPool } from '@base/index';
import { BitmapFont } from '@core/index';
import { Position } from '@core/index';
import { ScoreComponent } from '@pong/index';

export class Score implements Prefab {
    private position: Position;
    private font: BitmapFont;

    constructor(position: Position, font: BitmapFont) {
        this.position = position;
        this.font = font;
    }

    create(): ComponentPool {
        return new MapComponentPool([
            new ScoreComponent(),
            new BaseBitmapText(
                this.position,
                this.font,
                '0'
            )
        ]);
    }
}