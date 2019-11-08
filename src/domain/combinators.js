import curry from './curry'

// ADT helpers
export const not = curry((f, a) => !f(a))
export const flat = M => M.flat()
export const map = curry((f, M) => M.map(f))
export const reduce = curry((acc, start, M) => M.reduce(acc, start))
export const filter = curry((p, M) => M.filter(p))
export const flatMap = curry((f, M) => M.flatMap(f))

