import { Component } from '../component/index';
import { Position } from '../position/index';
import { WriteText } from './WriteText';

export interface TextComponent extends Component {
    position(): Position;
    text(): WriteText;
}