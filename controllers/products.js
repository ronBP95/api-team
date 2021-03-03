const express = require('express')
const router = express.Router()

router.get('/', (req, res)=> {
  // show all products
  console.log('all products')
  res.json({ "all products": "all products" })

})

router.get('/:id', (req, res)=> {
  // get one product by id
  console.log('one product')
  res.json({ "one product": "one product" })
})

router.post('/', (req, res)=> {
  console.log(req.body)
  //create a new product
  console.log('created product')
  res.json({ "created": "nothing created yet" })
})

router.put('/', (req, res)=> {
  console.log(req.body)
  //update a product
  console.log('updated product')
  res.json({ "updated": "updated" })
})

module.exports = router
