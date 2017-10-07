import { Phase } from '../core/index';
import { PhaseId } from '../core/index';
import BasePhaseId from './BasePhaseId';

export default abstract class Load implements Phase {
    public static readonly ID = new BasePhaseId(Load.name);

    id(): PhaseId {
        return Load.ID;
    }

    abstract execute(): void;
}