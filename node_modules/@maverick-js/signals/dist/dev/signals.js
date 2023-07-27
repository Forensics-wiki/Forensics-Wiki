import { createComputation, read, write, isFunction, onDispose, update, dispose } from './core.js';
import { SCOPE } from './symbols.js';

function signal(initialValue, options) {
  const node = createComputation(initialValue, null, options), signal2 = read.bind(node);
  signal2.node = node;
  signal2[SCOPE] = true;
  signal2.set = write.bind(node);
  return signal2;
}
function isReadSignal(fn) {
  return isFunction(fn) && SCOPE in fn;
}
function computed(compute, options) {
  const node = createComputation(
    options?.initial,
    compute,
    options
  ), signal2 = read.bind(node);
  signal2[SCOPE] = true;
  signal2.node = node;
  return signal2;
}
function effect(effect2, options) {
  const signal2 = createComputation(
    null,
    function runEffect() {
      let effectResult = effect2();
      isFunction(effectResult) && onDispose(effectResult);
      return null;
    },
    { id: options?.id ?? "effect" } 
  );
  signal2._effect = true;
  update(signal2);
  {
    return function stopEffect() {
      dispose.call(signal2, true);
    };
  }
}
function readonly(signal2) {
  const readonly2 = () => signal2();
  readonly2[SCOPE] = true;
  readonly2.node = signal2.node;
  return readonly2;
}
function isWriteSignal(fn) {
  return isReadSignal(fn) && "set" in fn;
}

export { computed, effect, isReadSignal, isWriteSignal, readonly, signal };
