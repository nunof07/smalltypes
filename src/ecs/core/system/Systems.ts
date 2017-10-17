import { PhaseId } from '@core/index';
import { System } from '@core/index';

export interface Systems extends Iterable<System> {
    filter(id: PhaseId): System[];
}