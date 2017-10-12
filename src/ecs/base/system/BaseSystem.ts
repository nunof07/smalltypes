import { PhasePool } from '@core/index';
import { System } from '@core/index';
import { Phase } from '@core/index';
import { PhaseId } from '@core/index';
import { BasePhasePool } from '@base/phase/index';

export class BaseSystem implements System {
    private phasePool: PhasePool;

    constructor(phases: PhasePool | Phase[] | Map<PhaseId, Phase>) {
        this.phasePool = (phases instanceof Array || phases instanceof Map) ?
            new BasePhasePool(phases) :
            phases;
    }

    phases(): PhasePool {
        return this.phasePool;
    }
}