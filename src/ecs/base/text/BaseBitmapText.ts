import { BitmapFont } from '../../core/index';
import { ComponentId } from '../../core/index';
import { Position } from '../../core/index';
import { BitmapTextComponent } from '../../core/index';
import { ReadWriteText } from '../../core/index';
import { WriteText } from '../../core/index';
import { BaseComponentId } from '../component/index';

export class BaseBitmapText implements BitmapTextComponent {
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