import { EntityPool } from '../entity/index';
import { Phase } from '../phase/index';
import { PhaseId } from '../phase/index';
import { System } from './System';

export interface SystemCollection {
    register(system: System): SystemCollection;
    registerMany(systems: System[]): SystemCollection;
    filter(id: PhaseId): System[];
}