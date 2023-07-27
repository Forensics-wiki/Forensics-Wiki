/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TextTrackCue}
 */
export declare class TextCue extends EventTarget {
    /**
     * A string that identifies the cue.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TextTrackCue/id}
     */
    id: string;
    /**
     * A `double` that represents the video time that the cue will start being displayed, in seconds.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TextTrackCue/startTime}
     */
    startTime: number;
    /**
     * A `double` that represents the video time that the cue will stop being displayed, in seconds.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TextTrackCue/endTime}
     */
    endTime: number;
    /**
     * Returns a string with the contents of the cue.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VTTCue/text}
     */
    text: string;
    /**
     * A `boolean` for whether the video will pause when this cue stops being displayed.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TextTrackCue/pauseOnExit}
     */
    pauseOnExit: boolean;
    constructor(startTime: number, endTime: number, text: string);
    addEventListener<K extends keyof TextCueEventMap>(type: K, listener: (this: TextTrackCue, ev: TextCueEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof TextCueEventMap>(type: K, listener: (this: TextTrackCue, ev: TextCueEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
}
export interface TextCueEventMap {
    enter: Event;
    exit: Event;
}
