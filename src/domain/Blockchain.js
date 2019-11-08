import Block from './Block'

export default class Blockchain {
    blocks = new Map()
    constructor(genesis = createGenesisBlock()) {
        this.top = genesis
        this.blocks.set(genesis.hash, genesis)
        this.timestamp = Date.now()
        this.pendingTransactions = []
    }

    static from(...blocks) {
        const newChain = new Blockchain()
        for (const block of blocks) {
            newChain.push(block)
        }
        return newChain
    }

    push(newBlock) {
        newBlock.blockchain = this
        this.blocks.set(newBlock.hash, newBlock)
        this.top = newBlock
    }

    height() {
        return this.blocks.size
    }

lookUpByIndex(index) {
    for (const block of this) {
      if (block.index === index) {
        return block
      }
    }
    return null
  }

  lookUp(hash) {
    const h = hash
    if (this.blocks.has(h)) {
      return this.blocks.get(h)
    }
    throw new Error(`Block with hash ${h} not found!`)
  }

  newBlock() {
    const block = new Block(this.height(), this.top.hash, [...this.pendingTransactions])
    block.blockchain = this
    this.pendingTransactions = []
    return this.push(block)
  }

  addPendingTransaction(tx) {
    this.pendingTransactions.push(tx)
  }

  addPendingTransactions(...txs) {
    this.pendingTransactions.push(...txs)
  }

  [Symbol.iterator]() {
    return this.blocks.values()
  }

  get [Symbol.toStringTag]() {
    return 'Blockchain'
  }

}

function createGenesisBlock(previousHash = '0'.repeat(64)) {
  return new Block(1, previousHash, [])
}