// app.js
const index = require('./index')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000 


// configuring body parser to interpret requests 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// defining routes
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Is working!' }))


// GET /applyDiscount
router.get('/applyDiscount/:value/:discount', (req, res) => {
    const value = parseInt(req.params.value)
    const discount = parseInt(req.params.discount)

        res.json({ valueDiscounted: index.applyDiscount(value, discount) })
    })

app.use('/', router)

if (require.main === module){
    // start server
    app.listen(port)
    console.log('API is working!')
}

module.exports = app