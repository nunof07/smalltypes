import { SystemSearch } from '../core/index';
import { SystemCollection } from '../core/index';
import { Phase } from '../core/index';
import { PhaseId } from '../core/index';

export default class PhaseSearch implements SystemSearch<Phase> {
    private id: PhaseId;

    constructor(id: PhaseId) {
        this.id = id;
    }

    find(systems: SystemCollection): Phase[] {
        return systems.filter(this.id)
            .map(system => system.phases().get(this.id));
    }
}