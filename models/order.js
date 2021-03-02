const mongoose = require('mongoose')

//make a schema, a blueprint of what fields a user is made of

const orderSchema = new mongoose.Schema({
  products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}]
})

// give a name and a schema mongoose.model() method
const Order =  mongoose.model('Order', orderSchema)

module.exports = Order

