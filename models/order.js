const mongoose = require('mongoose')

// products: array of mongoId's, with ref 'Product'
const orderSchema = new mongoose.Schema({
    products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}]
})

// give a name and a schema mongoose.model() method
const Order =  mongoose.model('Order', orderSchema)

module.exports = Order

