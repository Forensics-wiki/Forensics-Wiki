import { V as VTTParser, a as VTTBlock, b as VTTCue } from './index.js';

const MILLISECOND_SEP_RE = /,/g, TIMESTAMP_SEP = "-->";
class SRTParser extends VTTParser {
  parse(line, lineCount) {
    if (line === "") {
      if (this._cue) {
        this._cues.push(this._cue);
        this._init.onCue?.(this._cue);
        this._cue = null;
      }
      this._block = VTTBlock.None;
    } else if (this._block === VTTBlock.Cue) {
      this._cue.text += (this._cue.text ? "\n" : "") + line;
    } else if (line.includes(TIMESTAMP_SEP)) {
      const result = this._parseTimestamp(line, lineCount);
      if (result) {
        this._cue = new VTTCue(result[0], result[1], result[2].join(" "));
        this._cue.id = this._prevLine;
        this._block = VTTBlock.Cue;
      }
    }
    this._prevLine = line;
  }
  _parseTimestamp(line, lineCount) {
    return super._parseTimestamp(line.replace(MILLISECOND_SEP_RE, "."), lineCount);
  }
}
function createSRTParser() {
  return new SRTParser();
}

export { SRTParser, createSRTParser as default };
