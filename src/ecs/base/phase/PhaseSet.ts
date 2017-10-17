import { Phases } from '@core/index';
import { Phase } from '@core/index';
import { PhaseId } from '@core/index';
import { MapOf } from '@system/index';

export class PhaseSet implements Phases {
    private phases: Map<PhaseId, Phase>;

    constructor(phases: Phase[] | Map<PhaseId, Phase>) {
        this.phases = phases instanceof Map ?
            phases :
            new MapOf(phases, phase =>
                [phase.id(), phase]
            );
    }
    has(id: PhaseId): boolean {
        return this.phases.has(id);
    }
    get<T extends Phase>(id: PhaseId): T {
        return this.phases.get(id) as T;
    }
    [Symbol.iterator](): Iterator<Phase> {
        return this.phases.values();
    }
}