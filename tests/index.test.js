const test = require('tape')
const index = require('../index')

test('Apply discount', t => {
    t.assert(index.applyDiscount(10, 5) === 5, 'Discounted correctly!')
    t.end()
})

test('The discount is bigger than value!', t => {
    t.assert(index.applyDiscount(2, 10) === 0, 'No discount applied correctly!')
    t.end()
})