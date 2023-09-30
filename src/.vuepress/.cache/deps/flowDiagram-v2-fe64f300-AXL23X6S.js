import {
  flowRendererV2,
  flowStyles
} from "./chunk-SBVBJJSL.js";
import {
  flowDb,
  parser$1
} from "./chunk-THPO5AA3.js";
import "./chunk-M3ZC3EGO.js";
import "./chunk-W2Z7GQLC.js";
import "./chunk-AWCVEDQL.js";
import "./chunk-UKF5YMSL.js";
import "./chunk-5PSKXECM.js";
import "./chunk-UWNVY7A6.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-PNQ3332P.js";
import {
  __toESM
} from "./chunk-2LSFTFF7.js";

// node_modules/mermaid/dist/flowDiagram-v2-fe64f300.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-fe64f300-AXL23X6S.js.map
