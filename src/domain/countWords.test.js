import countWordsInFile from './countWords'

describe('countWords', () => {
    it('countWords', () => {
        console.log(countWordsInFile('src/domain/sample.txt'))
    })
})