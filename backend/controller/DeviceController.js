const asyncHandler = require('express-async-handler')
const BuyRequest = require('../models/BuyRequest')
const SellRequest = require('../models/SellRequest')

// @desc    Get all devices
// @route GET /api/device
// @access  Public
exports.getAllDevice = asyncHandler (async (req, res) => {
  let devices;
  if(req.query.filter){
    switch (req.query.filter) {
      case 'buy-request':
        devices = await BuyRequest.find({})
        break
      
      case 'sell-request':
        devices = await SellRequest.find({})
        break  
    
      default:
        devices = []
        break
    }
    if (devices) {
      return res.json(devices)
    }
  }
    const buyRequest = await BuyRequest.find({})
    res.json(buyRequest)
  })

// @desc    Add a new device
// @route   POST /api/device
// @access  Public
exports.addDevice = asyncHandler(async (req, res) => {
  const { name, grade, storageSize, price, image} = req.body

  const device = await BuyRequest.create({
    name, 
    grade, 
    storageSize, 
    price, 
    image
  })

  if (device) {
    res.status(201).json({
      message: 'Added successfully',
      device
    })
  } else {
    return res.status(400).json({err: 'An error occurred'})
  }
})  
