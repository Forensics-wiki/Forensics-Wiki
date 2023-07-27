import {
  require_dist
} from "./chunk-IDAZJLG5.js";
import {
  __toESM
} from "./chunk-AUZ3RYOM.js";

// node_modules/mermaid/dist/svgDrawCommon-f26cad39.js
var import_sanitize_url = __toESM(require_dist(), 1);
var drawRect = function(elem, rectData) {
  const rectElem = elem.append("rect");
  rectElem.attr("x", rectData.x);
  rectElem.attr("y", rectData.y);
  rectElem.attr("fill", rectData.fill);
  rectElem.attr("stroke", rectData.stroke);
  rectElem.attr("width", rectData.width);
  rectElem.attr("height", rectData.height);
  rectElem.attr("rx", rectData.rx);
  rectElem.attr("ry", rectData.ry);
  if (rectData.attrs !== "undefined" && rectData.attrs !== null) {
    for (let attrKey in rectData.attrs) {
      rectElem.attr(attrKey, rectData.attrs[attrKey]);
    }
  }
  if (rectData.class !== "undefined") {
    rectElem.attr("class", rectData.class);
  }
  return rectElem;
};
var drawBackgroundRect = function(elem, bounds) {
  const rectElem = drawRect(elem, {
    x: bounds.startx,
    y: bounds.starty,
    width: bounds.stopx - bounds.startx,
    height: bounds.stopy - bounds.starty,
    fill: bounds.fill,
    stroke: bounds.stroke,
    class: "rect"
  });
  rectElem.lower();
};
var drawText = function(elem, textData) {
  const nText = textData.text.replace(/<br\s*\/?>/gi, " ");
  const textElem = elem.append("text");
  textElem.attr("x", textData.x);
  textElem.attr("y", textData.y);
  textElem.attr("class", "legend");
  textElem.style("text-anchor", textData.anchor);
  if (textData.class !== void 0) {
    textElem.attr("class", textData.class);
  }
  const span = textElem.append("tspan");
  span.attr("x", textData.x + textData.textMargin * 2);
  span.text(nText);
  return textElem;
};
var drawImage = function(elem, x, y, link) {
  const imageElem = elem.append("image");
  imageElem.attr("x", x);
  imageElem.attr("y", y);
  var sanitizedLink = (0, import_sanitize_url.sanitizeUrl)(link);
  imageElem.attr("xlink:href", sanitizedLink);
};
var drawEmbeddedImage = function(elem, x, y, link) {
  const imageElem = elem.append("use");
  imageElem.attr("x", x);
  imageElem.attr("y", y);
  const sanitizedLink = (0, import_sanitize_url.sanitizeUrl)(link);
  imageElem.attr("xlink:href", "#" + sanitizedLink);
};
var getNoteRect = function() {
  return {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    fill: "#EDF2AE",
    stroke: "#666",
    anchor: "start",
    rx: 0,
    ry: 0
  };
};
var getTextObj = function() {
  return {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    fill: void 0,
    anchor: void 0,
    "text-anchor": "start",
    style: "#666",
    textMargin: 0,
    rx: 0,
    ry: 0,
    tspan: true,
    valign: void 0
  };
};

export {
  drawRect,
  drawBackgroundRect,
  drawText,
  drawImage,
  drawEmbeddedImage,
  getNoteRect,
  getTextObj
};
//# sourceMappingURL=chunk-QVPZN6BY.js.map
