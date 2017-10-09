import { PhasePool } from '../phase/index';

export interface System {
    phases(): PhasePool;
}