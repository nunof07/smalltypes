import { Search } from '@core/index';
import { System } from '@core/index';
import { Systems } from '@core/index';
import { Phase } from '@core/index';
import { PhaseId } from '@core/index';

export class PhaseSearch implements Search<Systems, Phase> {
    private id: PhaseId;

    constructor(id: PhaseId) {
        this.id = id;
    }
    find(systems: Systems): Phase[] {
        return systems.filter(this.id)
            .map(system => system.phases().get(this.id));
    }
}