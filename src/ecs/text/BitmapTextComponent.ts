import { BitmapFont } from '../font/index';
import TextComponent from './TextComponent';

export default interface BitmapTextComponent extends TextComponent {
    font(): BitmapFont;
}