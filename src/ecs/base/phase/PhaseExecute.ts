import { Systems } from '@core/index';
import { PhaseId } from '@core/index';
import { PhaseSearch } from '@base/system/index';

export class PhaseExecute {
    private systems: Systems;
    private search: PhaseSearch;

    constructor(systems: Systems, search: PhaseSearch | PhaseId) {
        this.systems = systems;
        this.search = (search instanceof PhaseSearch) ? search : new PhaseSearch(search);
    }

    execute(): void {
        this.search.find(this.systems)
            .forEach(phase => phase.execute());
    }
}