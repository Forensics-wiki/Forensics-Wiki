"use strict";var i=require("@mdit/plugin-container");const r=n=>{["left","center","right","justify"].forEach(e=>n.use(t=>i.container(t,{name:e,openRender:()=>`<div style="text-align:${e}">
`})))};exports.align=r;
//# sourceMappingURL=index.cjs.map
