import fs from 'fs'
import compose from './compose'

const count = arr => arr.length
const split = str => str.split(/\s+/)
const decode = (encoding = 'utf8') => buffer => buffer.toString(encoding)
const read = fs.readFileSync

const countWordsInFile = compose(
    count,
    split,
    decode('utf8'),
    read
)

const countBlocksInFile = compose(
    count,
    JSON.parse,
    decode('utf8'),
    read
)

export default countWordsInFile
export { countBlocksInFile }