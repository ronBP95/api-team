# api-ex

## This repo has our One-to-Many db example from previously.

## Let's turn this into an API

Here is what we have set up in our controllers/products.js
```javascript
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
```

We need to update these so that we actually interact with our database.
What steps do you need to take to have access to the database inside this folder?

-----

So let's bring it in at the top. Let's also edit our routes so that we can use **async / await**.

Make a request via Postman at the correct route to show all products.

![postman get](./assets/postman-get.png)

