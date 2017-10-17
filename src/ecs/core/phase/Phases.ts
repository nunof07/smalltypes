import { Phase } from '@core/index';
import { PhaseId } from '@core/index';

export interface Phases extends Iterable<Phase> {
    has(id: PhaseId): boolean;
    get<T extends Phase>(id: PhaseId): T;
}