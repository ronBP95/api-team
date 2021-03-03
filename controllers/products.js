const express = require('express')
const router = express.Router()
const db = require('../models')
router.use(express.urlencoded({extended: false}))

router.get('/', async(req, res)=> {
  // show all products
  const allProducts = await db.Product.find({})
  res.json(allProducts)

})

router.get('/cheap', async(req,res)=>{
  const prodData = await db.Product.find({price: {$lt: 75}})
  res.json(prodData)
})


router.get('/:id', async(req, res)=> {
  // get one product by id
  const product = await db.Product.findOne({_id: req.params.id})
  res.json(product)
})

router.post('/', async(req, res)=> {
  console.log(req.body.name)
  //create a new product
  const newProduct = await db.Product.create(req.body)
  res.json(newProduct)
})

router.put('/', async(req, res)=> {
  console.log(req.body)
  //update a product
  const updProduct = await db.Product.findOneAndUpdate({_id: req.body.id},
  {name: req.body.name,
  price: parseFloat(req.body.price)}, {new: true}
  )
  console.log(updProduct)
  res.json({ updProduct })
})

router.delete('/', async(req,res)=>{
  console.log(req.body)
  const delProduct = await db.Product.findOneandRemove({_id: req.body.id})
  console.log(delProduct)
  res.json(delProduct)
})



module.exports = router
