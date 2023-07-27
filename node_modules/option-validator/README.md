# option-validator

[![Build Status](https://travis-ci.com/zhw2590582/option-validator.svg?branch=master)](https://travis-ci.com/zhw2590582/option-validator)
![version](https://badgen.net/npm/v/option-validator)
![license](https://badgen.net/npm/license/option-validator)
![size](https://badgen.net/bundlephobia/minzip/option-validator)
[![npm Downloads](https://img.shields.io/npm/dt/option-validator.svg)](https://www.npmjs.com/package/option-validator)
[![dependencies Status](https://david-dm.org/zhw2590582/option-validator/status.svg)](https://david-dm.org/zhw2590582/option-validator)

> A simple option validator

## Install

```
$ npm install option-validator
```

```js
import optionValidator from 'option-validator';
```

OR umd builds are also available

```html
<script src="path/to/option-validator.js"></script>
```

Will expose the global variable to `window.optionValidator`.

## Usage

- Only one api is to receive a option object and a scheme.
- If the verification is passed, the original option object will be returned.
- If the verification fails, an exception will be thrown.
- Support all js type detection [JS Types](./__test__/testData.js)
- Support for custom validator functions

```js
const option = {
  a: 1,
  b: '2',
  c: {
    d: () => null,
  },
  g: {
    h: new Error('error'),
  },
  i: [1, '2', () => 3],
  j: [1, 2, 3, 4, 5, 6],
  k: '123456',
};

const scheme = {
  // Shallow verification
  a: 'number',
  b: 'string',

  // Deep verification
  c: {
    d: 'function',
  },

  // Validator functions
  g: {
    h: (value, type, path) => {
      // value --> new Error('error')
      // type --> 'error'
      // path --> ['option', 'g', 'h']

      // Returns string mean validation failed, and the string will thrown
      return 'I will throw an exception';

      // Returns error also mean validation failed, and the error will thrown
      return new Error('I will throw an exception');

      // Returns true mean verification passed
      return type === 'error';
    },
  },

  // Verify array elements
  i: ['number', 'string', 'function'],

  // If there is no corresponding validator, the first one is taken by default.
  j: ['number'],

  // Verify one of them
  k: 'number|string',
};

optionValidator(option, scheme);
```

## License

MIT © [Harvey Zack](https://sleepy.im/)
