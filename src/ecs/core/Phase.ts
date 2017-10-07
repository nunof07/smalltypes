import PhaseId from './PhaseId';

export default interface Phase {
    id(): PhaseId;
    execute(): void;
}