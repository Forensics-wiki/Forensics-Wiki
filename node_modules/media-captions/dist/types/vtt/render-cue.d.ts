import { type VTTNode } from './tokenize-cue';
import type { VTTCue } from './vtt-cue';
export declare function createVTTCueTemplate(cue: VTTCue): VTTCueTemplate;
export interface VTTCueTemplate {
    readonly cue: VTTCue;
    readonly content: DocumentFragment;
}
export declare function renderVTTCueString(cue: VTTCue, currentTime?: number): string;
export declare function renderVTTTokensString(tokens: VTTNode[], currentTime?: number): string;
export declare function updateTimedVTTCueNodes(root: Element, currentTime: number): void;
