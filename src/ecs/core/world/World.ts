import { Entities } from '@core/index';
import { Systems } from '@core/index';

export interface World {
    entities(): Entities;
    systems(): Systems;
}