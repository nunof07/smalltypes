import { System } from '@core/index';
import { Systems } from '@core/index';
import { PhaseId } from '@core/index';

export class SystemSet implements Systems {
    private systems: Set<System>;

    constructor(systems: System[] | Set<System> = []) {
        this.systems = new Set(systems);
    }
    filter(id: PhaseId): System[] {
        return Array.from(this.systems)
            .filter(system =>
                system.phases().has(id)
            );
    }
    [Symbol.iterator](): Iterator<System> {
        return this.systems.values();
    }
}