const test = require('tape')
const supertest = require('supertest')
const app = require('../app')

test('GET /applyDiscount/10/5', t => {
    supertest(app)
    .get('/applyDiscount/10/5')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
        t.error(err, 'No errors')
        t.assert(res.body.valueDiscounted === 5, 'Discount correctly')
        t.end()
    })
})