export default class PreloaderState extends Phaser.State {
    constructor() {
        super();
    }

    public preload() {
        this.game.load.image('paddle', 'assets/images/paddle.png');
        this.game.load.image('ball', 'assets/images/ball.png');
        this.game.load.bitmapFont('Press Start 2P', 'assets/fonts/Press_Start_2P_0.png', 'assets/fonts/Press_Start_2P.fnt');
        this.game.load.audio('hit', ['assets/audio/hit.wav']);
        this.game.load.audio('score', ['assets/audio/score.wav']);
        this.game.load.audio('wall', ['assets/audio/wall.wav']);
        this.game.load.audio('music', ['assets/audio/at-night-psg.mp3', 'assets/audio/at-night-psg.ogg']);
    }

    public update() {
        this.game.state.start('game');
    }
}