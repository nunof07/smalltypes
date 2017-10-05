import Move from "./components/Move";
import Collide from "./components/Collide";
import Display from "./components/Display";
import TypeComponentRegistry from './core/TypeComponentRegistry';
import NanoEntityPool from './nano/NanoEntityPool';
import CoreComponentId from "./core/CoreComponentId";

export default function () {
    const pool = new NanoEntityPool();
    const first = pool.create();
    first.attach(new Move());
    first.attach(new Display());

    console.log('first has Move, Display', first.has([new CoreComponentId('move'), new CoreComponentId('display')]));
    console.log('first has Collide', first.has([new CoreComponentId('collide')]));

    const second = pool.create();
    second.attach(new Collide());
    
    console.log('second has Move, Display', second.has([new CoreComponentId('move'), new CoreComponentId('display')]));
    console.log('second has Collide', second.has([new CoreComponentId('collide')]));

    console.log('all entities with Move, Display', pool.query([new CoreComponentId('move'), new CoreComponentId('display')]));
    console.log('all entities with Collide', pool.query([new CoreComponentId('collide')]));
    console.log('all entities with Move', pool.query([new CoreComponentId('move')]));
};