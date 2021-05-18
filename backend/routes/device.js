const express = require('express')
const {getAllDevice, addDevice} = require('../controller/DeviceController')

const router = express.Router()

router.route('/')
  .get(getAllDevice)
  .post(addDevice)

module.exports = router  