'use strict';

var test = require('tape');
var assignment = require('..');

test('properties should replace other properties', function (t) {
  var result = assignment({ name: 'mordecai' }, { name: 'eileen' }, { name: 'rigby' });
  var expect = { name: 'rigby' };
  t.deepEqual(result, expect);
  t.end();
});

test('child objects should replace each property separately', function (t) {
  var result = assignment({ character: { name: 'mordecai' } }, { character: { color: 'red' } }, { character: { name: 'margaret' } });
  var expect = { character: { name: 'margaret', color: 'red' } };
  t.deepEqual(result, expect);
  t.end();
});

test('arrays shouldn\'t be messed with', function (t) {
  var result = assignment({ characters: ['mordecai', 'margaret'] }, { characters: ['rigby', 'eileen'] });
  var expect = { characters: ['rigby', 'eileen'] };
  t.deepEqual(result, expect);
  t.end();
});

test('large origin array should be completed replaced as well', function (t) {
  var result = assignment({ characters: ['mordecai', 'margaret', 'skips'] }, { characters: ['rigby', 'eileen'] });
  var expect = { characters: ['rigby', 'eileen'] };
  t.deepEqual(result, expect);
  t.end();
});
