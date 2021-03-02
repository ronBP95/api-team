const db = require('./models')

// Make some functions to play with and use async
const createProduct = async()=> {
  const product = await db.Product.create({
    name:'Cool Kicks',
    price: 22
  })

  const productTwo = await db.Product.create({
    name:'Brown Belt',
    price: 15
  })
}

const getProducts = async()=> {
  const allProducts = await db.Product.find({})
  console.log(allProducts)
}

// createProduct()
// getProducts()

const makeAnOrder = async()=> {
  //get the product with name 'Brown Belt' that already exist and make them part of this new order
  const productToAssociate = await db.Product.find({ name: 'Brown Belt' })

  //associate the foundProduct to a new Order
  const newOrder = await db.Order.create({
    products: [productToAssociate[0]]
  })
  console.log(newOrder)
}
// makeAnOrder()

const makeAnOrderWithAllProducts = async()=> {
  //get the product with name 'Brown Belt' that already exist and make them part of this new order
  const products = await db.Product.find({})

  //associate the foundProduct to a new Order
  const newOrder = await db.Order.create({
    products: products
  })
  console.log(newOrder)
}
makeAnOrderWithAllProducts()


//get one order, see result with/out .populate
const getOneOrder = async(orderId)=> {
  const order = await db.Order.findOne({ _id: orderId })
  console.log('this is the order, ', order)

  // populate the products field
  const orderWithPopulate = await db.Order.findOne({  _id: orderId }).populate('products')
  console.log('this is the order with populate method', orderWithPopulate.products)
}

// getOneOrder()










