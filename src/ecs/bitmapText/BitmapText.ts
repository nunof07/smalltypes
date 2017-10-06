import { Component } from '../core/index';
import { ComponentId } from '../core/index';
import { BaseComponentId } from '../base/index';
import { Position } from '../position/index';
import BitmapFont from './BitmapFont';

export default class BitmapText implements Component {
    public static readonly ID = new BaseComponentId('bitmapText');

    private textPosition: Position;
    private textFont: BitmapFont;
    private textSize: number;
    private text: string;

    constructor(position: Position, font: BitmapFont, size: number, text: string = '') {
        this.textPosition = position;
        this.textFont = font;
        this.textSize = size;
        this.text = text;
    }

    id(): ComponentId {
        return BitmapText.ID;
    }

    position(): Position {
        return this.textPosition;
    }

    font(): BitmapFont {
        return this.textFont;
    }

    size(): number {
        return this.textSize;
    }

    value(): string {
        return this.text;
    }

    update(value: string): BitmapText {
        this.text = value;

        return this;
    }

}