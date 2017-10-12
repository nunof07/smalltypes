import { Phase } from '@core/index';
import { PhaseId } from '@core/index';

export interface PhasePool {
    has(id: PhaseId): boolean;
    get<T extends Phase>(id: PhaseId): T;
}