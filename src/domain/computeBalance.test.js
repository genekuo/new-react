import Money from './money'
import computeBalance from './computeBalance'
import Blockchain from './Blockchain'
import Transaction from './Transaction'
import Wallet from './Wallet'


describe('computeBalance', () => {
  it('computeBalance', () => {
    const ledger = new Blockchain()
    const USD = Money('$')
    const tx1 = new Transaction('sender123', 'recipient123', USD(10), 'Test')
    const tx2 = new Transaction('sender123', 'recipient123', USD(10), 'Test2')
    ledger.addPendingTransactions(tx1, tx2)
    ledger.newBlock()
    console.log(computeBalance('sender123', [...ledger]).amount)
    console.log(computeBalance('recipient123',[...ledger]).amount)
  })

  it('Wallet', () => {
    const sender = new Wallet('sender123', '');
    const recipient = new Wallet('recipient123', '');

    const ledger = new Blockchain()
    const USD = Money('$')
    const tx1 = new Transaction('sender123', 'recipient123', USD(10), 'Test')
    const tx2 = new Transaction('sender123', 'recipient123', USD(10), 'Test2')
    ledger.addPendingTransactions(tx1, tx2)
    ledger.newBlock()
    console.log(computeBalance('sender123', [...ledger]).amount)
    console.log(computeBalance('recipient123',[...ledger]).amount)

    console.log("sender balance: " + sender.balance(ledger))
    console.log("recipient balance: " + recipient.balance(ledger))
  })

})