const curry = fn => (...args1) => 
    args1.length === fn.length
        ? fn(...args1)
        : (...args2) => {
            const args = [...args1, ...args2]
            return args.length >= fn.length ? fn(...args) : curry(fn)(...args)
        }

export default curry