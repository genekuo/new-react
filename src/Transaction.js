import HasHash from './hasHash'

export default class Transaction {
  timestamp = Date.now()
  nonce = 0
  id
  hash

  constructor(sender, recipient, funds, description = 'Generic') {
    this.sender = sender
    this.recipient = recipient
    this.funds = funds
    this.description = description
    this.id = this.hash = this.calculateHash()
  }

  amount() {
    return this.funds.amount
  }

  currency() {
    return this.funds.currency
  }

  displayTransaction() {
    return `Transaction ${this.description} from ${this.sender} to ${
      this.recipient
      } for ${this.funds.toString()}`
  }

  [Symbol.iterator]() {
    return {
      next: () => ({ done: true })
    }
  }

  get [Symbol.toStringTag]() {
    return 'Transaction'
  }

}

Object.assign(
  Transaction.prototype,
  HasHash(['timestamp', 'sender', 'recipient', 'funds'])
)
