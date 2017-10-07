import System from './System';
import EntityPool from './EntityPool';
import Phase from './Phase';
import PhaseId from './PhaseId';

export default interface SystemCollection {
    register(system: System): SystemCollection;
    registerMany(systems: System[]): SystemCollection;
    filter(id: PhaseId): System[];
}