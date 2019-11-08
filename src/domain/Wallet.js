
import computeBalance from './computeBalance'

export default class Wallet {
    constructor(publicKey, privateKey) {
      this.publicKey = publicKey
      this.privateKey = privateKey
    }
  
    static generateWallet() { 

    }
  
    get address() {
      return this.publicKey
    }
  
    balance(ledger) {
      return computeBalance(this.publicKey, [...ledger])
    }
  }