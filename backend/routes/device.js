const express = require('express')
const {getAllDevice, addDevice, searchDevice, filterDevice} = require('../controller/DeviceController')

const router = express.Router()

router.route('/')
  .get(getAllDevice)
  .post(addDevice)

router.post('/search', searchDevice)  
router.post('/filter', filterDevice)  

module.exports = router  