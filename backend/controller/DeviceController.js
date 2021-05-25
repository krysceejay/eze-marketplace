const {google} = require('googleapis')
const asyncHandler = require('express-async-handler')
const BuyRequest = require('../models/BuyRequest')
const SellRequest = require('../models/SellRequest')


const readFromSheet = async () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "eze-marketplace.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  })

  // Create client instance for auth
  const client = await auth.getClient()

  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: "v4", auth: client })

  const spreadsheetId = "1l4bc5cUihPX3WoIDY8cJDNjFNyeOxrB-c8GbX0UztGI"

  // Get metadata about spreadsheet
  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  })

  //Read rows from spreadsheet
  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "IPHONES!A:J",
  })

  return getRows.data
}

// @desc    Get all devices
// @route GET /api/device
// @access  Public
exports.getAllDevice = asyncHandler (async (req, res) => {
  //const getData = await readFromSheet()
  const pageSize = 15
  const curpage = Number(req.query.pageNumber) || 1
  let devices

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
  const pageSize = 15
  const curpage = Number(req.query.pageNumber) || 1
  const {search} = req.body
  const pipe = search.replace(/[ ]*,[ ]*|[ ]+/g, "|")
  const re = new RegExp(pipe, "i")

  const count = await BuyRequest.countDocuments({ $or: [{ name: { $in: [re]} }, { grade: { $in: [re]} }, { storageSize: { $in: [re]} }] })

  const devices = await BuyRequest.find({ $or: [{ name: { $in: [re]} }, { grade: { $in: [re]} }, { storageSize: { $in: [re]} }] })
                  .limit(pageSize)
                  .skip(pageSize * (curpage - 1)) 

  res.json({devices, curpage, pages: Math.ceil(count / pageSize)})
}) 

// @desc    Filter device
// @route   POST /api/device/filter
// @access  Public
exports.filterDevice = asyncHandler(async (req, res) => {
  const pageSize = 15
  const curpage = Number(req.query.pageNumber) || 1
  const { category, minPrice, maxPrice, storage } = req.body

  const count = await BuyRequest.countDocuments({ name: { $regex: category, $options: 'i' }, storageSize: { $regex: storage, $options: 'i' }, price: { $gte: minPrice, $lte: maxPrice } })

  const devices = await BuyRequest.find({ name: { $regex: category, $options: 'i' }, storageSize: { $regex: storage, $options: 'i' }, price: { $gte: minPrice, $lte: maxPrice } })
                  .limit(pageSize)
                  .skip(pageSize * (curpage - 1))  

  res.json({devices, curpage, pages: Math.ceil(count / pageSize)})
})
