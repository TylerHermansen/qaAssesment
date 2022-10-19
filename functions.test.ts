const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    const array = [1, 2, 3, 4, 5]
    test('shuffleArray should return  array with the same length',() =>{
        expect(shuffleArray(array)).toHaveLength(array.length)
    })
    test('shuffelArray returns array that is shuffeled', ()=>{
        expect(shuffleArray(array)).not.toBe(array)
    })
})