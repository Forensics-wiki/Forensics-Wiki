# assignment

> Assign property objects onto other objects, recursively

Footprint for `assignment` sits at around 400 bytes browserified, minified, and gzipped.

# Install

```shell
npm install assignment --save
```

# `assignment(a, b, c, ...)`

Assigns every property of `b` onto `a`. If the an object already exists on `a` that has one of `b`'s properties, then `assignment(a.prop, b.prop)` will assign all child properties of `b.prop` onto `a.prop`. This happens recursively.

Returns `a`.

## Examples

It doesn't matter how many objects you hand to `assignment`, they will all be collapsed into the first one.

```js
assignment(
  { name: 'mordecai' },
  { name: 'eileen' },
  { name: 'rigby' }
);
// <- { name: 'rigby' }
```

Object's get replaced recursively, property by property. Note that for any given property `prop`, you'll get back whatever the prototype was for the first `prop` that existed in `a`.

```js
assignment(
  { character: { name: 'mordecai' } },
  { character: { color: 'red' } },
  { character: { name: 'margaret' } }
);
// <- { name: 'margaret', color: 'red' }
```

Note that arrays don't receive any special treatment. Typically, you want arrays to be replaced.

```js
assignment(
  { characters: ['mordecai', 'margaret'] },
  { characters: ['rigby', 'eileen'] }
);
// <- { characters: ['rigby', 'eileen'] }
```

# License

MIT
