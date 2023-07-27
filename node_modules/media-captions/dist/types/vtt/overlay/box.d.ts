export declare const STARTING_BOX: unique symbol;
export type DirectionalAxis = '-x' | '+x' | '-y' | '+y';
export interface Box {
    top: number;
    left: number;
    right: number;
    bottom: number;
    width: number;
    height: number;
}
export declare function createBox(box: Box | HTMLElement): Box;
export declare function moveBox(box: Box, axis: DirectionalAxis, delta: number): void;
export declare function isBoxCollision(a: Box, b: Box): boolean;
export declare function isAnyBoxCollision(box: Box, boxes: Box[]): Box | null;
export declare function isWithinBox(container: DOMRect | Box, box: Box): boolean;
export declare function isBoxOutOfBounds(container: Box, box: Box, axis: DirectionalAxis): boolean;
export declare function calcBoxIntersectPercentage(container: Box, box: Box): number;
export declare function createCSSBox(container: Box, box: Box): {
    top: number;
    left: number;
    right: number;
    bottom: number;
};
export declare function resolveRelativeBox(container: Box, box: Box): Box;
export declare const BOX_SIDES: readonly ["top", "left", "right", "bottom"];
export declare function setBoxCSSVars(el: HTMLElement, container: Box, box: Box, prefix: string): void;
export declare function avoidBoxCollisions(container: Box, box: Box, boxes: Box[], axis: DirectionalAxis[]): Box;
