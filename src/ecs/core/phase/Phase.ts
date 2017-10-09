import { PhaseId } from './PhaseId';

export interface Phase {
    id(): PhaseId;
    execute(): void;
}