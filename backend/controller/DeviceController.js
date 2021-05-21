const asyncHandler = require('express-async-handler')
const BuyRequest = require('../models/BuyRequest')
const SellRequest = require('../models/SellRequest')

// @desc    Get all devices
// @route GET /api/device
// @access  Public
exports.getAllDevice = asyncHandler (async (req, res) => {
  const pageSize = 2
  const curpage = Number(req.query.pageNumber) || 1
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

    const count = await BuyRequest.countDocuments({})
    devices = await BuyRequest.find({})
                    .limit(pageSize)
                    .skip(pageSize * (curpage - 1))

    res.json({devices, curpage, pages: Math.ceil(count / pageSize)})
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

// @desc    Search For device
// @route   POST /api/device/search
// @access  Public
exports.searchDevice = asyncHandler(async (req, res) => {
  const pageSize = 2
  const curpage = Number(req.query.pageNumber) || 1
  const {search} = req.body
  const searchArr = search.split(',')

  const count = await BuyRequest.countDocuments({ $or: [{ name: { $in: searchArr} }, { grade: { $in: searchArr} }, { storageSize: { $in: searchArr} }] })

  const devices = await BuyRequest.find({ $or: [{ name: { $in: searchArr} }, { grade: { $in: searchArr} }, { storageSize: { $in: searchArr} }] })
                  .limit(pageSize)
                  .skip(pageSize * (curpage - 1)) 

  res.json({devices, curpage, pages: Math.ceil(count / pageSize)})
}) 

// @desc    Filter device
// @route   POST /api/device/filter
// @access  Public
exports.filterDevice = asyncHandler(async (req, res) => {
  const pageSize = 2
  const curpage = Number(req.query.pageNumber) || 1
  const { category, minPrice, maxPrice, storage } = req.body

  const count = await BuyRequest.countDocuments({ name: { $regex: category }, storageSize: { $regex: storage }, price: { $gte: minPrice, $lte: maxPrice } })

  const devices = await BuyRequest.find({ name: { $regex: category }, storageSize: { $regex: storage }, price: { $gte: minPrice, $lte: maxPrice } })
                  .limit(pageSize)
                  .skip(pageSize * (curpage - 1))  

  res.json({devices, curpage, pages: Math.ceil(count / pageSize)})
}) 
