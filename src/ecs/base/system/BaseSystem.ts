import { Phases } from '@core/index';
import { System } from '@core/index';
import { Phase } from '@core/index';
import { PhaseId } from '@core/index';
import { PhaseSet } from '@base/phase/index';

export class BaseSystem implements System {
    private phaseSet: Phases;

    constructor(phases: Phases | Phase[] | Map<PhaseId, Phase>) {
        this.phaseSet = (phases instanceof Array || phases instanceof Map) ?
            new PhaseSet(phases) :
            phases;
    }
    phases(): Phases {
        return this.phaseSet;
    }
}