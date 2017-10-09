import { ComponentId } from './ComponentId';

export interface Component {
    id(): ComponentId;
}