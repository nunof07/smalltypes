export default interface World {
    initialize(): World;
    start(): World;
    process(): World;
}