import { Phases } from '@core/index';

export interface System {
    phases(): Phases;
}