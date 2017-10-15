import { Entity } from '@core/index';
import { EntityId } from '@core/index';
import { Component } from '@core/index';
import { ComponentId } from '@core/index';
import { ComponentPool } from '@core/index';
import { ComponentNotFoundError } from '@base/component/index';
import { ComponentDuplicateError } from '@base/component/index';
import { MapComponentPool } from '@base/component/index';

export class BaseEntity implements Entity {
    private entityId: EntityId;
    private entityComponents: ComponentPool;

    constructor (
        id: EntityId,
        components: ComponentPool = new MapComponentPool()
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