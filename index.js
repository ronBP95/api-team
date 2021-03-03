const express = require('express')
const app = express()
const controllers = require('./controllers')

const port = process.env.PORT || 4000
app.use(express.json())

app.get('/', (req, res)=> {
  res.send('hey')
})

app.use('/api/v1/products', controllers.products)

app.listen(port, ()=> console.log('server is running on port ' + port))
