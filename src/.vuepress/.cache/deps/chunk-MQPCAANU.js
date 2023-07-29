import {
  clear,
  clear$1,
  createLabel$1,
  insertEdge,
  insertEdgeLabel,
  insertMarkers$1,
  insertNode,
  intersectRect$1,
  positionEdgeLabel,
  positionNode,
  setNodeElem,
  updateNodeBounds
} from "./chunk-L7QKV4RE.js";
import {
  createText
} from "./chunk-JBGBE46B.js";
import {
  Graph,
  layout
} from "./chunk-SSQRXC4M.js";
import {
  clone_default,
  isUndefined_default,
  map_default
} from "./chunk-2DNBUDY7.js";
import {
  evaluate,
  getConfig$1,
  log$1,
  select_default
} from "./chunk-7EY3WE3D.js";

// node_modules/dagre-d3-es/src/graphlib/json.js
function write(g) {
  var json = {
    options: {
      directed: g.isDirected(),
      multigraph: g.isMultigraph(),
      compound: g.isCompound()
    },
    nodes: writeNodes(g),
    edges: writeEdges(g)
  };
  if (!isUndefined_default(g.graph())) {
    json.value = clone_default(g.graph());
  }
  return json;
}
function writeNodes(g) {
  return map_default(g.nodes(), function(v) {
    var nodeValue = g.node(v);
    var parent = g.parent(v);
    var node = { v };
    if (!isUndefined_default(nodeValue)) {
      node.value = nodeValue;
    }
    if (!isUndefined_default(parent)) {
      node.parent = parent;
    }
    return node;
  });
}
function writeEdges(g) {
  return map_default(g.edges(), function(e) {
    var edgeValue = g.edge(e);
    var edge = { v: e.v, w: e.w };
    if (!isUndefined_default(e.name)) {
      edge.name = e.name;
    }
    if (!isUndefined_default(edgeValue)) {
      edge.value = edgeValue;
    }
    return edge;
  });
}

// node_modules/mermaid/dist/index-1e7f2254.js
var clusterDb = {};
var descendants = {};
var parents = {};
var clear$12 = () => {
  descendants = {};
  parents = {};
  clusterDb = {};
};
var isDescendant = (id, ancenstorId) => {
  log$1.trace("In isDecendant", ancenstorId, " ", id, " = ", descendants[ancenstorId].includes(id));
  if (descendants[ancenstorId].includes(id)) {
    return true;
  }
  return false;
};
var edgeInCluster = (edge, clusterId) => {
  log$1.info("Decendants of ", clusterId, " is ", descendants[clusterId]);
  log$1.info("Edge is ", edge);
  if (edge.v === clusterId) {
    return false;
  }
  if (edge.w === clusterId) {
    return false;
  }
  if (!descendants[clusterId]) {
    log$1.debug("Tilt, ", clusterId, ",not in decendants");
    return false;
  }
  return descendants[clusterId].includes(edge.v) || isDescendant(edge.v, clusterId) || isDescendant(edge.w, clusterId) || descendants[clusterId].includes(edge.w);
};
var copy = (clusterId, graph, newGraph, rootId) => {
  log$1.warn(
    "Copying children of ",
    clusterId,
    "root",
    rootId,
    "data",
    graph.node(clusterId),
    rootId
  );
  const nodes = graph.children(clusterId) || [];
  if (clusterId !== rootId) {
    nodes.push(clusterId);
  }
  log$1.warn("Copying (nodes) clusterId", clusterId, "nodes", nodes);
  nodes.forEach((node) => {
    if (graph.children(node).length > 0) {
      copy(node, graph, newGraph, rootId);
    } else {
      const data = graph.node(node);
      log$1.info("cp ", node, " to ", rootId, " with parent ", clusterId);
      newGraph.setNode(node, data);
      if (rootId !== graph.parent(node)) {
        log$1.warn("Setting parent", node, graph.parent(node));
        newGraph.setParent(node, graph.parent(node));
      }
      if (clusterId !== rootId && node !== clusterId) {
        log$1.debug("Setting parent", node, clusterId);
        newGraph.setParent(node, clusterId);
      } else {
        log$1.info("In copy ", clusterId, "root", rootId, "data", graph.node(clusterId), rootId);
        log$1.debug(
          "Not Setting parent for node=",
          node,
          "cluster!==rootId",
          clusterId !== rootId,
          "node!==clusterId",
          node !== clusterId
        );
      }
      const edges = graph.edges(node);
      log$1.debug("Copying Edges", edges);
      edges.forEach((edge) => {
        log$1.info("Edge", edge);
        const data2 = graph.edge(edge.v, edge.w, edge.name);
        log$1.info("Edge data", data2, rootId);
        try {
          if (edgeInCluster(edge, rootId)) {
            log$1.info("Copying as ", edge.v, edge.w, data2, edge.name);
            newGraph.setEdge(edge.v, edge.w, data2, edge.name);
            log$1.info("newGraph edges ", newGraph.edges(), newGraph.edge(newGraph.edges()[0]));
          } else {
            log$1.info(
              "Skipping copy of edge ",
              edge.v,
              "-->",
              edge.w,
              " rootId: ",
              rootId,
              " clusterId:",
              clusterId
            );
          }
        } catch (e) {
          log$1.error(e);
        }
      });
    }
    log$1.debug("Removing node", node);
    graph.removeNode(node);
  });
};
var extractDescendants = (id, graph) => {
  const children = graph.children(id);
  let res = [...children];
  for (const child of children) {
    parents[child] = id;
    res = [...res, ...extractDescendants(child, graph)];
  }
  return res;
};
var findNonClusterChild = (id, graph) => {
  log$1.trace("Searching", id);
  const children = graph.children(id);
  log$1.trace("Searching children of id ", id, children);
  if (children.length < 1) {
    log$1.trace("This is a valid node", id);
    return id;
  }
  for (const child of children) {
    const _id = findNonClusterChild(child, graph);
    if (_id) {
      log$1.trace("Found replacement for", id, " => ", _id);
      return _id;
    }
  }
};
var getAnchorId = (id) => {
  if (!clusterDb[id]) {
    return id;
  }
  if (!clusterDb[id].externalConnections) {
    return id;
  }
  if (clusterDb[id]) {
    return clusterDb[id].id;
  }
  return id;
};
var adjustClustersAndEdges = (graph, depth) => {
  if (!graph || depth > 10) {
    log$1.debug("Opting out, no graph ");
    return;
  } else {
    log$1.debug("Opting in, graph ");
  }
  graph.nodes().forEach(function(id) {
    const children = graph.children(id);
    if (children.length > 0) {
      log$1.warn(
        "Cluster identified",
        id,
        " Replacement id in edges: ",
        findNonClusterChild(id, graph)
      );
      descendants[id] = extractDescendants(id, graph);
      clusterDb[id] = { id: findNonClusterChild(id, graph), clusterData: graph.node(id) };
    }
  });
  graph.nodes().forEach(function(id) {
    const children = graph.children(id);
    const edges = graph.edges();
    if (children.length > 0) {
      log$1.debug("Cluster identified", id, descendants);
      edges.forEach((edge) => {
        if (edge.v !== id && edge.w !== id) {
          const d1 = isDescendant(edge.v, id);
          const d2 = isDescendant(edge.w, id);
          if (d1 ^ d2) {
            log$1.warn("Edge: ", edge, " leaves cluster ", id);
            log$1.warn("Decendants of XXX ", id, ": ", descendants[id]);
            clusterDb[id].externalConnections = true;
          }
        }
      });
    } else {
      log$1.debug("Not a cluster ", id, descendants);
    }
  });
  graph.edges().forEach(function(e) {
    const edge = graph.edge(e);
    log$1.warn("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(e));
    log$1.warn("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(graph.edge(e)));
    let v = e.v;
    let w = e.w;
    log$1.warn(
      "Fix XXX",
      clusterDb,
      "ids:",
      e.v,
      e.w,
      "Translating: ",
      clusterDb[e.v],
      " --- ",
      clusterDb[e.w]
    );
    if (clusterDb[e.v] && clusterDb[e.w] && clusterDb[e.v] === clusterDb[e.w]) {
      log$1.warn("Fixing and trixing link to self - removing XXX", e.v, e.w, e.name);
      log$1.warn("Fixing and trixing - removing XXX", e.v, e.w, e.name);
      v = getAnchorId(e.v);
      w = getAnchorId(e.w);
      graph.removeEdge(e.v, e.w, e.name);
      const specialId = e.w + "---" + e.v;
      graph.setNode(specialId, {
        domId: specialId,
        id: specialId,
        labelStyle: "",
        labelText: edge.label,
        padding: 0,
        shape: "labelRect",
        style: ""
      });
      const edge1 = JSON.parse(JSON.stringify(edge));
      const edge2 = JSON.parse(JSON.stringify(edge));
      edge1.label = "";
      edge1.arrowTypeEnd = "none";
      edge2.label = "";
      edge1.fromCluster = e.v;
      edge2.toCluster = e.v;
      graph.setEdge(v, specialId, edge1, e.name + "-cyclic-special");
      graph.setEdge(specialId, w, edge2, e.name + "-cyclic-special");
    } else if (clusterDb[e.v] || clusterDb[e.w]) {
      log$1.warn("Fixing and trixing - removing XXX", e.v, e.w, e.name);
      v = getAnchorId(e.v);
      w = getAnchorId(e.w);
      graph.removeEdge(e.v, e.w, e.name);
      if (v !== e.v) {
        edge.fromCluster = e.v;
      }
      if (w !== e.w) {
        edge.toCluster = e.w;
      }
      log$1.warn("Fix Replacing with XXX", v, w, e.name);
      graph.setEdge(v, w, edge, e.name);
    }
  });
  log$1.warn("Adjusted Graph", write(graph));
  extractor(graph, 0);
  log$1.trace(clusterDb);
};
var extractor = (graph, depth) => {
  log$1.warn("extractor - ", depth, write(graph), graph.children("D"));
  if (depth > 10) {
    log$1.error("Bailing out");
    return;
  }
  let nodes = graph.nodes();
  let hasChildren = false;
  for (const node of nodes) {
    const children = graph.children(node);
    hasChildren = hasChildren || children.length > 0;
  }
  if (!hasChildren) {
    log$1.debug("Done, no node has children", graph.nodes());
    return;
  }
  log$1.debug("Nodes = ", nodes, depth);
  for (const node of nodes) {
    log$1.debug(
      "Extracting node",
      node,
      clusterDb,
      clusterDb[node] && !clusterDb[node].externalConnections,
      !graph.parent(node),
      graph.node(node),
      graph.children("D"),
      " Depth ",
      depth
    );
    if (!clusterDb[node]) {
      log$1.debug("Not a cluster", node, depth);
    } else if (!clusterDb[node].externalConnections && // !graph.parent(node) &&
    graph.children(node) && graph.children(node).length > 0) {
      log$1.warn(
        "Cluster without external connections, without a parent and with children",
        node,
        depth
      );
      const graphSettings = graph.graph();
      let dir = graphSettings.rankdir === "TB" ? "LR" : "TB";
      if (clusterDb[node] && clusterDb[node].clusterData && clusterDb[node].clusterData.dir) {
        dir = clusterDb[node].clusterData.dir;
        log$1.warn("Fixing dir", clusterDb[node].clusterData.dir, dir);
      }
      const clusterGraph = new Graph({
        multigraph: true,
        compound: true
      }).setGraph({
        rankdir: dir,
        // Todo: set proper spacing
        nodesep: 50,
        ranksep: 50,
        marginx: 8,
        marginy: 8
      }).setDefaultEdgeLabel(function() {
        return {};
      });
      log$1.warn("Old graph before copy", write(graph));
      copy(node, graph, clusterGraph, node);
      graph.setNode(node, {
        clusterNode: true,
        id: node,
        clusterData: clusterDb[node].clusterData,
        labelText: clusterDb[node].labelText,
        graph: clusterGraph
      });
      log$1.warn("New graph after copy node: (", node, ")", write(clusterGraph));
      log$1.debug("Old graph after copy", write(graph));
    } else {
      log$1.warn(
        "Cluster ** ",
        node,
        " **not meeting the criteria !externalConnections:",
        !clusterDb[node].externalConnections,
        " no parent: ",
        !graph.parent(node),
        " children ",
        graph.children(node) && graph.children(node).length > 0,
        graph.children("D"),
        depth
      );
      log$1.debug(clusterDb);
    }
  }
  nodes = graph.nodes();
  log$1.warn("New list of nodes", nodes);
  for (const node of nodes) {
    const data = graph.node(node);
    log$1.warn(" Now next level", node, data);
    if (data.clusterNode) {
      extractor(data.graph, depth + 1);
    }
  }
};
var sorter = (graph, nodes) => {
  if (nodes.length === 0) {
    return [];
  }
  let result = Object.assign(nodes);
  nodes.forEach((node) => {
    const children = graph.children(node);
    const sorted = sorter(graph, children);
    result = [...result, ...sorted];
  });
  return result;
};
var sortNodesByHierarchy = (graph) => sorter(graph, graph.children());
var rect = (parent, node) => {
  log$1.info("Creating subgraph rect for ", node.id, node);
  const shapeSvg = parent.insert("g").attr("class", "cluster" + (node.class ? " " + node.class : "")).attr("id", node.id);
  const rect2 = shapeSvg.insert("rect", ":first-child");
  const useHtmlLabels = evaluate(getConfig$1().flowchart.htmlLabels);
  const label = shapeSvg.insert("g").attr("class", "cluster-label");
  const text = node.labelType === "markdown" ? createText(label, node.labelText, { style: node.labelStyle, useHtmlLabels }) : label.node().appendChild(createLabel$1(node.labelText, node.labelStyle, void 0, true));
  let bbox = text.getBBox();
  if (evaluate(getConfig$1().flowchart.htmlLabels)) {
    const div = text.children[0];
    const dv = select_default(text);
    bbox = div.getBoundingClientRect();
    dv.attr("width", bbox.width);
    dv.attr("height", bbox.height);
  }
  const padding = 0 * node.padding;
  const halfPadding = padding / 2;
  const width = node.width <= bbox.width + padding ? bbox.width + padding : node.width;
  if (node.width <= bbox.width + padding) {
    node.diff = (bbox.width - node.width) / 2 - node.padding / 2;
  } else {
    node.diff = -node.padding / 2;
  }
  log$1.trace("Data ", node, JSON.stringify(node));
  rect2.attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("x", node.x - width / 2).attr("y", node.y - node.height / 2 - halfPadding).attr("width", width).attr("height", node.height + padding);
  if (useHtmlLabels) {
    label.attr(
      "transform",
      // This puts the labal on top of the box instead of inside it
      "translate(" + (node.x - bbox.width / 2) + ", " + (node.y - node.height / 2) + ")"
    );
  } else {
    label.attr(
      "transform",
      // This puts the labal on top of the box instead of inside it
      "translate(" + node.x + ", " + (node.y - node.height / 2) + ")"
    );
  }
  const rectBox = rect2.node().getBBox();
  node.width = rectBox.width;
  node.height = rectBox.height;
  node.intersect = function(point) {
    return intersectRect$1(node, point);
  };
  return shapeSvg;
};
var noteGroup = (parent, node) => {
  const shapeSvg = parent.insert("g").attr("class", "note-cluster").attr("id", node.id);
  const rect2 = shapeSvg.insert("rect", ":first-child");
  const padding = 0 * node.padding;
  const halfPadding = padding / 2;
  rect2.attr("rx", node.rx).attr("ry", node.ry).attr("x", node.x - node.width / 2 - halfPadding).attr("y", node.y - node.height / 2 - halfPadding).attr("width", node.width + padding).attr("height", node.height + padding).attr("fill", "none");
  const rectBox = rect2.node().getBBox();
  node.width = rectBox.width;
  node.height = rectBox.height;
  node.intersect = function(point) {
    return intersectRect$1(node, point);
  };
  return shapeSvg;
};
var roundedWithTitle = (parent, node) => {
  const shapeSvg = parent.insert("g").attr("class", node.classes).attr("id", node.id);
  const rect2 = shapeSvg.insert("rect", ":first-child");
  const label = shapeSvg.insert("g").attr("class", "cluster-label");
  const innerRect = shapeSvg.append("rect");
  const text = label.node().appendChild(createLabel$1(node.labelText, node.labelStyle, void 0, true));
  let bbox = text.getBBox();
  if (evaluate(getConfig$1().flowchart.htmlLabels)) {
    const div = text.children[0];
    const dv = select_default(text);
    bbox = div.getBoundingClientRect();
    dv.attr("width", bbox.width);
    dv.attr("height", bbox.height);
  }
  bbox = text.getBBox();
  const padding = 0 * node.padding;
  const halfPadding = padding / 2;
  const width = node.width <= bbox.width + node.padding ? bbox.width + node.padding : node.width;
  if (node.width <= bbox.width + node.padding) {
    node.diff = (bbox.width + node.padding * 0 - node.width) / 2;
  } else {
    node.diff = -node.padding / 2;
  }
  rect2.attr("class", "outer").attr("x", node.x - width / 2 - halfPadding).attr("y", node.y - node.height / 2 - halfPadding).attr("width", width + padding).attr("height", node.height + padding);
  innerRect.attr("class", "inner").attr("x", node.x - width / 2 - halfPadding).attr("y", node.y - node.height / 2 - halfPadding + bbox.height - 1).attr("width", width + padding).attr("height", node.height + padding - bbox.height - 3);
  label.attr(
    "transform",
    "translate(" + (node.x - bbox.width / 2) + ", " + (node.y - node.height / 2 - node.padding / 3 + (evaluate(getConfig$1().flowchart.htmlLabels) ? 5 : 3)) + ")"
  );
  const rectBox = rect2.node().getBBox();
  node.height = rectBox.height;
  node.intersect = function(point) {
    return intersectRect$1(node, point);
  };
  return shapeSvg;
};
var divider = (parent, node) => {
  const shapeSvg = parent.insert("g").attr("class", node.classes).attr("id", node.id);
  const rect2 = shapeSvg.insert("rect", ":first-child");
  const padding = 0 * node.padding;
  const halfPadding = padding / 2;
  rect2.attr("class", "divider").attr("x", node.x - node.width / 2 - halfPadding).attr("y", node.y - node.height / 2).attr("width", node.width + padding).attr("height", node.height + padding);
  const rectBox = rect2.node().getBBox();
  node.width = rectBox.width;
  node.height = rectBox.height;
  node.diff = -node.padding / 2;
  node.intersect = function(point) {
    return intersectRect$1(node, point);
  };
  return shapeSvg;
};
var shapes = { rect, roundedWithTitle, noteGroup, divider };
var clusterElems = {};
var insertCluster = (elem, node) => {
  log$1.trace("Inserting cluster");
  const shape = node.shape || "rect";
  clusterElems[node.id] = shapes[shape](elem, node);
};
var clear2 = () => {
  clusterElems = {};
};
var recursiveRender = async (_elem, graph, diagramtype, parentCluster) => {
  log$1.info("Graph in recursive render: XXX", write(graph), parentCluster);
  const dir = graph.graph().rankdir;
  log$1.trace("Dir in recursive render - dir:", dir);
  const elem = _elem.insert("g").attr("class", "root");
  if (!graph.nodes()) {
    log$1.info("No nodes found for", graph);
  } else {
    log$1.info("Recursive render XXX", graph.nodes());
  }
  if (graph.edges().length > 0) {
    log$1.trace("Recursive edges", graph.edge(graph.edges()[0]));
  }
  const clusters = elem.insert("g").attr("class", "clusters");
  const edgePaths = elem.insert("g").attr("class", "edgePaths");
  const edgeLabels = elem.insert("g").attr("class", "edgeLabels");
  const nodes = elem.insert("g").attr("class", "nodes");
  await Promise.all(
    graph.nodes().map(async function(v) {
      const node = graph.node(v);
      if (parentCluster !== void 0) {
        const data = JSON.parse(JSON.stringify(parentCluster.clusterData));
        log$1.info("Setting data for cluster XXX (", v, ") ", data, parentCluster);
        graph.setNode(parentCluster.id, data);
        if (!graph.parent(v)) {
          log$1.trace("Setting parent", v, parentCluster.id);
          graph.setParent(v, parentCluster.id, data);
        }
      }
      log$1.info("(Insert) Node XXX" + v + ": " + JSON.stringify(graph.node(v)));
      if (node && node.clusterNode) {
        log$1.info("Cluster identified", v, node.width, graph.node(v));
        const o = await recursiveRender(nodes, node.graph, diagramtype, graph.node(v));
        const newEl = o.elem;
        updateNodeBounds(node, newEl);
        node.diff = o.diff || 0;
        log$1.info("Node bounds (abc123)", v, node, node.width, node.x, node.y);
        setNodeElem(newEl, node);
        log$1.warn("Recursive render complete ", newEl, node);
      } else {
        if (graph.children(v).length > 0) {
          log$1.info("Cluster - the non recursive path XXX", v, node.id, node, graph);
          log$1.info(findNonClusterChild(node.id, graph));
          clusterDb[node.id] = { id: findNonClusterChild(node.id, graph), node };
        } else {
          log$1.info("Node - the non recursive path", v, node.id, node);
          await insertNode(nodes, graph.node(v), dir);
        }
      }
    })
  );
  graph.edges().forEach(function(e) {
    const edge = graph.edge(e.v, e.w, e.name);
    log$1.info("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(e));
    log$1.info("Edge " + e.v + " -> " + e.w + ": ", e, " ", JSON.stringify(graph.edge(e)));
    log$1.info("Fix", clusterDb, "ids:", e.v, e.w, "Translateing: ", clusterDb[e.v], clusterDb[e.w]);
    insertEdgeLabel(edgeLabels, edge);
  });
  graph.edges().forEach(function(e) {
    log$1.info("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(e));
  });
  log$1.info("#############################################");
  log$1.info("###                Layout                 ###");
  log$1.info("#############################################");
  log$1.info(graph);
  layout(graph);
  log$1.info("Graph after layout:", write(graph));
  let diff = 0;
  sortNodesByHierarchy(graph).forEach(function(v) {
    const node = graph.node(v);
    log$1.info("Position " + v + ": " + JSON.stringify(graph.node(v)));
    log$1.info(
      "Position " + v + ": (" + node.x,
      "," + node.y,
      ") width: ",
      node.width,
      " height: ",
      node.height
    );
    if (node && node.clusterNode) {
      positionNode(node);
    } else {
      if (graph.children(v).length > 0) {
        insertCluster(clusters, node);
        clusterDb[node.id].node = node;
      } else {
        positionNode(node);
      }
    }
  });
  graph.edges().forEach(function(e) {
    const edge = graph.edge(e);
    log$1.info("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(edge), edge);
    const paths = insertEdge(edgePaths, e, edge, clusterDb, diagramtype, graph);
    positionEdgeLabel(edge, paths);
  });
  graph.nodes().forEach(function(v) {
    const n = graph.node(v);
    log$1.info(v, n.type, n.diff);
    if (n.type === "group") {
      diff = n.diff;
    }
  });
  return { elem, diff };
};
var render = async (elem, graph, markers, diagramtype, id) => {
  insertMarkers$1(elem, markers, diagramtype, id);
  clear$1();
  clear();
  clear2();
  clear$12();
  log$1.warn("Graph at first:", write(graph));
  adjustClustersAndEdges(graph);
  log$1.warn("Graph after:", write(graph));
  await recursiveRender(elem, graph, diagramtype);
};

export {
  render
};
//# sourceMappingURL=chunk-MQPCAANU.js.map
