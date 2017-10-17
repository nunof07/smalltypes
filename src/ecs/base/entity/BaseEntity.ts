import { Entity } from '@core/index';
import { EntityId } from '@core/index';
import { Component } from '@core/index';
import { ComponentId } from '@core/index';
import { Components } from '@core/index';
import { ComponentNotFoundError } from '@base/component/index';
import { ComponentDuplicateError } from '@base/component/index';
import { ComponentSet } from '@base/component/index';

export class BaseEntity implements Entity {
    private entityId: EntityId;
    private entityComponents: Components;

    constructor (
        id: EntityId,
        components: Components = new ComponentSet()
    ) {
        this.entityId = id;
        this.entityComponents = components;
    }
    id(): EntityId {
        return this.entityId;
    }
    components() {
        return this.entityComponents;
    }
}