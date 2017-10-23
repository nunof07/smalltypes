/**
 * Seal constructor and prototype.
 * @param target Target.
 */
export function sealed(target: Function): void {
    Object.seal(target);
    Object.seal(target.prototype);
}
