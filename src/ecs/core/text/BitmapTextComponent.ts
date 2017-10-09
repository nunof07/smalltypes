import { BitmapFont } from '../font/index';
import { TextComponent } from './TextComponent';

export interface BitmapTextComponent extends TextComponent {
    font(): BitmapFont;
}