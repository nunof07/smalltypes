import Phase from './Phase';
import PhaseId from './PhaseId';

export default interface PhasePool {
    has(id: PhaseId): boolean;
    get<T extends Phase>(id: PhaseId): T;
}