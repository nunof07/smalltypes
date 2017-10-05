/// <reference path="../typings/index.d.ts"/>

import test from './ecs/test';
test();
import PongGame from './PongGame';

new PongGame().start();