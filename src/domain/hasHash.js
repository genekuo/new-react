import crypto from 'crypto'
import curry from './curry'
import compose from './compose'
import props, {prop} from './props'

const assemble = (...pieces) => pieces.map(JSON.stringify).join('')

const computeCipher = curry((options, data) =>
    crypto
        .createHash(options.algorithm)
        .update(data)
        .digest(options.encoding))

const HasHash = (
    keys,
    options ={ 
        algorithm: 'SHA256',
        encoding: 'hex'
    }
) => ({
    calculateHash() {
        const objToHash = Object.fromEntries(
            new Map(keys.map(k => [k, prop(k, this)]))
        )
        
        return compose(
            computeCipher(options),
            assemble,
            props(keys)
        )(objToHash)
    }
})

export default HasHash