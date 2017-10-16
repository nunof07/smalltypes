import { Prefab } from '@core/index';
import { Components } from '@core/index';
import { BaseBitmapText } from '@base/index';
import { ComponentsSet } from '@base/index';
import { BitmapFont } from '@core/index';
import { Position } from '@core/index';
import { ScoreComponent } from '@pong/index';

export class Score implements Prefab<Components> {
    private position: Position;
    private font: BitmapFont;

    constructor(position: Position, font: BitmapFont) {
        this.position = position;
        this.font = font;
    }

    create(): Components {
        return new ComponentsSet([
            new ScoreComponent(),
            new BaseBitmapText(this.position, this.font, '0')
        ]);
    }
}