const router = require('express').Router()
const reportController = require('./reportController')
const reportValidators = require('./reportValidators')
const reportGroupController = require('./reportGroupController')
const reportGroupValidators = require('./reportGroupValidators')

//* --- report ---
// Create
router.post('/report', reportValidators.create, reportController.create)
// Get
router.get('/report', reportController.find)
// Get by Id
router.get('/report/:id', reportController.findById)
// Update
router.patch('/report/:id', reportValidators.update, reportController.findOneAndUpdate)
// Delete
router.delete('/report/:id', reportController.remove)

//* --- reportGroup ---
// Create
router.post('/reportgroup', [reportGroupValidators.create, reportGroupValidators.uniqueReportGroupValidator], reportGroupController.create)
// Get
router.get('/reportgroup', reportGroupController.find)
// Get by Id
router.get('/reportgroup/:id', reportGroupController.findById)
// Update
router.patch('/reportgroup/:id', reportGroupValidators.update, reportGroupController.findOneAndUpdate)
// Delete
router.delete('/reportgroup/:id', reportGroupController.remove)

module.exports = router
