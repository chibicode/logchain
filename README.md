# logchain

![](https://img.shields.io/npm/v/logchain.svg)

Does `console.log(obj)` and returns `obj`. Automatically calls `toJS` on [Immutable.js](https://facebook.github.io/immutable-js/) objects as well.


```js
// Does console.log({ a: 1 })
logchain({ a: 1 }).a // returns 1
```

I wrote this b/c I tried to google for something like this and couldn't find one. Let me know via Twitter ([@chibicode](http://twitter.com/chibicode)) if you know a good alternative.
