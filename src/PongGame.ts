import BootState from './states/BootState';
import PreloaderState from './states/PreloaderState';
import GameState from './states/GameState';
import createWorld from './ecs/Game';

export default class PongGame {
    private _game: Phaser.Game;

    constructor() {
        this._game = new Phaser.Game({
            width: 1024,
            height: 576,
            renderer: Phaser.AUTO,
            parent: 'game-container'
        });
    }

    public start() {
        createWorld(this._game.load, this._game.add);
        this._game.state.add('boot', new BootState());
        this._game.state.add('preloader', new PreloaderState());
        this._game.state.add('game', new GameState());
        this._game.state.start('boot');
    }
}