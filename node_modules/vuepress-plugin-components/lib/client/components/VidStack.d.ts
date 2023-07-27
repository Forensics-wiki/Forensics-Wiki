import * as vue from 'vue';
import { PropType, VNode } from 'vue';

interface VidStackSource {
    src: string;
    type: string;
}
interface VidStackTrack {
    /**
     * Track source URL.
     */
    src: string;
    /**
     * The language of the text track data. It must be a valid BCP 47 language tag.
     */
    srclang: string;
    /**
     * If true, this track will be enabled by default.
     *
     * @default false
     */
    default?: boolean;
    /**
     * A string which uniquely identifies the track within the media.
     */
    id?: string;
    /**
     * A human-readable label for the track, or an empty string if unknown.
     *
     * @default ''
     */
    label?: string;
    /**
     * A string specifying the category into which the track falls. For example, the main audio
     * track would have a kind of "main".
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioTrack/kind}
     */
    kind: string;
}
declare const _default: vue.DefineComponent<{
    /**
     * VidStack sources
     */
    sources: {
        type: PropType<(string | VidStackSource)[]>;
        default: () => never[];
    };
    /**
     * VidStack tracks
     */
    tracks: {
        type: PropType<VidStackTrack[]>;
        default: () => never[];
    };
}, () => VNode, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    /**
     * VidStack sources
     */
    sources: {
        type: PropType<(string | VidStackSource)[]>;
        default: () => never[];
    };
    /**
     * VidStack tracks
     */
    tracks: {
        type: PropType<VidStackTrack[]>;
        default: () => never[];
    };
}>>, {
    sources: (string | VidStackSource)[];
    tracks: VidStackTrack[];
}, {}>;

export { VidStackSource, VidStackTrack, _default as default };
