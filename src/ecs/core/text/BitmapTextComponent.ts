import { BitmapFont } from '@core/index';
import { TextComponent } from '@core/index';

export interface BitmapTextComponent extends TextComponent {
    font(): BitmapFont;
}