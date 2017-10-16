import { System } from '@core/index';
import { SystemCollection } from '@core/index';
import { PhaseId } from '@core/index';

export class BaseSystemCollection implements SystemCollection {
    private systems: System[];

    constructor(systems?: System[]) {
        this.systems = systems || [];
    }
    filter(id: PhaseId): System[] {
        return this.systems.filter(system =>
            system.phases().has(id)
        );
    }
}