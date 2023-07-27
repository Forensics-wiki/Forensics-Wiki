import type { VTTCue } from './vtt-cue';
export declare function tokenizeVTTCue(cue: VTTCue): VTTNode[];
/**
 * @see {@link https://www.w3.org/TR/webvtt1/#cue-text-parsing-rules}
 */
export type VTTNode = VTTBlockNode | VTTLeafNode;
/**
 * @see {@link https://www.w3.org/TR/webvtt1/#cue-text-parsing-rules}
 */
export type VTTBlockType = 'c' | 'i' | 'b' | 'u' | 'ruby' | 'rt' | 'v' | 'lang' | 'ts';
/**
 * @see {@link https://www.w3.org/TR/webvtt1/#webvtt-internal-node-object}
 */
export type VTTBlockNode = VTTClassNode | VTTItalicNode | VTTBoldNode | VTTUnderlineNode | VTTRubyNode | VTTRubyTextNode | VTTVoiceNode | VTTLangNode | VTTTimestampNode;
export interface VTTBlock {
    tagName: string;
    class?: string;
    color?: string;
    bgColor?: string;
    children: (VTTBlockNode | VTTLeafNode)[];
}
export interface VTTClassNode extends VTTBlock {
    type: 'c';
}
export interface VTTItalicNode extends VTTBlock {
    type: 'i';
}
export interface VTTBoldNode extends VTTBlock {
    type: 'b';
}
export interface VTTUnderlineNode extends VTTBlock {
    type: 'u';
}
export interface VTTRubyNode extends VTTBlock {
    type: 'ruby';
}
export interface VTTRubyTextNode extends VTTBlock {
    type: 'rt';
}
export interface VTTVoiceNode extends VTTBlock {
    type: 'v';
    voice: string;
}
export interface VTTLangNode extends VTTBlock {
    type: 'lang';
    lang: string;
}
export interface VTTTimestampNode extends VTTBlock {
    type: 'timestamp';
    time: number;
}
/**
 * @see {@link https://www.w3.org/TR/webvtt1/#webvtt-leaf-node-object}
 */
export type VTTLeafNode = VTTextNode;
export interface VTTextNode {
    type: 'text';
    data: string;
}
