import { Assemblage } from '../core/index';
import { Entity } from '../core/index';
import { EntityPool } from '../core/index';
import { BitmapText } from '../bitmapText/index';
import { BitmapFont } from '../bitmapText/index';
import { Position } from '../position/index';
import Score from './Score';

export default class ScoreAssemblage implements Assemblage {
    private position: Position;
    private font: BitmapFont;

    constructor(position: Position, font: BitmapFont) {
        this.position = position;
        this.font = font;
    }

    create(pool: EntityPool): Entity {
        return pool.create()
            .attachMany([
                new Score(),
                new BitmapText(
                    this.position,
                    this.font,
                    32,
                    '0'
                )
            ]);
    }
}