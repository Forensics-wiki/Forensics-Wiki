/**
 * @see {@link https://www.w3.org/TR/webvtt1/#regions}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VTTRegion}
 */
export declare class VTTRegion {
    /**
     * A string that identifies the region.
     */
    id: string;
    /**
     * A `double` representing the width of the region, as a percentage of the video.
     */
    width: number;
    /**
     * A `double` representing the height of the region, in number of lines.
     */
    lines: number;
    /**
     * A `double` representing the region anchor X offset, as a percentage of the region.
     */
    regionAnchorX: number;
    /**
     * A `double` representing the region anchor Y offset, as a percentage of the region.
     */
    regionAnchorY: number;
    /**
     * A `double` representing the viewport anchor X offset, as a percentage of the video.
     */
    viewportAnchorX: number;
    /**
     * A `double` representing the viewport anchor Y offset, as a percentage of the video.
     */
    viewportAnchorY: number;
    /**
     * An enum representing how adding new cues will move existing cues.
     */
    scroll: '' | 'up';
}
