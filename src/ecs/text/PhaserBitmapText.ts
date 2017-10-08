/// <reference path="../../../typings/index.d.ts"/>

import { Component } from '../core/index';
import { ComponentId } from '../core/index';
import { BaseComponentId } from '../base/index';
import { Position } from '../position/index';
import { BasePosition } from '../position/index';
import { BitmapFont } from '../font/index';
import BitmapTextComponent from './BitmapTextComponent';
import PhaserText from './PhaserText';
import WriteText from './WriteText';

export default class PhaserBitmapText implements BitmapTextComponent {
    public static readonly ID = new BaseComponentId(PhaserBitmapText.name);

    private bitmapText: Phaser.BitmapText;
    private textFont: BitmapFont;

    constructor(text: Phaser.BitmapText, font: BitmapFont) {
        this.bitmapText = text;
        this.textFont = font;
    }

    id(): ComponentId {
        return PhaserBitmapText.ID;
    }

    position(): Position {
        return new BasePosition(this.bitmapText.x, this.bitmapText.y);
    }

    font(): BitmapFont {
        return this.textFont;
    }

    text(): WriteText {
        return new PhaserText(this.bitmapText);
    }

}