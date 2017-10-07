import PhasePool from './PhasePool';

export default interface System {
    phases(): PhasePool;
}