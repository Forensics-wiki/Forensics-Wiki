import {
  __publicField
} from "./chunk-2LSFTFF7.js";

// node_modules/slimsearch/dist/index.mjs
var mt = "ENTRIES";
var R = "KEYS";
var U = "VALUES";
var F = "";
var S = class {
  constructor(e, n) {
    __publicField(this, "set");
    __publicField(this, "_type");
    __publicField(this, "_path");
    const o = e._tree, s = Array.from(o.keys());
    this.set = e, this._type = n, this._path = s.length > 0 ? [{ node: o, keys: s }] : [];
  }
  next() {
    const e = this.dive();
    return this.backtrack(), e;
  }
  dive() {
    if (this._path.length === 0)
      return { done: true, value: void 0 };
    const { node: e, keys: n } = y(this._path);
    if (y(n) === F)
      return { done: false, value: this.result() };
    const o = e.get(y(n));
    return this._path.push({ node: o, keys: Array.from(o.keys()) }), this.dive();
  }
  backtrack() {
    if (this._path.length === 0)
      return;
    const e = y(this._path).keys;
    e.pop(), !(e.length > 0) && (this._path.pop(), this.backtrack());
  }
  key() {
    return this.set._prefix + this._path.map(({ keys: e }) => y(e)).filter((e) => e !== F).join("");
  }
  value() {
    return y(this._path).node.get(F);
  }
  result() {
    switch (this._type) {
      case U:
        return this.value();
      case R:
        return this.key();
      default:
        return [this.key(), this.value()];
    }
  }
  [Symbol.iterator]() {
    return this;
  }
};
var y = (t) => t[t.length - 1];
var _t = (t, e, n) => {
  const o = /* @__PURE__ */ new Map();
  if (e === void 0)
    return o;
  const s = e.length + 1, i = s + n, r = new Uint8Array(i * s).fill(n + 1);
  for (let u = 0; u < s; ++u)
    r[u] = u;
  for (let u = 1; u < i; ++u)
    r[u * s] = u;
  return J(t, e, n, o, r, 1, s, ""), o;
};
var J = (t, e, n, o, s, i, r, u) => {
  const c = i * r;
  t:
    for (const d of t.keys())
      if (d === F) {
        const a = s[c - 1];
        a <= n && o.set(u, [t.get(d), a]);
      } else {
        let a = i;
        for (let h = 0; h < d.length; ++h, ++a) {
          const f = d[h], _ = r * a, g = _ - r;
          let l = s[_];
          const m = Math.max(0, a - n - 1), w = Math.min(r - 1, a + n);
          for (let p = m; p < w; ++p) {
            const I = f !== e[p], z = s[g + p] + +I, C = s[g + p + 1] + 1, x = s[_ + p] + 1, P = s[_ + p + 1] = Math.min(z, C, x);
            P < l && (l = P);
          }
          if (l > n)
            continue t;
        }
        J(t.get(d), e, n, o, s, a, r, u + d);
      }
};
var A = class _A {
  constructor(e = /* @__PURE__ */ new Map(), n = "") {
    __publicField(this, "_tree");
    __publicField(this, "_prefix");
    __publicField(this, "_size");
    this._tree = e, this._prefix = n;
  }
  atPrefix(e) {
    if (!e.startsWith(this._prefix))
      throw new Error("Mismatched prefix");
    const [n, o] = E(this._tree, e.slice(this._prefix.length));
    if (n === void 0) {
      const [s, i] = k(o);
      for (const r of s.keys())
        if (r !== F && r.startsWith(i)) {
          const u = /* @__PURE__ */ new Map();
          return u.set(r.slice(i.length), s.get(r)), new _A(u, e);
        }
    }
    return new _A(n, e);
  }
  clear() {
    this._size = void 0, this._tree.clear();
  }
  delete(e) {
    return this._size = void 0, gt(this._tree, e);
  }
  entries() {
    return new S(this, mt);
  }
  forEach(e) {
    for (const [n, o] of this)
      e(n, o, this);
  }
  fuzzyGet(e, n) {
    return _t(this._tree, e, n);
  }
  get(e) {
    const n = D(this._tree, e);
    return n !== void 0 ? n.get(F) : void 0;
  }
  has(e) {
    const n = D(this._tree, e);
    return n !== void 0 && n.has(F);
  }
  keys() {
    return new S(this, R);
  }
  set(e, n) {
    if (typeof e != "string")
      throw new Error("key must be a string");
    return this._size = void 0, b(this._tree, e).set(F, n), this;
  }
  get size() {
    if (this._size)
      return this._size;
    this._size = 0;
    const e = this.entries();
    for (; !e.next().done; )
      this._size += 1;
    return this._size;
  }
  update(e, n) {
    if (typeof e != "string")
      throw new Error("key must be a string");
    this._size = void 0;
    const o = b(this._tree, e);
    return o.set(F, n(o.get(F))), this;
  }
  fetch(e, n) {
    if (typeof e != "string")
      throw new Error("key must be a string");
    this._size = void 0;
    const o = b(this._tree, e);
    let s = o.get(F);
    return s === void 0 && o.set(F, s = n()), s;
  }
  values() {
    return new S(this, U);
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  static from(e) {
    const n = new _A();
    for (const [o, s] of e)
      n.set(o, s);
    return n;
  }
  static fromObject(e) {
    return _A.from(Object.entries(e));
  }
};
var E = (t, e, n = []) => {
  if (e.length === 0 || t == null)
    return [t, n];
  for (const o of t.keys())
    if (o !== F && e.startsWith(o))
      return n.push([t, o]), E(t.get(o), e.slice(o.length), n);
  return n.push([t, e]), E(void 0, "", n);
};
var D = (t, e) => {
  if (e.length === 0 || t == null)
    return t;
  for (const n of t.keys())
    if (n !== F && e.startsWith(n))
      return D(t.get(n), e.slice(n.length));
};
var b = (t, e) => {
  const n = e.length;
  t:
    for (let o = 0; t && o < n; ) {
      for (const i of t.keys())
        if (i !== F && e[o] === i[0]) {
          const r = Math.min(n - o, i.length);
          let u = 1;
          for (; u < r && e[o + u] === i[u]; )
            ++u;
          const c = t.get(i);
          if (u === i.length)
            t = c;
          else {
            const d = /* @__PURE__ */ new Map();
            d.set(i.slice(u), c), t.set(e.slice(o, o + u), d), t.delete(i), t = d;
          }
          o += u;
          continue t;
        }
      const s = /* @__PURE__ */ new Map();
      return t.set(e.slice(o), s), s;
    }
  return t;
};
var gt = (t, e) => {
  const [n, o] = E(t, e);
  if (n !== void 0) {
    if (n.delete(F), n.size === 0)
      G(o);
    else if (n.size === 1) {
      const [s, i] = n.entries().next().value;
      Q(o, s, i);
    }
  }
};
var G = (t) => {
  if (t.length === 0)
    return;
  const [e, n] = k(t);
  if (e.delete(n), e.size === 0)
    G(t.slice(0, -1));
  else if (e.size === 1) {
    const [o, s] = e.entries().next().value;
    o !== F && Q(t.slice(0, -1), o, s);
  }
};
var Q = (t, e, n) => {
  if (t.length === 0)
    return;
  const [o, s] = k(t);
  o.set(s + e, n), o.delete(s);
};
var k = (t) => t[t.length - 1];
var K = (t, e) => t._idToShortId.has(e);
var Ft = (t, e) => {
  const n = t._idToShortId.get(e);
  if (n != null)
    return t._storedFields.get(n);
};
var pt = /[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u;
var V = "or";
var Y = "and";
var wt = "and_not";
var At = (t, e) => {
  t.includes(e) || t.push(e);
};
var H = (t, e) => {
  for (const n of e)
    t.includes(n) || t.push(n);
};
var X = ({ score: t }, { score: e }) => e - t;
var Z = () => /* @__PURE__ */ new Map();
var v = (t) => {
  const e = /* @__PURE__ */ new Map();
  for (const n of Object.keys(t))
    e.set(parseInt(n, 10), t[n]);
  return e;
};
var O = (t, e) => Object.prototype.hasOwnProperty.call(t, e) ? t[e] : void 0;
var Ct = { [V]: (t, e) => {
  for (const n of e.keys()) {
    const o = t.get(n);
    if (o == null)
      t.set(n, e.get(n));
    else {
      const { score: s, terms: i, match: r } = e.get(n);
      o.score = o.score + s, o.match = Object.assign(o.match, r), H(o.terms, i);
    }
  }
  return t;
}, [Y]: (t, e) => {
  const n = /* @__PURE__ */ new Map();
  for (const o of e.keys()) {
    const s = t.get(o);
    if (s == null)
      continue;
    const { score: i, terms: r, match: u } = e.get(o);
    H(s.terms, r), n.set(o, { score: s.score + i, terms: s.terms, match: Object.assign(s.match, u) });
  }
  return n;
}, [wt]: (t, e) => {
  for (const n of e.keys())
    t.delete(n);
  return t;
} };
var yt = (t, e, n, o, s, i) => {
  const { k: r, b: u, d: c } = i;
  return Math.log(1 + (n - e + 0.5) / (e + 0.5)) * (c + t * (r + 1) / (t + r * (1 - u + u * o / s)));
};
var zt = (t) => (e, n, o) => {
  const s = typeof t.fuzzy == "function" ? t.fuzzy(e, n, o) : t.fuzzy || false, i = typeof t.prefix == "function" ? t.prefix(e, n, o) : t.prefix === true;
  return { term: e, fuzzy: s, prefix: i };
};
var tt = (t, e, n, o) => {
  for (const s of Object.keys(t._fieldIds))
    if (t._fieldIds[s] === n) {
      t._options.logger("warn", `SlimSearch: document with ID ${t._documentIds.get(e)} has changed before removal: term "${o}" was not present in field "${s}". Removing a document after it has changed can corrupt the index!`, "version_conflict");
      return;
    }
};
var et = (t, e, n, o) => {
  const s = t._index.fetch(o, Z);
  let i = s.get(e);
  if (i == null)
    i = /* @__PURE__ */ new Map(), i.set(n, 1), s.set(e, i);
  else {
    const r = i.get(n);
    i.set(n, (r || 0) + 1);
  }
};
var M = (t, e, n, o) => {
  if (!t._index.has(o)) {
    tt(t, n, e, o);
    return;
  }
  const s = t._index.fetch(o, Z), i = s.get(e);
  i == null || i.get(n) == null ? tt(t, n, e, o) : i.get(n) <= 1 ? i.size <= 1 ? s.delete(e) : i.delete(n) : i.set(n, i.get(n) - 1), t._index.get(o).size === 0 && t._index.delete(o);
};
var xt = (t, e, n, o, s) => {
  let i = t._fieldLength.get(e);
  i == null && t._fieldLength.set(e, i = []), i[n] = s;
  const r = (t._avgFieldLength[n] || 0) * o + s;
  t._avgFieldLength[n] = r / (o + 1);
};
var Et = (t, e) => {
  const n = t._nextId;
  return t._idToShortId.set(e, n), t._documentIds.set(n, e), t._documentCount += 1, t._nextId += 1, n;
};
var vt = (t, e, n) => {
  const { storeFields: o, extractField: s } = t._options;
  if (o == null || o.length === 0)
    return;
  let i = t._storedFields.get(e);
  i == null && t._storedFields.set(e, i = {});
  for (const r of o) {
    const u = s(n, r);
    u !== void 0 && (i[r] = u);
  }
};
var T = (t, e) => {
  const { extractField: n, tokenize: o, processTerm: s, fields: i, idField: r } = t._options, u = n(e, r);
  if (u == null)
    throw new Error(`SlimSearch: document does not have ID field "${r}"`);
  if (K(t, u))
    throw new Error(`SlimSearch: duplicate ID ${u}`);
  const c = Et(t, u);
  vt(t, c, e);
  for (const d of i) {
    const a = n(e, d);
    if (a == null)
      continue;
    const h = o(a.toString(), d), f = t._fieldIds[d], _ = new Set(h).size;
    xt(t, c, f, t._documentCount - 1, _);
    for (const g of h) {
      const l = s(g, d);
      if (Array.isArray(l))
        for (const m of l)
          et(t, f, c, m);
      else
        l && et(t, f, c, l);
    }
  }
};
var L = (t, e) => {
  for (const n of e)
    T(t, n);
};
var It = (t, e, n = {}) => {
  const { chunkSize: o = 10 } = n, s = { chunk: [], promise: Promise.resolve() }, { chunk: i, promise: r } = e.reduce(({ chunk: u, promise: c }, d, a) => (u.push(d), (a + 1) % o === 0 ? { chunk: [], promise: c.then(() => new Promise((h) => setTimeout(h, 0))).then(() => L(t, u)) } : { chunk: u, promise: c }), s);
  return r.then(() => L(t, i));
};
var St = { k: 1.2, b: 0.7, d: 0.5 };
var B = { idField: "id", extractField: (t, e) => t[e], tokenize: (t) => t.split(pt), processTerm: (t) => t.toLowerCase(), fields: void 0, searchOptions: void 0, storeFields: [], logger: (t, e) => {
  typeof (console == null ? void 0 : console[t]) == "function" && console[t](e);
}, autoVacuum: true };
var nt = { combineWith: V, prefix: false, fuzzy: false, maxFuzzy: 6, boost: {}, weights: { fuzzy: 0.45, prefix: 0.375 }, bm25: St };
var Dt = { combineWith: Y, prefix: (t, e, n) => e === n.length - 1 };
var j = { batchSize: 1e3, batchWait: 10 };
var q = { minDirtFactor: 0.1, minDirtCount: 20 };
var $ = { ...j, ...q };
var bt = (t) => {
  if (B.hasOwnProperty(t))
    return O(B, t);
  throw new Error(`SlimSearch: unknown option "${t}"`);
};
var ot = (t, e = V) => {
  if (t.length === 0)
    return /* @__PURE__ */ new Map();
  const n = e.toLowerCase();
  return t.reduce(Ct[n]) || /* @__PURE__ */ new Map();
};
var W = (t, e, n, o, s, i, r, u, c = /* @__PURE__ */ new Map()) => {
  if (s == null)
    return c;
  for (const d of Object.keys(i)) {
    const a = i[d], h = t._fieldIds[d], f = s.get(h);
    if (f == null)
      continue;
    let _ = f.size;
    const g = t._avgFieldLength[h];
    for (const l of f.keys()) {
      if (!t._documentIds.has(l)) {
        M(t, h, l, n), _ -= 1;
        continue;
      }
      const m = r ? r(t._documentIds.get(l), n, t._storedFields.get(l)) : 1;
      if (!m)
        continue;
      const w = f.get(l), p = t._fieldLength.get(l)[h], I = yt(w, _, t._documentCount, p, g, u), z = o * a * m * I, C = c.get(l);
      if (C) {
        C.score += z, At(C.terms, e);
        const x = O(C.match, n);
        x ? x.push(d) : C.match[n] = [d];
      } else
        c.set(l, { score: z, terms: [e], match: { [n]: [d] } });
    }
  }
  return c;
};
var kt = (t, e, n) => {
  const o = { ...t._options.searchOptions, ...n }, s = (o.fields || t._options.fields).reduce((l, m) => ({ ...l, [m]: O(o.boost, m) || 1 }), {}), { boostDocument: i, weights: r, maxFuzzy: u, bm25: c } = o, { fuzzy: d, prefix: a } = { ...nt.weights, ...r }, h = t._index.get(e.term), f = W(t, e.term, e.term, 1, h, s, i, c);
  let _, g;
  if (e.prefix && (_ = t._index.atPrefix(e.term)), e.fuzzy) {
    const l = e.fuzzy === true ? 0.2 : e.fuzzy, m = l < 1 ? Math.min(u, Math.round(e.term.length * l)) : l;
    m && (g = t._index.fuzzyGet(e.term, m));
  }
  if (_)
    for (const [l, m] of _) {
      const w = l.length - e.term.length;
      if (!w)
        continue;
      g == null || g.delete(l);
      const p = a * l.length / (l.length + 0.3 * w);
      W(t, e.term, l, p, m, s, i, c, f);
    }
  if (g)
    for (const l of g.keys()) {
      const [m, w] = g.get(l);
      if (!w)
        continue;
      const p = d * l.length / (l.length + w);
      W(t, e.term, l, p, m, s, i, c, f);
    }
  return f;
};
var st = (t, e, n = {}) => {
  if (typeof e != "string") {
    const a = { ...n, ...e, queries: void 0 }, h = e.queries.map((f) => st(t, f, a));
    return ot(h, a.combineWith);
  }
  const { tokenize: o, processTerm: s, searchOptions: i } = t._options, r = { tokenize: o, processTerm: s, ...i, ...n }, { tokenize: u, processTerm: c } = r, d = u(e).flatMap((a) => c(a)).filter((a) => !!a).map(zt(r)).map((a) => kt(t, a, r));
  return ot(d, r.combineWith);
};
var it = (t, e, n = {}) => {
  const o = st(t, e, n), s = [];
  for (const [i, { score: r, terms: u, match: c }] of o) {
    const d = u.length, a = { id: t._documentIds.get(i), score: r * d, terms: Object.keys(c), match: c };
    Object.assign(a, t._storedFields.get(i)), (n.filter == null || n.filter(a)) && s.push(a);
  }
  return s.sort(X), s;
};
var Vt = (t, e, n = {}) => {
  n = { ...t._options.autoSuggestOptions, ...n };
  const o = /* @__PURE__ */ new Map();
  for (const { score: i, terms: r } of it(t, e, n)) {
    const u = r.join(" "), c = o.get(u);
    c != null ? (c.score += i, c.count += 1) : o.set(u, { score: i, terms: r, count: 1 });
  }
  const s = [];
  for (const [i, { score: r, terms: u, count: c }] of o)
    s.push({ suggestion: i, terms: u, score: r / c });
  return s.sort(X), s;
};
var ut = class {
  constructor(e) {
    __publicField(this, "_options");
    __publicField(this, "_index");
    __publicField(this, "_documentCount");
    __publicField(this, "_documentIds");
    __publicField(this, "_idToShortId");
    __publicField(this, "_fieldIds");
    __publicField(this, "_fieldLength");
    __publicField(this, "_avgFieldLength");
    __publicField(this, "_nextId");
    __publicField(this, "_storedFields");
    __publicField(this, "_dirtCount");
    __publicField(this, "_currentVacuum");
    __publicField(this, "_enqueuedVacuum");
    __publicField(this, "_enqueuedVacuumConditions");
    if ((e == null ? void 0 : e.fields) == null)
      throw new Error('SlimSearch: option "fields" must be provided');
    const n = e.autoVacuum == null || e.autoVacuum === true ? $ : e.autoVacuum;
    this._options = { ...B, ...e, autoVacuum: n, searchOptions: { ...nt, ...e.searchOptions || {} }, autoSuggestOptions: { ...Dt, ...e.autoSuggestOptions || {} } }, this._index = new A(), this._documentCount = 0, this._documentIds = /* @__PURE__ */ new Map(), this._idToShortId = /* @__PURE__ */ new Map(), this._fieldIds = {}, this._fieldLength = /* @__PURE__ */ new Map(), this._avgFieldLength = [], this._nextId = 0, this._storedFields = /* @__PURE__ */ new Map(), this._dirtCount = 0, this._currentVacuum = null, this._enqueuedVacuum = null, this._enqueuedVacuumConditions = q, this.addFields(this._options.fields);
  }
  get isVacuuming() {
    return this._currentVacuum != null;
  }
  get dirtCount() {
    return this._dirtCount;
  }
  get dirtFactor() {
    return this._dirtCount / (1 + this._documentCount + this._dirtCount);
  }
  get documentCount() {
    return this._documentCount;
  }
  get termCount() {
    return this._index.size;
  }
  toJSON() {
    const e = [];
    for (const [n, o] of this._index) {
      const s = {};
      for (const [i, r] of o)
        s[i] = Object.fromEntries(r);
      e.push([n, s]);
    }
    return { documentCount: this._documentCount, nextId: this._nextId, documentIds: Object.fromEntries(this._documentIds), fieldIds: this._fieldIds, fieldLength: Object.fromEntries(this._fieldLength), averageFieldLength: this._avgFieldLength, storedFields: Object.fromEntries(this._storedFields), dirtCount: this._dirtCount, index: e, serializationVersion: 2 };
  }
  addFields(e) {
    for (let n = 0; n < e.length; n++)
      this._fieldIds[e[n]] = n;
  }
};
var Ot = (t) => new ut(t);
var rt = ({ index: t, documentCount: e, nextId: n, documentIds: o, fieldIds: s, fieldLength: i, averageFieldLength: r, storedFields: u, dirtCount: c, serializationVersion: d }, a) => {
  if (d !== 1 && d !== 2)
    throw new Error("SlimSearch: cannot deserialize an index created with an incompatible version");
  const h = new ut(a);
  h._documentCount = e, h._nextId = n, h._documentIds = v(o), h._idToShortId = /* @__PURE__ */ new Map(), h._fieldIds = s, h._fieldLength = v(i), h._avgFieldLength = r, h._storedFields = v(u), h._dirtCount = c || 0, h._index = new A();
  for (const [f, _] of h._documentIds)
    h._idToShortId.set(_, f);
  for (const [f, _] of t) {
    const g = /* @__PURE__ */ new Map();
    for (const l of Object.keys(_)) {
      let m = _[l];
      d === 1 && (m = m.ds), g.set(parseInt(l, 10), v(m));
    }
    h._index.set(f, g);
  }
  return h;
};
var Mt = (t, e) => {
  if (e == null)
    throw new Error("SlimSearch: loadJSON should be given the same options used when serializing the index");
  return rt(JSON.parse(t), e);
};
var ct = (t, e) => {
  if (e == null)
    return true;
  const { minDirtCount: n = $.minDirtCount, minDirtFactor: o = $.minDirtFactor } = e;
  return t.dirtCount >= n && t.dirtFactor >= o;
};
var dt = async (t, e, n) => {
  const o = t._dirtCount;
  if (ct(t, n)) {
    const s = e.batchSize || j.batchSize, i = e.batchWait || j.batchWait;
    let r = 1;
    for (const [u, c] of t._index) {
      for (const [d, a] of c)
        for (const [h] of a)
          t._documentIds.has(h) || (a.size <= 1 ? c.delete(d) : a.delete(h));
      t._index.get(u).size === 0 && t._index.delete(u), r % s === 0 && await new Promise((d) => setTimeout(d, i)), r += 1;
    }
    t._dirtCount -= o;
  }
  await null, t._currentVacuum = t._enqueuedVacuum, t._enqueuedVacuum = null;
};
var lt = (t, e, n) => t._currentVacuum ? (t._enqueuedVacuumConditions = t._enqueuedVacuumConditions && n, t._enqueuedVacuum != null || (t._enqueuedVacuum = t._currentVacuum.then(() => {
  const o = t._enqueuedVacuumConditions;
  return t._enqueuedVacuumConditions = q, dt(t, e, o);
})), t._enqueuedVacuum) : ct(t, n) === false ? Promise.resolve() : (t._currentVacuum = dt(t, e), t._currentVacuum);
var at = (t) => {
  if (t._options.autoVacuum === false)
    return;
  const { minDirtFactor: e, minDirtCount: n, batchSize: o, batchWait: s } = t._options.autoVacuum;
  lt(t, { batchSize: o, batchWait: s }, { minDirtCount: n, minDirtFactor: e });
};
var Tt = (t, e = {}) => lt(t, e);
var ht = (t, e, n, o) => {
  if (n === 1) {
    t._avgFieldLength[e] = 0;
    return;
  }
  const s = t._avgFieldLength[e] * n - o;
  t._avgFieldLength[e] = s / (n - 1);
};
var N = (t, e) => {
  const n = t._idToShortId.get(e);
  if (n == null)
    throw new Error(`SlimSearch: cannot discard document with ID ${e}: it is not in the index`);
  t._idToShortId.delete(e), t._documentIds.delete(n), t._storedFields.delete(n), (t._fieldLength.get(n) || []).forEach((o, s) => {
    ht(t, s, t._documentCount, o);
  }), t._fieldLength.delete(n), t._documentCount -= 1, t._dirtCount += 1, at(t);
};
var Lt = (t, e) => {
  const n = t._options.autoVacuum;
  try {
    t._options.autoVacuum = false;
    for (const o of e)
      N(t, o);
  } finally {
    t._options.autoVacuum = n;
  }
  at(t);
};
var ft = (t, e) => {
  const { tokenize: n, processTerm: o, extractField: s, fields: i, idField: r } = t._options, u = s(e, r);
  if (u == null)
    throw new Error(`SlimSearch: document does not have ID field "${r}"`);
  const c = t._idToShortId.get(u);
  if (c == null)
    throw new Error(`SlimSearch: cannot remove document with ID ${u}: it is not in the index`);
  for (const d of i) {
    const a = s(e, d);
    if (a == null)
      continue;
    const h = n(a.toString(), d), f = t._fieldIds[d], _ = new Set(h).size;
    ht(t, f, t._documentCount, _);
    for (const g of h) {
      const l = o(g, d);
      if (Array.isArray(l))
        for (const m of l)
          M(t, f, c, m);
      else
        l && M(t, f, c, l);
    }
  }
  t._storedFields.delete(c), t._documentIds.delete(c), t._idToShortId.delete(u), t._fieldLength.delete(c), t._documentCount -= 1;
};
var Bt = function(t, e) {
  if (e)
    for (const n of e)
      ft(t, n);
  else {
    if (arguments.length > 1)
      throw new Error("Expected documents to be present. Omit the argument to remove all documents.");
    t._index = new A(), t._documentCount = 0, t._documentIds = /* @__PURE__ */ new Map(), t._idToShortId = /* @__PURE__ */ new Map(), t._fieldLength = /* @__PURE__ */ new Map(), t._avgFieldLength = [], t._storedFields = /* @__PURE__ */ new Map(), t._nextId = 0;
  }
};
var jt = (t, e) => {
  const { idField: n, extractField: o } = t._options, s = o(e, n);
  N(t, s), T(t, e);
};
export {
  A as SearchableMap,
  T as add,
  L as addAll,
  It as addAllAsync,
  Vt as autoSuggest,
  Ot as createIndex,
  N as discard,
  Lt as discardAll,
  bt as getDefaultValue,
  Ft as getStoredFields,
  K as has,
  rt as loadIndex,
  Mt as loadJSONIndex,
  ft as remove,
  Bt as removeAll,
  jt as replace,
  it as search,
  Tt as vacuum
};
//# sourceMappingURL=slimsearch.js.map
