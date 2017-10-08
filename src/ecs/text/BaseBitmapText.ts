import { BitmapFont } from '../font/index';
import { ComponentId } from '../core/index';
import { BaseComponentId } from '../base/index';
import { Position } from '../position/index';
import BitmapTextComponent from './BitmapTextComponent';
import ReadWriteText from './ReadWriteTExt';
import WriteText from './WriteText';

export default class BaseBitmapText implements BitmapTextComponent {
    public static readonly ID = new BaseComponentId(BaseBitmapText.name);

    private textPosition: Position;
    private textFont: BitmapFont;
    private writeText: ReadWriteText;

    constructor(position: Position, font: BitmapFont, text: string) {
        this.textPosition = position;
        this.textFont = font;
        this.writeText = new ReadWriteText(text);
    }

    id(): ComponentId {
        return BaseBitmapText.ID;
    }

    position(): Position {
        return this.textPosition;
    }

    font(): BitmapFont {
        return this.textFont;
    }

    text(): WriteText {
        return this.writeText;
    }
}