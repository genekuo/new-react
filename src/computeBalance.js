import Money from './money'
import curry from './curry'
import compose from './compose'
import { prop } from './props'
import { filter, flat, flatMap, map, not, reduce } from './combinators'

const balanceOf = curry((addr, tx) =>
  Money.sum(
    tx.recipient === addr ? tx.funds : Money.zero(),
    tx.sender === addr ? tx.funds.asNegative() : Money.zero()
  )
)

const computeBalance = (address, ledger) => {
  return Array.from(ledger)
    .filter(not(prop('isGenesis')))
    .flatMap(prop('data'))
    .map(balanceOf(address))
    .reduce(Money.sum, Money.zero())
    .round()
}

export default computeBalance