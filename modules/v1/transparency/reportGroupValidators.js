const rfr = require('rfr')
const handleValidation = rfr('/helpers/validation')
const reportGroupModel = require('./reportGroupModel').model

const uniqueReportGroupValidator = (req, res, next) => {
  reportGroupModel
    .findOne({name: req.body.name})
    .exec((err, value) => {
      if (err) throw err

      if (!value) {
        next()
      } else {
        const errorMessage = {
          'name': {
            param: 'name',
            msg: {
              error: 'unique'
            }
          }
        }
        res.status(409).json(errorMessage)
        return false
      }
    })
}

module.exports = {
  create: (req, res, next) => {
    // TODO - criar validação
    handleValidation(req, res, next)
  },
  update: (req, res, next) => {
    // TODO - criar validação
    handleValidation(req, res, next)
  },
  uniqueReportGroupValidator
}
