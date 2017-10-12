import { PhasePool } from '@core/index';

export interface System {
    phases(): PhasePool;
}