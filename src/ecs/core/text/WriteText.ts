import { Text } from './Text';

export interface WriteText extends Text {
    update(text: string): void;
}