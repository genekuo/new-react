import HasHash from './hasHash'

export default class Block {
    _blockchain
    index = 0
    constructor(index, previousHash, data = [], difficulty = 0) {
        this.index = index
        this.previousHash = previousHash
        this.data = data
        this.nonce = 0
        this.difficulty = difficulty
        this.timestamp = Date.now()
        this.hash = this.calculateHash()
    }

    set blockchain(b) {
        this._blockchain = b
        return this
    }

    isGenesis() {
        return this.previousHash === '0'.repeat(64)
    }

    [Symbol.iterator]() {
        return this.data[Symbol.iterator]()
    }
    
    get [Symbol.toStringTag]() {
        return 'Block'
    }
}

Object.assign(
    Block.prototype,
    HasHash(['index', 'timestamp', 'previousHash', 'nonce', 'data'])
)