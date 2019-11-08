import curry from './curry'

const isFunction = a =>
    a &&
    typeof a === 'function' && 
    Object.prototype.toString.call(a) === '[object Function]'

const prop = curry((name, obj) =>
    obj[name] && isFunction(obj[name]) ? 
        obj[name].call(obj) : obj[name]
    )

const props = curry((names, obj) =>
    names.map(n => prop(n, obj)))

export default props
export { prop }