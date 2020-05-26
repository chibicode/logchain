> This package is deprecated. It was originally published as `logchain` but was unpublished and republished on May 25, 2020 as `@chibicode/logchain` because (1) another developer was interested in using the `logchain` package name and (2) the usage of this package according to GitHub/npm was essentially nonexistent.

# `@chibicode/logchain`

Does `console.log(obj)` and returns `obj`. Automatically calls `toJS` on [Immutable.js](https://facebook.github.io/immutable-js/) objects as well.


```js
// Does console.log({ a: 1 })
logchain({ a: 1 }).a // returns 1
```

I wrote this b/c I tried to google for something like this and couldn't find one.
