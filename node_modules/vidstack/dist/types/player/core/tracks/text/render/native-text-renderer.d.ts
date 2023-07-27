import type { TextTrack as VdsTextTrack } from '../text-track';
import type { TextRenderer } from './text-renderer';
export declare class NativeTextRenderer implements TextRenderer {
    readonly priority = 0;
    private _display;
    private _video;
    private _track;
    private _tracks;
    canRender(): boolean;
    attach(video: HTMLVideoElement): void;
    addTrack(track: VdsTextTrack): void;
    removeTrack(track: VdsTextTrack): void;
    changeTrack(track: VdsTextTrack | null): void;
    setDisplay(display: boolean): void;
    detach(): void;
    private _attachTrack;
    private _createTrackElement;
    private _copyCues;
    private _onChange;
}
