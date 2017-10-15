import { Component } from '@core/index';
import { ComponentId } from '@core/index';
import { Position } from '@core/index';
import { BitmapFont } from '@core/index';
import { BitmapTextComponent } from '@core/index';
import { WriteText } from '@core/index';
import { BaseComponentId } from '@base/index';
import { BasePosition } from '@base/index';
import { PhaserText } from '@phaser/index';

export class PhaserBitmapText implements BitmapTextComponent {
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