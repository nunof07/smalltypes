import CoreWorld from './core/CoreWorld';
import CoreEntityPool from './core/CoreEntityPool';
import CoreSystemCollection from './core/CoreSystemCollection';
import ScoreAssemblage from './assemblages/Score';
import BitmapFont from './assets/BitmapFont';
import Position from './assets/Position';
import PhaserBitmapTextSystem from './systems/PhaserBitmapText';

export default function createWorld(loader: Phaser.Loader, factory: Phaser.GameObjectFactory) {
    const font = new BitmapFont('Press Start 2P', 'fonts/Press_Start_2P_0.png', 'fonts/Press_Start_2P.fnt');
    const world = new CoreWorld(
        new CoreEntityPool()
            .createMany([
                new ScoreAssemblage(new Position(128, 128), font),
                new ScoreAssemblage(new Position(1024 - 128, 128), font)
            ]),
        new CoreSystemCollection()
            .registerMany([
                new PhaserBitmapTextSystem(loader, factory)
            ])
    );
}