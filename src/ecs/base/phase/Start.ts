import { Phase } from '@core/index';
import { PhaseId } from '@core/index';
import { BasePhaseId } from '@base/phase/index';

export class Start implements Phase {
    public static readonly ID = new BasePhaseId(Start.name);
    private callback: () => void;

    constructor(callback: () => void) {
        this.callback = callback;
    }
    id(): PhaseId {
        return Start.ID;
    }
    execute(): void {
        this.callback();
    }
}