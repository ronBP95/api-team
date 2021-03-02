const mongoose = require('mongoose')

// has a name String and price Number
const productSchema = new mongoose.Schema({
    name: String,
    price: Number
})

// give a name and a schema mongoose.model() method
const Product =  mongoose.model('Product', productSchema)

module.exports = Product

