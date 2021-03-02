const db = require('./models')

const createProduct = async()=> {
  // make two products, no Orders yet

}

const getProducts = async()=> {
  // get all Products
}

// createProduct()
// getProducts()

const makeAnOrder = async()=> {
  //get a product already created

  //associate the foundProduct to a new Order
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
  // without .populate('products')

  // populate the products field
}
// getOneOrder()










