var fromJS = require('immutable').fromJS

function isIterable (obj) {
  return !(obj == null) && obj[Symbol.iterator] !== undefined
}

module.exports = function (obj) {
  console.table(isIterable(obj) ? fromJS(obj).toJS() : obj)
  return obj
}
