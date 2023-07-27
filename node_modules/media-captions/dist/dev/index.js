const ParseErrorCode = {
  LoadFail: 0,
  BadSignature: 1,
  BadTimestamp: 2,
  BadSettingValue: 3,
  BadFormat: 4,
  UnknownSetting: 5
};
class ParseError extends Error {
  code;
  line;
  constructor(init) {
    super(init.reason);
    this.code = init.code;
    this.line = init.line;
  }
}

const LINE_TERMINATOR_RE = /\r?\n|\r/gm;
class TextLineTransformStream {
  writable;
  readable;
  constructor(encoding) {
    const transformer = new TextStreamLineIterator(encoding);
    this.writable = new WritableStream({
      write(chunk) {
        transformer.transform(chunk);
      },
      close() {
        transformer.close();
      }
    });
    this.readable = new ReadableStream({
      start(controller) {
        transformer.onLine = (line) => controller.enqueue(line);
        transformer.onClose = () => controller.close();
      }
    });
  }
}
class TextStreamLineIterator {
  _buffer = "";
  _decoder;
  onLine;
  onClose;
  constructor(encoding) {
    this._decoder = new TextDecoder(encoding);
  }
  transform(chunk) {
    this._buffer += this._decoder.decode(chunk, { stream: true });
    const lines = this._buffer.split(LINE_TERMINATOR_RE);
    this._buffer = lines.pop() || "";
    for (let i = 0; i < lines.length; i++)
      this.onLine(lines[i].trim());
  }
  close() {
    if (this._buffer)
      this.onLine(this._buffer.trim());
    this._buffer = "";
    this.onClose();
  }
}

async function parseText(text, options) {
  const stream = new ReadableStream({
    start(controller) {
      const lines = text.split(LINE_TERMINATOR_RE);
      for (const line of lines)
        controller.enqueue(line);
      controller.close();
    }
  });
  return parseTextStream(stream, options);
}
async function parseTextStream(stream, options) {
  const type = options?.type ?? "vtt";
  let factory;
  if (typeof type === "string") {
    switch (type) {
      case "srt":
        factory = (await import('./srt-parser.js')).default;
        break;
      case "ssa":
      case "ass":
        factory = (await import('./ssa-parser.js')).default;
        break;
      default:
        factory = (await Promise.resolve().then(function () { return vttParser; })).default;
    }
  } else {
    factory = type;
  }
  let result;
  const reader = stream.getReader(), parser = factory(), errors = options?.errors !== false || !!options?.strict || !!options?.errors;
  await parser.init({
    strict: false,
    ...options,
    errors,
    type,
    cancel() {
      reader.cancel();
      result = parser.done(true);
    }
  });
  let i = 1;
  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      parser.parse("", i);
      result = parser.done(false);
      break;
    }
    parser.parse(value, i);
    i++;
  }
  return result;
}

async function parseResponse(response, options) {
  const res = await response;
  if (!res.ok || !res.body) {
    let error;
    {
      error = new ParseError({
        code: ParseErrorCode.LoadFail,
        reason: !res.ok ? `response is not ok (status: ${res.status})` : `response body is missing (status: ${res.status})`,
        line: -1
      });
      options?.onError?.(error);
    }
    return {
      metadata: {},
      cues: [],
      regions: [],
      errors: [error]
    };
  }
  const contentType = res.headers.get("content-type") || "", type = contentType.match(/text\/(.*?)(?:;|$)/)?.[1], encoding = contentType.match(/charset=(.*?)(?:;|$)/)?.[1];
  return parseByteStream(res.body, { type, encoding, ...options });
}
async function parseByteStream(stream, { encoding = "utf-8", ...options } = {}) {
  const textStream = stream.pipeThrough(new TextLineTransformStream(encoding));
  return parseTextStream(textStream, options);
}

class TextCue extends EventTarget {
  /**
   * A string that identifies the cue.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TextTrackCue/id}
   */
  id = "";
  /**
   * A `double` that represents the video time that the cue will start being displayed, in seconds.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TextTrackCue/startTime}
   */
  startTime;
  /**
   * A `double` that represents the video time that the cue will stop being displayed, in seconds.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TextTrackCue/endTime}
   */
  endTime;
  /**
   * Returns a string with the contents of the cue.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VTTCue/text}
   */
  text;
  /**
   * A `boolean` for whether the video will pause when this cue stops being displayed.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TextTrackCue/pauseOnExit}
   */
  pauseOnExit = false;
  constructor(startTime, endTime, text) {
    super();
    this.startTime = startTime;
    this.endTime = endTime;
    this.text = text;
  }
  addEventListener(type, listener, options) {
    super.addEventListener(type, listener, options);
  }
  removeEventListener(type, listener, options) {
    super.removeEventListener(type, listener, options);
  }
}

const CueBase = window.VTTCue;
class VTTCue extends CueBase {
  /**
   * A `VTTRegion` object describing the video's sub-region that the cue will be drawn onto,
   * or `null` if none is assigned.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VTTCue/region}
   */
  region = null;
  /**
   * The cue writing direction.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VTTCue/vertical}
   */
  vertical = "";
  /**
   * Returns `true` if the `VTTCue.line` attribute is an integer number of lines or a percentage
   * of the video size.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VTTCue/snapToLines}
   */
  snapToLines = true;
  /**
   * Returns the line positioning of the cue. This can be the string `'auto'` or a number whose
   * interpretation depends on the value of `VTTCue.snapToLines`.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VTTCue/line}
   */
  line = "auto";
  /**
   * Returns an enum representing the alignment of the `VTTCue.line`.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VTTCue/lineAlign}
   */
  lineAlign = "start";
  /**
   * Returns the indentation of the cue within the line. This can be the string `'auto'` or a
   * number representing the percentage of the `VTTCue.region`, or the video size if `VTTCue`.region`
   * is `null`.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VTTCue/position}
   */
  position = "auto";
  /**
   * Returns an enum representing the alignment of the cue. This is used to determine what
   * the `VTTCue.position` is anchored to. The default is `'auto'`.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VTTCue/positionAlign}
   */
  positionAlign = "auto";
  /**
   * Returns a double representing the size of the cue, as a percentage of the video size.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VTTCue/size}
   */
  size = 100;
  /**
   * Returns an enum representing the alignment of all the lines of text within the cue box.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VTTCue/align}
   */
  align = "center";
  /**
   * Additional styles associated with the cue.
   */
  style;
}

class VTTRegion {
  /**
   * A string that identifies the region.
   */
  id = "";
  /**
   * A `double` representing the width of the region, as a percentage of the video.
   */
  width = 100;
  /**
   * A `double` representing the height of the region, in number of lines.
   */
  lines = 3;
  /**
   * A `double` representing the region anchor X offset, as a percentage of the region.
   */
  regionAnchorX = 0;
  /**
   * A `double` representing the region anchor Y offset, as a percentage of the region.
   */
  regionAnchorY = 100;
  /**
   * A `double` representing the viewport anchor X offset, as a percentage of the video.
   */
  viewportAnchorX = 0;
  /**
   * A `double` representing the viewport anchor Y offset, as a percentage of the video.
   */
  viewportAnchorY = 100;
  /**
   * An enum representing how adding new cues will move existing cues.
   */
  scroll = "";
}

const COMMA$1 = ",", PERCENT_SIGN$1 = "%";
function toNumber(text) {
  const num = parseInt(text, 10);
  return !Number.isNaN(num) ? num : null;
}
function toPercentage(text) {
  const num = parseInt(text.replace(PERCENT_SIGN$1, ""), 10);
  return !Number.isNaN(num) && num >= 0 && num <= 100 ? num : null;
}
function toCoords(text) {
  if (!text.includes(COMMA$1))
    return null;
  const [x, y] = text.split(COMMA$1).map(toPercentage);
  return x !== null && y !== null ? [x, y] : null;
}
function toFloat(text) {
  const num = parseFloat(text);
  return !Number.isNaN(num) ? num : null;
}

const HEADER_MAGIC = "WEBVTT", COMMA = ",", PERCENT_SIGN = "%", SETTING_SEP_RE = /[:=]/, SETTING_LINE_RE = /^[\s\t]*(region|vertical|line|position|size|align)[:=]/, NOTE_BLOCK_START = "NOTE", REGION_BLOCK_START = "REGION", REGION_BLOCK_START_RE = /^REGION:?[\s\t]+/, SPACE_RE = /[\s\t]+/, TIMESTAMP_SEP = "-->", TIMESTAMP_SEP_RE = /[\s\t]*-->[\s\t]+/, ALIGN_RE = /start|center|end|left|right/, LINE_ALIGN_RE = /start|center|end/, POS_ALIGN_RE = /line-(?:left|right)|center|auto/, TIMESTAMP_RE = /^(?:(\d{1,2}):)?(\d{2}):(\d{2})(?:\.(\d{1,3}))?$/;
var VTTBlock = /* @__PURE__ */ ((VTTBlock2) => {
  VTTBlock2[VTTBlock2["None"] = 0] = "None";
  VTTBlock2[VTTBlock2["Header"] = 1] = "Header";
  VTTBlock2[VTTBlock2["Cue"] = 2] = "Cue";
  VTTBlock2[VTTBlock2["Region"] = 3] = "Region";
  VTTBlock2[VTTBlock2["Note"] = 4] = "Note";
  return VTTBlock2;
})(VTTBlock || {});
class VTTParser {
  _init;
  _block = 0 /* None */;
  _metadata = {};
  _regions = {};
  _cues = [];
  _cue = null;
  _region = null;
  _errors = [];
  _errorBuilder;
  _prevLine = "";
  async init(init) {
    this._init = init;
    if (init.strict)
      this._block = 1 /* Header */;
    if (init.errors)
      this._errorBuilder = (await import('./errors.js')).ParseErrorBuilder;
  }
  parse(line, lineCount) {
    if (line === "") {
      if (this._cue) {
        this._cues.push(this._cue);
        this._init.onCue?.(this._cue);
        this._cue = null;
      } else if (this._region) {
        this._regions[this._region.id] = this._region;
        this._init.onRegion?.(this._region);
        this._region = null;
      } else if (this._block === 1 /* Header */) {
        this._parseHeader(line, lineCount);
        this._init.onHeaderMetadata?.(this._metadata);
      }
      this._block = 0 /* None */;
    } else if (this._block) {
      switch (this._block) {
        case 1 /* Header */:
          this._parseHeader(line, lineCount);
          break;
        case 2 /* Cue */:
          if (this._cue) {
            const hasText = this._cue.text.length > 0;
            if (!hasText && SETTING_LINE_RE.test(line)) {
              this._parseCueSettings(line.split(SPACE_RE), lineCount);
            } else {
              this._cue.text += (hasText ? "\n" : "") + line;
            }
          }
          break;
        case 3 /* Region */:
          this._parseRegionSettings(line.split(SPACE_RE), lineCount);
          break;
      }
    } else if (line.startsWith(NOTE_BLOCK_START)) {
      this._block = 4 /* Note */;
    } else if (line.startsWith(REGION_BLOCK_START)) {
      this._block = 3 /* Region */;
      this._region = new VTTRegion();
      this._parseRegionSettings(line.replace(REGION_BLOCK_START_RE, "").split(SPACE_RE), lineCount);
    } else if (line.includes(TIMESTAMP_SEP)) {
      const result = this._parseTimestamp(line, lineCount);
      if (result) {
        this._cue = new VTTCue(result[0], result[1], "");
        this._cue.id = this._prevLine;
        this._parseCueSettings(result[2], lineCount);
      }
      this._block = 2 /* Cue */;
    } else if (lineCount === 1) {
      this._parseHeader(line, lineCount);
    }
    this._prevLine = line;
  }
  done() {
    return {
      metadata: this._metadata,
      cues: this._cues,
      regions: Object.values(this._regions),
      errors: this._errors
    };
  }
  _parseHeader(line, lineCount) {
    if (lineCount > 1) {
      if (SETTING_SEP_RE.test(line)) {
        const [key, value] = line.split(SETTING_SEP_RE);
        if (key)
          this._metadata[key] = (value || "").replace(SPACE_RE, "");
      }
    } else if (line.startsWith(HEADER_MAGIC)) {
      this._block = 1 /* Header */;
    } else {
      this._handleError(this._errorBuilder?._badVTTHeader());
    }
  }
  _parseTimestamp(line, lineCount) {
    const [startTimeText, trailingText = ""] = line.split(TIMESTAMP_SEP_RE), [endTimeText, ...settingsText] = trailingText.split(SPACE_RE), startTime = parseVTTTimestamp(startTimeText), endTime = parseVTTTimestamp(endTimeText);
    if (startTime !== null && endTime !== null && endTime > startTime) {
      return [startTime, endTime, settingsText];
    } else {
      if (startTime === null) {
        this._handleError(this._errorBuilder?._badStartTimestamp(startTimeText, lineCount));
      }
      if (endTime === null) {
        this._handleError(this._errorBuilder?._badEndTimestamp(endTimeText, lineCount));
      }
      if (startTime != null && endTime !== null && endTime > startTime) {
        this._handleError(this._errorBuilder?._badRangeTimestamp(startTime, endTime, lineCount));
      }
    }
  }
  /**
   * @see {@link https://www.w3.org/TR/webvtt1/#region-settings-parsing}
   */
  _parseRegionSettings(settings, line) {
    let badValue;
    for (let i = 0; i < settings.length; i++) {
      if (SETTING_SEP_RE.test(settings[i])) {
        badValue = false;
        const [name, value] = settings[i].split(SETTING_SEP_RE);
        switch (name) {
          case "id":
            this._region.id = value;
            break;
          case "width":
            const width = toPercentage(value);
            if (width !== null)
              this._region.width = width;
            else
              badValue = true;
            break;
          case "lines":
            const lines = toNumber(value);
            if (lines !== null)
              this._region.lines = lines;
            else
              badValue = true;
            break;
          case "regionanchor":
            const region = toCoords(value);
            if (region !== null) {
              this._region.regionAnchorX = region[0];
              this._region.regionAnchorY = region[1];
            } else
              badValue = true;
            break;
          case "viewportanchor":
            const viewport = toCoords(value);
            if (viewport !== null) {
              this._region.viewportAnchorX = viewport[0];
              this._region.viewportAnchorY = viewport[1];
            } else
              badValue = true;
            break;
          case "scroll":
            if (value === "up")
              this._region.scroll = "up";
            else
              badValue = true;
            break;
          default:
            this._handleError(this._errorBuilder?._unknownRegionSetting(name, value, line));
        }
        if (badValue) {
          this._handleError(this._errorBuilder?._badRegionSetting(name, value, line));
        }
      }
    }
  }
  /**
   * @see {@link https://www.w3.org/TR/webvtt1/#cue-timings-and-settings-parsing}
   */
  _parseCueSettings(settings, line) {
    let badValue;
    for (let i = 0; i < settings.length; i++) {
      badValue = false;
      if (SETTING_SEP_RE.test(settings[i])) {
        const [name, value] = settings[i].split(SETTING_SEP_RE);
        switch (name) {
          case "region":
            const region = this._regions[value];
            if (region)
              this._cue.region = region;
            break;
          case "vertical":
            if (value === "lr" || value === "rl") {
              this._cue.vertical = value;
              this._cue.region = null;
            } else
              badValue = true;
            break;
          case "line":
            const [linePos, lineAlign] = value.split(COMMA);
            if (linePos.includes(PERCENT_SIGN)) {
              const percentage = toPercentage(linePos);
              if (percentage !== null) {
                this._cue.line = percentage;
                this._cue.snapToLines = false;
              } else
                badValue = true;
            } else {
              const number = toFloat(linePos);
              if (number !== null)
                this._cue.line = number;
              else
                badValue = true;
            }
            if (LINE_ALIGN_RE.test(lineAlign)) {
              this._cue.lineAlign = lineAlign;
            } else if (lineAlign) {
              badValue = true;
            }
            if (this._cue.line !== "auto")
              this._cue.region = null;
            break;
          case "position":
            const [colPos, colAlign] = value.split(COMMA), position = toPercentage(colPos);
            if (position !== null)
              this._cue.position = position;
            else
              badValue = true;
            if (colAlign && POS_ALIGN_RE.test(colAlign)) {
              this._cue.positionAlign = colAlign;
            } else if (colAlign) {
              badValue = true;
            }
            break;
          case "size":
            const size = toPercentage(value);
            if (size !== null) {
              this._cue.size = size;
              if (size < 100)
                this._cue.region = null;
            } else {
              badValue = true;
            }
            break;
          case "align":
            if (ALIGN_RE.test(value)) {
              this._cue.align = value;
            } else {
              badValue = true;
            }
            break;
          default:
            this._handleError(this._errorBuilder?._unknownCueSetting(name, value, line));
        }
        if (badValue) {
          this._handleError(this._errorBuilder?._badCueSetting(name, value, line));
        }
      }
    }
  }
  _handleError(error) {
    if (!error)
      return;
    this._errors.push(error);
    if (this._init.strict) {
      this._init.cancel();
      throw error;
    } else {
      this._init.onError?.(error);
    }
  }
}
function parseVTTTimestamp(timestamp) {
  const match = timestamp.match(TIMESTAMP_RE);
  if (!match)
    return null;
  const hours = match[1] ? parseInt(match[1], 10) : 0, minutes = parseInt(match[2], 10), seconds = parseInt(match[3], 10), milliseconds = match[4] ? parseInt(match[4].padEnd(3, "0"), 10) : 0, total = hours * 3600 + minutes * 60 + seconds + milliseconds / 1e3;
  if (hours < 0 || minutes < 0 || seconds < 0 || milliseconds < 0 || minutes > 59 || seconds > 59) {
    return null;
  }
  return total;
}
function createVTTParser() {
  return new VTTParser();
}

var vttParser = /*#__PURE__*/Object.freeze({
  __proto__: null,
  VTTBlock: VTTBlock,
  VTTParser: VTTParser,
  default: createVTTParser,
  parseVTTTimestamp: parseVTTTimestamp
});

const DIGIT_RE = /[0-9]/, MULTI_SPACE_RE = /[\s\t]+/, TAG_NAME = {
  c: "span",
  i: "i",
  b: "b",
  u: "u",
  ruby: "ruby",
  rt: "rt",
  v: "span",
  lang: "span",
  timestamp: "span"
}, HTML_ENTITIES = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&nbsp;": "\xA0",
  "&lrm;": "\u200E",
  "&rlm;": "\u200F"
}, HTML_ENTITY_RE = /&(?:amp|lt|gt|quot|#(0+)?39|nbsp|lrm|rlm);/g, COLORS = /* @__PURE__ */ new Set([
  "white",
  "lime",
  "cyan",
  "red",
  "yellow",
  "magenta",
  "blue",
  "black"
]), BLOCK_TYPES = /* @__PURE__ */ new Set(Object.keys(TAG_NAME));
function tokenizeVTTCue(cue) {
  let buffer = "", mode = 1 /* Data */, result = [], stack = [], node;
  for (let i = 0; i < cue.text.length; i++) {
    const char = cue.text[i];
    switch (mode) {
      case 1 /* Data */:
        if (char === "<") {
          addText();
          mode = 2 /* Tag */;
        } else {
          buffer += char;
        }
        break;
      case 2 /* Tag */:
        switch (char) {
          case "\n":
          case "	":
          case " ":
            addNode();
            mode = 4 /* Annotation */;
            break;
          case ".":
            addNode();
            mode = 3 /* Class */;
            break;
          case "/":
            mode = 5 /* EndTag */;
            break;
          case ">":
            addNode();
            mode = 1 /* Data */;
            break;
          default:
            if (!buffer && DIGIT_RE.test(char))
              mode = 6 /* Timestamp */;
            buffer += char;
            break;
        }
        break;
      case 3 /* Class */:
        switch (char) {
          case "	":
          case " ":
          case "\n":
            addClass();
            if (node)
              node.class?.trim();
            mode = 4 /* Annotation */;
            break;
          case ".":
            addClass();
            break;
          case ">":
            addClass();
            if (node)
              node.class?.trim();
            mode = 1 /* Data */;
            break;
          default:
            buffer += char;
        }
        break;
      case 4 /* Annotation */:
        if (char === ">") {
          buffer = buffer.replace(MULTI_SPACE_RE, " ");
          if (node?.type === "v")
            node.voice = replaceHTMLEntities(buffer);
          else if (node?.type === "lang")
            node.lang = replaceHTMLEntities(buffer);
          buffer = "";
          mode = 1 /* Data */;
        } else {
          buffer += char;
        }
        break;
      case 5 /* EndTag */:
        if (char === ">") {
          buffer = "";
          node = stack.pop();
          mode = 1 /* Data */;
        }
        break;
      case 6 /* Timestamp */:
        if (char === ">") {
          const time = parseVTTTimestamp(buffer);
          if (time !== null && time >= cue.startTime && time <= cue.endTime) {
            buffer = "timestamp";
            addNode();
            node.time = time;
          }
          buffer = "";
          mode = 1 /* Data */;
        } else {
          buffer += char;
        }
        break;
    }
  }
  function addNode() {
    if (BLOCK_TYPES.has(buffer)) {
      const parent = node;
      node = createBlockNode(buffer);
      if (parent) {
        if (stack[stack.length - 1] !== parent)
          stack.push(parent);
        parent.children.push(node);
      } else
        result.push(node);
    }
    buffer = "";
    mode = 1 /* Data */;
  }
  function addClass() {
    if (node && buffer) {
      const color = buffer.replace("bg_", "");
      if (COLORS.has(color)) {
        node[buffer.startsWith("bg_") ? "bgColor" : "color"] = color;
      } else {
        node.class = !node.class ? buffer : node.class + " " + buffer;
      }
    }
    buffer = "";
  }
  function addText() {
    if (!buffer)
      return;
    const text = { type: "text", data: replaceHTMLEntities(buffer) };
    node ? node.children.push(text) : result.push(text);
    buffer = "";
  }
  if (mode === 1 /* Data */)
    addText();
  return result;
}
function createBlockNode(type) {
  return {
    tagName: TAG_NAME[type],
    type,
    children: []
  };
}
function replaceHTMLEntities(text) {
  return text.replace(HTML_ENTITY_RE, (entity) => HTML_ENTITIES[entity] || "'");
}

function setCSSVar(el, name, value) {
  el.style.setProperty(`--${name}`, value + "");
}
function setDataAttr(el, name, value = true) {
  el.setAttribute(`data-${name}`, value === true ? "" : value + "");
}
function setPartAttr(el, name) {
  el.setAttribute("part", name);
}
function getLineHeight(el) {
  return parseFloat(getComputedStyle(el).lineHeight) || 0;
}

function createVTTCueTemplate(cue) {
  const template = document.createElement("template");
  template.innerHTML = renderVTTCueString(cue);
  return { cue, content: template.content };
}
function renderVTTCueString(cue, currentTime = 0) {
  return renderVTTTokensString(tokenizeVTTCue(cue), currentTime);
}
function renderVTTTokensString(tokens, currentTime = 0) {
  let attrs, result = "";
  for (const token of tokens) {
    if (token.type === "text") {
      result += token.data;
    } else {
      const isTimestamp = token.type === "timestamp";
      attrs = {};
      attrs.class = token.class;
      attrs.title = token.type === "v" && token.voice;
      attrs.lang = token.type === "lang" && token.lang;
      attrs["part"] = token.type === "v" && "voice";
      if (isTimestamp) {
        attrs["part"] = "timed";
        attrs["data-time"] = token.time;
        attrs["data-future"] = token.time > currentTime;
        attrs["data-past"] = token.time < currentTime;
      }
      attrs.style = `${token.color ? `color: ${token.color};` : ""}${token.bgColor ? `background-color: ${token.bgColor};` : ""}`;
      const attributes = Object.entries(attrs).filter((v) => v[1]).map((v) => `${v[0]}="${v[1] === true ? "" : v[1]}"`).join(" ");
      result += `<${token.tagName}${attributes ? " " + attributes : ""}>${renderVTTTokensString(
        token.children
      )}</${token.tagName}>`;
    }
  }
  return result;
}
function updateTimedVTTCueNodes(root, currentTime) {
  for (const el of root.querySelectorAll('[part="timed"]')) {
    const time = Number(el.getAttribute("data-time"));
    if (Number.isNaN(time))
      continue;
    if (time > currentTime)
      setDataAttr(el, "future");
    else
      el.removeAttribute("data-future");
    if (time < currentTime)
      setDataAttr(el, "past");
    else
      el.removeAttribute("data-past");
  }
}

function debounce(fn, delay) {
  let timeout = null, args;
  function run() {
    clear();
    fn(...args);
    args = void 0;
  }
  function clear() {
    clearTimeout(timeout);
    timeout = null;
  }
  function debounce2() {
    args = [].slice.call(arguments);
    clear();
    timeout = setTimeout(run, delay);
  }
  return debounce2;
}

const STARTING_BOX = Symbol("STARTING_BOX" );
function createBox(box) {
  if (box instanceof HTMLElement) {
    return {
      top: box.offsetTop,
      width: box.clientWidth,
      height: box.clientHeight,
      left: box.offsetLeft,
      right: box.offsetLeft + box.clientWidth,
      bottom: box.offsetTop + box.clientHeight
    };
  }
  return { ...box };
}
function moveBox(box, axis, delta) {
  switch (axis) {
    case "+x":
      box.left += delta;
      box.right += delta;
      break;
    case "-x":
      box.left -= delta;
      box.right -= delta;
      break;
    case "+y":
      box.top += delta;
      box.bottom += delta;
      break;
    case "-y":
      box.top -= delta;
      box.bottom -= delta;
      break;
  }
}
function isBoxCollision(a, b) {
  return a.left <= b.right && a.right >= b.left && a.top <= b.bottom && a.bottom >= b.top;
}
function isAnyBoxCollision(box, boxes) {
  for (let i = 0; i < boxes.length; i++)
    if (isBoxCollision(box, boxes[i]))
      return boxes[i];
  return null;
}
function isWithinBox(container, box) {
  return box.top >= 0 && box.bottom <= container.height && box.left >= 0 && box.right <= container.width;
}
function isBoxOutOfBounds(container, box, axis) {
  switch (axis) {
    case "+x":
      return box.left < 0;
    case "-x":
      return box.right > container.width;
    case "+y":
      return box.top < 0;
    case "-y":
      return box.bottom > container.height;
  }
}
function calcBoxIntersectPercentage(container, box) {
  const x = Math.max(0, Math.min(container.width, box.right) - Math.max(0, box.left)), y = Math.max(0, Math.min(container.height, box.bottom) - Math.max(0, box.top)), intersectArea = x * y;
  return intersectArea / (container.height * container.width);
}
function createCSSBox(container, box) {
  return {
    top: box.top / container.height,
    left: box.left / container.width,
    right: (container.width - box.right) / container.width,
    bottom: (container.height - box.bottom) / container.height
  };
}
function resolveRelativeBox(container, box) {
  box.top = box.top * container.height;
  box.left = box.left * container.width;
  box.right = container.width - box.right * container.width;
  box.bottom = container.height - box.bottom * container.height;
  return box;
}
const BOX_SIDES = ["top", "left", "right", "bottom"];
function setBoxCSSVars(el, container, box, prefix) {
  const cssBox = createCSSBox(container, box);
  for (const side of BOX_SIDES) {
    setCSSVar(el, `${prefix}-${side}`, cssBox[side] * 100 + "%");
  }
}
function avoidBoxCollisions(container, box, boxes, axis) {
  let percentage = 1, positionedBox, startBox = { ...box };
  for (let i = 0; i < axis.length; i++) {
    while (isBoxOutOfBounds(container, box, axis[i]) || isWithinBox(container, box) && isAnyBoxCollision(box, boxes)) {
      moveBox(box, axis[i], 1);
    }
    if (isWithinBox(container, box))
      return box;
    const intersection = calcBoxIntersectPercentage(container, box);
    if (percentage > intersection) {
      positionedBox = { ...box };
      percentage = intersection;
    }
    box = { ...startBox };
  }
  return positionedBox || startBox;
}

const POSITION_OVERRIDE = Symbol("POSITION_OVERRIDE" );
function positionCue(container, cue, displayEl, boxes) {
  let cueEl = displayEl.firstElementChild, line = computeCueLine(cue), displayBox, axis = [];
  if (!displayEl[STARTING_BOX]) {
    displayEl[STARTING_BOX] = createStartingBox(container, displayEl);
  }
  displayBox = resolveRelativeBox(container, { ...displayEl[STARTING_BOX] });
  if (displayEl[POSITION_OVERRIDE]) {
    axis = [displayEl[POSITION_OVERRIDE] === "top" ? "+y" : "-y", "+x", "-x"];
  } else if (cue.snapToLines) {
    let size;
    switch (cue.vertical) {
      case "":
        axis = ["+y", "-y"];
        size = "height";
        break;
      case "rl":
        axis = ["+x", "-x"];
        size = "width";
        break;
      case "lr":
        axis = ["-x", "+x"];
        size = "width";
        break;
    }
    let step = getLineHeight(cueEl), position = step * Math.round(line), maxPosition = container[size] + step, initialAxis = axis[0];
    if (Math.abs(position) > maxPosition) {
      position = position < 0 ? -1 : 1;
      position *= Math.ceil(maxPosition / step) * step;
    }
    if (line < 0) {
      position += cue.vertical === "" ? container.height : container.width;
      axis = axis.reverse();
    }
    moveBox(displayBox, initialAxis, position);
  } else {
    const isHorizontal = cue.vertical === "", posAxis = isHorizontal ? "+y" : "+x", size = isHorizontal ? displayBox.height : displayBox.width;
    moveBox(
      displayBox,
      posAxis,
      (isHorizontal ? container.height : container.width) * line / 100
    );
    moveBox(
      displayBox,
      posAxis,
      cue.lineAlign === "center" ? size / 2 : cue.lineAlign === "end" ? size : 0
    );
    axis = isHorizontal ? ["-y", "+y", "-x", "+x"] : ["-x", "+x", "-y", "+y"];
  }
  displayBox = avoidBoxCollisions(container, displayBox, boxes, axis);
  setBoxCSSVars(displayEl, container, displayBox, "cue");
  return displayBox;
}
function createStartingBox(container, cueEl) {
  const box = createBox(cueEl), pos = getStyledPositions(cueEl);
  cueEl[POSITION_OVERRIDE] = false;
  if (pos.top) {
    box.top = pos.top;
    box.bottom = pos.top + box.height;
    cueEl[POSITION_OVERRIDE] = "top";
  }
  if (pos.bottom) {
    const bottom = container.height - pos.bottom;
    box.top = bottom - box.height;
    box.bottom = bottom;
    cueEl[POSITION_OVERRIDE] = "bottom";
  }
  if (pos.left)
    box.left = pos.left;
  if (pos.right)
    box.right = container.width - pos.right;
  return createCSSBox(container, box);
}
function getStyledPositions(el) {
  const positions = {};
  for (const side of BOX_SIDES) {
    positions[side] = parseFloat(el.style.getPropertyValue(`--cue-${side}`));
  }
  return positions;
}
function computeCueLine(cue) {
  if (cue.line === "auto") {
    if (!cue.snapToLines) {
      return 100;
    } else {
      return -1;
    }
  }
  return cue.line;
}
function computeCuePosition(cue) {
  if (cue.position === "auto") {
    switch (cue.align) {
      case "start":
      case "left":
        return 0;
      case "right":
      case "end":
        return 100;
      default:
        return 50;
    }
  }
  return cue.position;
}
function computeCuePositionAlignment(cue, dir) {
  if (cue.positionAlign === "auto") {
    switch (cue.align) {
      case "start":
        return dir === "ltr" ? "line-left" : "line-right";
      case "end":
        return dir === "ltr" ? "line-right" : "line-left";
      case "center":
        return "center";
      default:
        return `line-${cue.align}`;
    }
  }
  return cue.positionAlign;
}

const REGION_AXIS = ["-y", "+y", "-x", "+x"];
function positionRegion(container, region, regionEl, boxes) {
  let cues = Array.from(regionEl.querySelectorAll('[part="cue-display"]')), height = 0, limit = Math.max(0, cues.length - region.lines);
  for (let i = cues.length - 1; i >= limit; i--) {
    height += cues[i].offsetHeight;
  }
  setCSSVar(regionEl, "region-height", height + "px");
  if (!regionEl[STARTING_BOX]) {
    regionEl[STARTING_BOX] = createCSSBox(container, createBox(regionEl));
  }
  let box = { ...regionEl[STARTING_BOX] };
  box = resolveRelativeBox(container, box);
  box.width = regionEl.clientWidth;
  box.height = height;
  box.right = box.left + box.width;
  box.bottom = box.top + height;
  box = avoidBoxCollisions(container, box, boxes, REGION_AXIS);
  setBoxCSSVars(regionEl, container, box, "region");
  return box;
}

class CaptionsRenderer {
  overlay;
  _overlayBox;
  _currentTime = 0;
  _dir = "ltr";
  _activeCues = [];
  _isResizing = false;
  _resizeObserver;
  _regions = /* @__PURE__ */ new Map();
  _cues = /* @__PURE__ */ new Map();
  /* Text direction. */
  get dir() {
    return this._dir;
  }
  set dir(dir) {
    this._dir = dir;
    setDataAttr(this.overlay, "dir", dir);
  }
  get currentTime() {
    return this._currentTime;
  }
  set currentTime(time) {
    this._currentTime = time;
    this.update();
  }
  constructor(overlay, init) {
    this.overlay = overlay;
    this.dir = init?.dir ?? "ltr";
    overlay.setAttribute("translate", "yes");
    overlay.setAttribute("aria-live", "off");
    overlay.setAttribute("aria-atomic", "true");
    setPartAttr(overlay, "captions");
    this._updateOverlay();
    this._resizeObserver = new ResizeObserver(this._resizing.bind(this));
    this._resizeObserver.observe(overlay);
  }
  changeTrack({ regions, cues }) {
    this.reset();
    this._buildRegions(regions);
    for (const cue of cues)
      this._cues.set(cue, null);
    this.update();
  }
  addCue(cue) {
    this._cues.set(cue, null);
    this.update();
  }
  removeCue(cue) {
    this._cues.delete(cue);
    this.update();
  }
  update(forceUpdate = false) {
    this._render(forceUpdate);
  }
  reset() {
    this._cues.clear();
    this._regions.clear();
    this._activeCues = [];
    this.overlay.textContent = "";
  }
  destroy() {
    this.reset();
    this._resizeObserver.disconnect();
  }
  _resizing() {
    this._isResizing = true;
    this._resize();
  }
  _resize = debounce(() => {
    this._isResizing = false;
    this._updateOverlay();
    for (const el of this._regions.values()) {
      el[STARTING_BOX] = null;
    }
    for (const el of this._cues.values()) {
      if (el)
        el[STARTING_BOX] = null;
    }
    this._render(true);
  }, 50);
  _updateOverlay() {
    this._overlayBox = createBox(this.overlay);
    setCSSVar(this.overlay, "overlay-width", this._overlayBox.width + "px");
    setCSSVar(this.overlay, "overlay-height", this._overlayBox.height + "px");
  }
  _render(forceUpdate = false) {
    if (!this._cues.size || this._isResizing)
      return;
    let cue, activeCues = [...this._cues.keys()].filter((cue2) => this._currentTime >= cue2.startTime && this._currentTime <= cue2.endTime).sort(
      (cueA, cueB) => cueA.startTime !== cueB.startTime ? cueA.startTime - cueB.startTime : cueA.endTime - cueB.endTime
    ), activeRegions = activeCues.map((cue2) => cue2.region);
    for (let i = 0; i < this._activeCues.length; i++) {
      cue = this._activeCues[i];
      if (activeCues[i] === cue)
        continue;
      if (cue.region && !activeRegions.includes(cue.region)) {
        const regionEl = this._regions.get(cue.region.id);
        if (regionEl) {
          regionEl.removeAttribute("data-active");
          forceUpdate = true;
        }
      }
      const cueEl = this._cues.get(cue);
      if (cueEl) {
        cueEl.remove();
        forceUpdate = true;
      }
    }
    for (let i = 0; i < activeCues.length; i++) {
      cue = activeCues[i];
      let cueEl = this._cues.get(cue);
      if (!cueEl)
        this._cues.set(cue, cueEl = this._createCueElement(cue));
      const regionEl = this._hasRegion(cue) && this._regions.get(cue.region.id);
      if (regionEl && !regionEl.hasAttribute("data-active")) {
        requestAnimationFrame(() => setDataAttr(regionEl, "active"));
        forceUpdate = true;
      }
      if (!cueEl.isConnected) {
        (regionEl || this.overlay).append(cueEl);
        forceUpdate = true;
      }
    }
    if (forceUpdate) {
      const boxes = [], seen = /* @__PURE__ */ new Set();
      for (let i = activeCues.length - 1; i >= 0; i--) {
        cue = activeCues[i];
        if (seen.has(cue.region || cue))
          continue;
        const isRegion = this._hasRegion(cue), el = isRegion ? this._regions.get(cue.region.id) : this._cues.get(cue);
        if (isRegion) {
          boxes.push(positionRegion(this._overlayBox, cue.region, el, boxes));
        } else {
          boxes.push(positionCue(this._overlayBox, cue, el, boxes));
        }
        seen.add(isRegion ? cue.region : cue);
      }
    }
    updateTimedVTTCueNodes(this.overlay, this._currentTime);
    this._activeCues = activeCues;
  }
  _buildRegions(regions) {
    if (!regions)
      return;
    for (const region of regions) {
      const el = this._createRegionElement(region);
      this._regions.set(region.id, el);
      this.overlay.append(el);
    }
  }
  _createRegionElement(region) {
    const el = document.createElement("div");
    setPartAttr(el, "region");
    setDataAttr(el, "id", region.id);
    setDataAttr(el, "scroll", region.scroll);
    setCSSVar(el, "region-width", region.width + "%");
    setCSSVar(el, "region-anchor-x", region.regionAnchorX);
    setCSSVar(el, "region-anchor-y", region.regionAnchorY);
    setCSSVar(el, "region-viewport-anchor-x", region.viewportAnchorX);
    setCSSVar(el, "region-viewport-anchor-y", region.viewportAnchorY);
    setCSSVar(el, "region-lines", region.lines);
    return el;
  }
  _createCueElement(cue) {
    const display = document.createElement("div"), position = computeCuePosition(cue), positionAlignment = computeCuePositionAlignment(cue, this._dir);
    setPartAttr(display, "cue-display");
    if (cue.vertical !== "")
      setDataAttr(display, "vertical");
    setCSSVar(display, "cue-text-align", cue.align);
    if (cue.style) {
      for (const prop of Object.keys(cue.style)) {
        display.style.setProperty(prop, cue.style[prop]);
      }
    }
    if (!this._hasRegion(cue)) {
      setCSSVar(
        display,
        "cue-writing-mode",
        cue.vertical === "" ? "horizontal-tb" : cue.vertical === "lr" ? "vertical-lr" : "vertical-rl"
      );
      if (!cue.style?.["--cue-width"]) {
        let maxSize = position;
        if (positionAlignment === "line-left") {
          maxSize = 100 - position;
        } else if (positionAlignment === "center" && position <= 50) {
          maxSize = position * 2;
        } else if (positionAlignment === "center" && position > 50) {
          maxSize = (100 - position) * 2;
        }
        const size = cue.size < maxSize ? cue.size : maxSize;
        if (cue.vertical === "")
          setCSSVar(display, "cue-width", size + "%");
        else
          setCSSVar(display, "cue-height", size + "%");
      }
    } else {
      setCSSVar(
        display,
        "cue-offset",
        `${position - (positionAlignment === "line-right" ? 100 : positionAlignment === "center" ? 50 : 0)}%`
      );
    }
    const el = document.createElement("div");
    setPartAttr(el, "cue");
    if (cue.id)
      setDataAttr(el, "id", cue.id);
    el.innerHTML = renderVTTCueString(cue);
    display.append(el);
    return display;
  }
  _hasRegion(cue) {
    return cue.region && cue.size === 100 && cue.vertical === "" && cue.line === "auto";
  }
}

export { CaptionsRenderer as C, ParseError as P, TextCue as T, VTTParser as V, VTTBlock as a, VTTCue as b, ParseErrorCode as c, parseResponse as d, parseByteStream as e, parseText as f, parseTextStream as g, VTTRegion as h, createVTTCueTemplate as i, renderVTTTokensString as j, parseVTTTimestamp as p, renderVTTCueString as r, tokenizeVTTCue as t, updateTimedVTTCueNodes as u };
