import Money from './money'
import { prop } from './props'

const add = (a, b) => a + b

describe('Money', () => {

    it('Money', () => {
        const USD = Money('$')
        console.log(USD(3.0).amount)
        console.log(USD(7.0).currency)
        console.log(Money.zero(Money.USD).amount)
        console.log(USD(3.0).plus(USD(7.0)).equals(USD(10)))

        console.log([USD(3.0), USD(7.0)].map(prop('amount')).reduce(add, 0))
    })
})