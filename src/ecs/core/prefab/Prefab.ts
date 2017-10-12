import { Component } from '@core/index';

export interface Prefab {
    create(): Component[];
}