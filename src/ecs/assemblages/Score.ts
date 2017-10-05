import Assemblage from '../core/Assemblage';
import Entity from '../core/Entity';
import EntityPool from '../core/EntityPool';
import ScoreComponent from '../components/Score';
import BitmapText from '../components/BitmapText';
import Position from '../assets/Position';
import BitmapFont from '../assets/BitmapFont';

export default class Score implements Assemblage {
    private position: Position;
    private font: BitmapFont;

    constructor(position: Position, font: BitmapFont) {
        this.position = position;
        this.font = font;
    }

    create(pool: EntityPool): Entity {
        return pool.create()
            .attachMany([
                new ScoreComponent(),
                new BitmapText(
                    this.position,
                    this.font,
                    32
                )
            ]);
    }
}