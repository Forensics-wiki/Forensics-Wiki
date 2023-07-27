import {
  flowRendererV2,
  flowStyles
} from "./chunk-RDE66DZL.js";
import "./chunk-T2VB4OIJ.js";
import {
  flowDb,
  parser$1
} from "./chunk-6NNOQQO6.js";
import "./chunk-5HVXI3XH.js";
import "./chunk-4CCOSQGG.js";
import "./chunk-J2UK4SBB.js";
import "./chunk-UGI3DKHF.js";
import "./chunk-FPGHKH4O.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-IDAZJLG5.js";
import {
  __toESM
} from "./chunk-AUZ3RYOM.js";

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
//# sourceMappingURL=flowDiagram-v2-fe64f300-VKVS7I6K.js.map
