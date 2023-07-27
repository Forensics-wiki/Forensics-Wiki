import type { VTTCue } from '../vtt-cue';
import type { VTTRegion } from '../vtt-region';
export declare class CaptionsRenderer {
    readonly overlay: HTMLElement;
    private _overlayBox;
    private _currentTime;
    private _dir;
    private _activeCues;
    private _isResizing;
    private readonly _resizeObserver;
    private readonly _regions;
    private readonly _cues;
    get dir(): "ltr" | "rtl";
    set dir(dir: "ltr" | "rtl");
    get currentTime(): number;
    set currentTime(time: number);
    constructor(overlay: HTMLElement, init?: CaptionsRendererInit);
    changeTrack({ regions, cues }: CaptionsRendererTrack): void;
    addCue(cue: VTTCue): void;
    removeCue(cue: VTTCue): void;
    update(forceUpdate?: boolean): void;
    reset(): void;
    destroy(): void;
    private _resizing;
    protected _resize: () => void;
    private _updateOverlay;
    private _render;
    private _buildRegions;
    private _createRegionElement;
    private _createCueElement;
    private _hasRegion;
}
export interface CaptionsRendererInit {
    dir?: 'ltr' | 'rtl';
}
export interface CaptionsRendererTrack {
    id?: string;
    regions?: VTTRegion[];
    cues: VTTCue[];
}
