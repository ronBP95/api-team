const mongoose = require('mongoose')

//make a schema, a blueprint of what fields a user is made of

const productSchema = new mongoose.Schema({
    name: String,
    price: Number
})

// give a name and a schema mongoose.model() method
const Product =  mongoose.model('Product', productSchema)

module.exports = Product

