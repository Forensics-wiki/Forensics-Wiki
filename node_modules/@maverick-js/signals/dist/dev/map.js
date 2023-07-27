import { write, onDispose, read, isNotEqual, createComputation, createScope, scoped, dispose, compute } from './core.js';
import { effect } from './signals.js';
import './symbols.js';

function selector(source) {
  let currentKey, nodes = /* @__PURE__ */ new Map();
  effect(() => {
    const newKey = source(), prev = nodes.get(currentKey), next = nodes.get(newKey);
    prev && write.call(prev, false);
    next && write.call(next, true);
    currentKey = newKey;
  });
  return function observeSelector(key) {
    let node = nodes.get(key);
    if (!node)
      nodes.set(key, node = new Selector(key, key === currentKey, nodes));
    node._refs += 1;
    onDispose(node);
    return read.bind(node);
  };
}
function Selector(key, initialValue, nodes) {
  this._state = /** CLEAN */
  0;
  this._key = key;
  this._value = initialValue;
  this._refs = 0;
  this._nodes = nodes;
  this._observers = null;
}
const SelectorProto = Selector.prototype;
SelectorProto._changed = isNotEqual;
SelectorProto.call = function() {
  this._refs -= 1;
  if (!this._refs) {
    this._nodes.delete(this._key);
    this._nodes = null;
  }
};

function computedMap(list, map, options) {
  return read.bind(
    createComputation(
      [],
      updateMap.bind({
        _scope: createScope(),
        _len: 0,
        _list: list,
        _items: [],
        _map: map,
        _mappings: [],
        _nodes: []
      }),
      options
    )
  );
}
function updateMap() {
  let i = 0, newItems = this._list() || [], mapper = () => this._map(read.bind(this._nodes[i]), i);
  scoped(() => {
    if (newItems.length === 0) {
      if (this._len !== 0) {
        dispose.call(this._scope, false);
        this._items = [];
        this._mappings = [];
        this._len = 0;
        this._nodes = [];
      }
      return;
    }
    for (i = 0; i < newItems.length; i++) {
      if (i < this._items.length && this._items[i] !== newItems[i]) {
        write.call(this._nodes[i], newItems[i]);
      } else if (i >= this._items.length) {
        this._mappings[i] = compute(
          this._nodes[i] = createComputation(newItems[i], null),
          mapper,
          null
        );
      }
    }
    for (; i < this._items.length; i++)
      dispose.call(this._nodes[i]);
    this._len = this._nodes.length = newItems.length;
    this._items = newItems.slice(0);
    this._mappings = this._mappings.slice(0, this._len);
  }, this._scope);
  return this._mappings;
}
function computedKeyedMap(list, map, options) {
  return read.bind(
    createComputation(
      [],
      updateKeyedMap.bind({
        _scope: createScope(),
        _len: 0,
        _list: list,
        _items: [],
        _map: map,
        _mappings: [],
        _nodes: []
      }),
      options
    )
  );
}
function updateKeyedMap() {
  const newItems = this._list() || [], indexed = this._map.length > 1;
  scoped(() => {
    let newLen = newItems.length, i, j, mapper = indexed ? () => this._map(newItems[j], read.bind(this._nodes[j])) : () => this._map(newItems[j]);
    if (newLen === 0) {
      if (this._len !== 0) {
        dispose.call(this._scope, false);
        this._nodes = [];
        this._items = [];
        this._mappings = [];
        this._len = 0;
      }
    } else if (this._len === 0) {
      this._mappings = new Array(newLen);
      for (j = 0; j < newLen; j++) {
        this._items[j] = newItems[j];
        this._mappings[j] = compute(
          this._nodes[j] = createComputation(j, null),
          mapper,
          null
        );
      }
      this._len = newLen;
    } else {
      let start, end, newEnd, item, newIndices, newIndicesNext, temp = new Array(newLen), tempNodes = new Array(newLen);
      for (start = 0, end = Math.min(this._len, newLen); start < end && this._items[start] === newItems[start]; start++)
        ;
      for (end = this._len - 1, newEnd = newLen - 1; end >= start && newEnd >= start && this._items[end] === newItems[newEnd]; end--, newEnd--) {
        temp[newEnd] = this._mappings[end];
        tempNodes[newEnd] = this._nodes[end];
      }
      newIndices = /* @__PURE__ */ new Map();
      newIndicesNext = new Array(newEnd + 1);
      for (j = newEnd; j >= start; j--) {
        item = newItems[j];
        i = newIndices.get(item);
        newIndicesNext[j] = i === void 0 ? -1 : i;
        newIndices.set(item, j);
      }
      for (i = start; i <= end; i++) {
        item = this._items[i];
        j = newIndices.get(item);
        if (j !== void 0 && j !== -1) {
          temp[j] = this._mappings[i];
          tempNodes[j] = this._nodes[i];
          j = newIndicesNext[j];
          newIndices.set(item, j);
        } else
          dispose.call(this._nodes[i]);
      }
      for (j = start; j < newLen; j++) {
        if (j in temp) {
          this._mappings[j] = temp[j];
          this._nodes[j] = tempNodes[j];
          write.call(this._nodes[j], j);
        } else {
          this._mappings[j] = compute(
            this._nodes[j] = createComputation(j, null),
            mapper,
            null
          );
        }
      }
      this._mappings = this._mappings.slice(0, this._len = newLen);
      this._items = newItems.slice(0);
    }
  }, this._scope);
  return this._mappings;
}

export { computedKeyedMap, computedMap, selector };
