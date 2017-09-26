export default class PreloaderState extends Phaser.State {
    constructor() {
        super();
    }

    public preload() {
        this.game.load.image('paddle', 'images/paddle.png');
        this.game.load.image('ball', 'images/ball.png');
        this.game.load.bitmapFont('Press Start 2P', 'fonts/Press_Start_2P_0.png', 'fonts/Press_Start_2P.fnt');
        this.game.load.audio('hit', ['audio/hit.wav']);
        this.game.load.audio('score', ['audio/score.wav']);
        this.game.load.audio('wall', ['audio/wall.wav']);
        this.game.load.audio('music', ['audio/at-night-psg.mp3', 'audio/at-night-psg.ogg']);
    }

    public update() {
        this.game.state.start('game');
    }
}