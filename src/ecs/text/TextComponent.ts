import { Component } from '../core/index';
import { Position } from '../position/index';
import { WriteText } from '../text/index';

export default interface TextComponent extends Component {
    position(): Position;
    text(): WriteText;
}