import curry from './curry'
import compose from './compose'
import precisionRound from './precisionRound'

const JS_LITE = 'jsl'
const US_DOLLAR = '$'

const Money = curry((currency, amount) => 
    compose(
        Object.seal,
        Object.freeze
    )({
        amount,
        currency,
        constructor: Money,
        equals: other =>
            Object.is(currency, other.currency) &&
            Object.is(amount, other.amount),
        round: (precision = 2) =>
            Money(currency, precisionRound(amount, precision)),
        minus: m => Money(currency, amount - m.amount),
        plus: m => Money(currency, amount + m.amount),
        times: m => Money(currency, amount * m.amount),
        compareTo: other => amount - other.amount,
        asNegative: () => Money(currency, amount * -1),
        toString: () => `${currency} ${amount}`
      })
)

// Zero
Money.zero = (currency = JS_LITE) => Money(currency, 0)

// Static helper functions
Money.sum = (m1, m2) => m1.plus(m2)
Money.substract = (m1, m2) => m1.minus(m2)
Money.multiply = (m1, m2) => m1.times(m2)

export default Money