import { Phase } from '@core/index';
import { PhaseId } from '@core/index';
import { BasePhaseId } from '@base/phase/index';

export class Load implements Phase {
    public static readonly ID = new BasePhaseId(Load.name);
    private callback: () => void;

    constructor(callback: () => void) {
        this.callback = callback;
    }
    id(): PhaseId {
        return Load.ID;
    }
    execute(): void {
        this.callback();
    }
}