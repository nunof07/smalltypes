import { Text } from '@core/index';

export interface WriteText extends Text {
    update(text: string): void;
}