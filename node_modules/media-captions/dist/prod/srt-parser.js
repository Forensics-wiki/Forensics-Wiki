import { V as VTTParser, a as VTTBlock, b as VTTCue } from './index.js';

const MILLISECOND_SEP_RE = /,/g, TIMESTAMP_SEP = "-->";
class SRTParser extends VTTParser {
  parse(line, lineCount) {
    if (line === "") {
      if (this.a) {
        this.j.push(this.a);
        this.f.onCue?.(this.a);
        this.a = null;
      }
      this.c = VTTBlock.None;
    } else if (this.c === VTTBlock.Cue) {
      this.a.text += (this.a.text ? "\n" : "") + line;
    } else if (line.includes(TIMESTAMP_SEP)) {
      const result = this.o(line, lineCount);
      if (result) {
        this.a = new VTTCue(result[0], result[1], result[2].join(" "));
        this.a.id = this.l;
        this.c = VTTBlock.Cue;
      }
    }
    this.l = line;
  }
  o(line, lineCount) {
    return super.o(line.replace(MILLISECOND_SEP_RE, "."), lineCount);
  }
}
function createSRTParser() {
  return new SRTParser();
}

export { SRTParser, createSRTParser as default };
