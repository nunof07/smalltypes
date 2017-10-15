import { EntityId } from '@core/index';
import { Id } from '@core/index';
import { BaseId } from '@base/id/index';
import { Scalar } from '@system/index';

export class BaseEntityId implements EntityId {
    private id: Id;

    constructor(id: Scalar<string> | Id | string) {
        this.id = new BaseId(id);
    }
    value(): string {
        return this.id.value();
    }
}