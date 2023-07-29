import {
  flowRendererV2,
  flowStyles
} from "./chunk-XQDGPJT2.js";
import {
  flowDb,
  parser$1
} from "./chunk-SZ37VI3C.js";
import "./chunk-MQPCAANU.js";
import "./chunk-L7QKV4RE.js";
import "./chunk-JBGBE46B.js";
import "./chunk-HVFFM4FI.js";
import "./chunk-SSQRXC4M.js";
import "./chunk-2DNBUDY7.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-7EY3WE3D.js";
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
//# sourceMappingURL=flowDiagram-v2-fe64f300-R7VEKPNY.js.map
