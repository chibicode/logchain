# logchain

Does `console.log(obj)` and returns `obj`. Automatically calls `toJS` on [Immutable.js](https://facebook.github.io/immutable-js/) objects as well.

![](https://img.shields.io/npm/v/logchain.svg)

```js
// Does console.log({ a: 1 })
logchain({ a: 1 }).a // returns 1
```
