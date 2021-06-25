const express = require ('express')
const router = express.Router()
const classes = require('./classes')
const info = require('./info')

router.use('/classes', classes)
router.use('/info', info)

module.exports = router