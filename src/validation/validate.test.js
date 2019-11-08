import validate from './validate'
import compose from '../domain/compose'
import { map } from '../domain/combinators'
import { unique, join, toUpper } from './toUpper'

describe('validate', () => {
    it('validate', () => {
        const f1 = a => a * 2
        const f2 = a => a **2
        const f3 = a => a * 3

        const valdateComp = compose(...[f3, f2, f1].map(validate))
        console.log(valdateComp(5));

    })

    it('toUpper1', () => {
        const letters = ['aabbcc']
            .map(unique)
            .map(join)
            .map(toUpper)
            .pop()
        
            console.log(letters)
    })

    it('toUpper2', () => {
        const letters = Array.of('aabbcc')
            .map(unique)
            .map(join)
            .map(toUpper)
            .pop()
        console.log(letters)
    })
})