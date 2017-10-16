import { Components } from '@core/index';
import { EntityId } from '@core/index';

export interface Entity {
    id(): EntityId;
    components(): Components;
}