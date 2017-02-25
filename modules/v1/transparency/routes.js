const rfr = require('rfr')
const router = require('express').Router()
const reportController = require('./reportController')
const reportValidators = require('./reportValidators')
const reportGroupController = require('./reportGroupController')
const reportGroupValidators = require('./reportGroupValidators')
const jwtMiddleware = rfr('/helpers/jwt').middleware

//* --- report ---
// Create
router.post('/report', [jwtMiddleware, reportValidators.create], reportController.create)
// Get
router.get('/report', reportController.find)
// Get by Id
router.get('/report/:id', reportController.findById)
// Update
router.patch('/report/:id', [jwtMiddleware, reportValidators.update], reportController.findOneAndUpdate)
// Delete
router.delete('/report/:id', [jwtMiddleware], reportController.remove)

//* --- reportGroup ---
// Create
router.post('/reportgroup', [jwtMiddleware, reportGroupValidators.create, reportGroupValidators.uniqueReportGroupValidator], reportGroupController.create)
// Get
router.get('/reportgroup', reportGroupController.find)
// Get by Id
router.get('/reportgroup/:id', reportGroupController.findById)
// Update
router.patch('/reportgroup/:id', [jwtMiddleware, reportGroupValidators.update], reportGroupController.findOneAndUpdate)
// Delete
router.delete('/reportgroup/:id', [jwtMiddleware], reportGroupController.remove)

module.exports = router
