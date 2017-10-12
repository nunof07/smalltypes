import { System } from '@core/index';
import { SystemCollection } from '@core/index';
import { PhaseId } from '@core/index';

export class BaseSystemCollection implements SystemCollection {
    private systems: System[];

    constructor(systems?: System[]) {
        this.systems = systems || [];
    }

    register(system: System): SystemCollection {
        this.systems.push(system);

        return this;
    }

    registerMany(systems: System[]): SystemCollection {
        systems.forEach(system => {
            this.register(system);
        });

        return this;
    }

    filter(id: PhaseId): System[] {
        return this.systems.filter(system =>
            system.phases().has(id)
        );
    }
}