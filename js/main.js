require(['pong'], function () {
    require(['PongGame'], function (PongGame) {
        new PongGame.PongGame()
            .start();
    });
});