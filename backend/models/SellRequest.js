const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema

mongoose.plugin(slug)

const SellRequestSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  grade: {
    type: String,
    required: true,
    trim: true
  },
  storageSize: {
    type: String,
    required: true,
    trim: true
  },
  slug: { 
    type: String, 
    slug: ['name', 'grade', 'storageSize'],
    unique: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true
  },
},{
  timestamps: true
})

const SellRequest = mongoose.model('SellRequest', SellRequestSchema)

module.exports = SellRequest
