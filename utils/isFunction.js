
const isFunction = (func) => func && {}.toString.call(func) === '[object Function]'
const isAsyncFunction = (func) => func.constructor.name === "AsyncFunction"

module.exports = {
    isFunction,
    isAsyncFunction,
}