import { SystemCollection } from '../core/index';
import { PhaseId } from '../core/index';
import PhaseSearch from './PhaseSearch';

export default class PhaseExecute {
    private systems: SystemCollection;
    private search: PhaseSearch;

    constructor(systems: SystemCollection, search: PhaseSearch | PhaseId) {
        this.systems = systems;
        this.search = (search instanceof PhaseSearch) ? search : new PhaseSearch(search);
    }

    execute(): void {
        this.search.find(this.systems)
            .forEach(phase => phase.execute());
    }
}