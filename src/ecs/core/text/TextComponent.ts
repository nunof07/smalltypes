import { Component } from '@core/index';
import { Position } from '@core/index';
import { WriteText } from '@core/index';

export interface TextComponent extends Component {
    position(): Position;
    text(): WriteText;
}