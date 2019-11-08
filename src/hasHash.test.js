import HasHash from './hasHash'

const transaction = {
    sender: 'luis@joj.com',
    recipient: 'luke@joj.com',
    funds: 10
}

describe('HasHash', () => {

    it('HasHash', () => {
        const hashTransaction = Object.assign(
            transaction,
            HasHash(['sender', 'recipient', 'funds'])
        )
        console.log(hashTransaction.calculateHash());
    })
})