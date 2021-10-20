const {STARTING_BALANCE} = require('../config')
const {ec} = require('../util')
const {cryptoHash} = require('../util')
const Transaction = require('./transaction')

class Wallet{
    constructor(){
        this.balance = STARTING_BALANCE;

        this.keyPair = ec.genKeyPair();

        this.publicKey = this.keyPair.getPublic().encode('hex');
    }

    sign(data){
        return this.keyPair.sign(cryptoHash(data))
    }

    createTransaction({recipient, amount}){
        if(amount > this.balance ){
            throw new Error('Amount exceeds balance')
        }
        
        let transaction =  new Transaction({senderWallet: this, recipient, amount})
        // console.log('transaction: ', transaction)
        return transaction
    }
}

module.exports = Wallet;