import Component from '../core/Component';
import ComponentId from '../core/ComponentId';
import CoreComponentId from '../core/CoreComponentId';

export default class Move implements Component {
    
    id(): ComponentId {
        return new CoreComponentId('move');
    }

}