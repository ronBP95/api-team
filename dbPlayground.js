const db = require('./models')

const createProduct = async()=> {
  // make two products, no Orders yet
  const newProduct = await db.Product.create({
    name: 'Fletchers shoes',
    price: 20
  })
  const newProduct2 = await db.Product.create({
    name: 'Nicks shoes',
    price: 30
  })  
  console.log(newProduct, newProduct2)
}
//createProduct()


const getProducts = async()=> {
  // get all Products
  const allProducts = await db.Product.find({})
  console.log(allProducts)
}

// createProduct()
//getProducts()

const makeAnOrder = async()=> {
  //get a product already created
  const allProducts = await db.Product.find({})
  //associate the foundProduct to a new Order
  const newOrder = await db.Order.create({
    products: allProducts
  })
  console.log(newOrder)
}

// makeAnOrder()

const makeAnOrderWithAllProducts = async()=> {
  //get all products
  const products = await db.Product.find({})

  //associate the products to a new Order

  console.log(newOrder)
}
//makeAnOrderWithAllProducts()


//get one order, see result with/out .populate
const getOneOrder = async(orderId)=> {
  //const myOrder = await db.Order.findOne({ _id: orderId})
  //console.log(myOrder)
  // without .populate('products')
  const myOrder = await db.Order.findOne({ _id: orderId }).populate('products')
  console.log(myOrder)
  // populate the products field
}
getOneOrder('603eddbeed1626e12e866331')










