import countWordsInFile from './countWords'
//import sample from './sample.txt'

describe('countWords', () => {
    it('countWords', () => {
        console.log(countWordsInFile('src/sample.txt'))
    })
})