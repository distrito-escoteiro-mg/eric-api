const rfr = require('rfr')
const handleValidation = rfr('/helpers/validation')
// const reportModel = require('./reportModel').model

module.exports = {
  create: (req, res, next) => {
    // TODO - criar validação
    handleValidation(req, res, next)
  },
  update: (req, res, next) => {
    // TODO - criar validação
    handleValidation(req, res, next)
  }
}
