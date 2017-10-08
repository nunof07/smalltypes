import Text from './Text';

export default interface WriteText extends Text {
    update(text: string): void;
}