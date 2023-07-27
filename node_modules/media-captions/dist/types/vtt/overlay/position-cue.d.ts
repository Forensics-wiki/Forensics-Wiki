import type { VTTCue } from '../vtt-cue';
import { type Box } from './box';
export declare function positionCue(container: Box, cue: VTTCue, displayEl: HTMLElement, boxes: Box[]): Box;
export declare function computeCueLine(cue: VTTCue): number;
export declare function computeCuePosition(cue: VTTCue): number;
export declare function computeCuePositionAlignment(cue: VTTCue, dir: 'ltr' | 'rtl'): PositionAlignSetting;
