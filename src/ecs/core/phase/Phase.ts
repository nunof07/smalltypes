import { PhaseId } from '@core/index';

export interface Phase {
    id(): PhaseId;
    execute(): void;
}