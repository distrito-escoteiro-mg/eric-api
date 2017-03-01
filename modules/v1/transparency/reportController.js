const rfr = require('rfr')
const actionsPath = './actions/'
const Model = require('./reportModel').model
const groupModel = require('./reportGroupModel').model
const extend = require('extend')
const jwtHelper = rfr('helpers/jwt')

const controllerActions = {}

// Import default actions
const importActions = ['findById', 'findOneAndUpdate', 'update', 'remove']
const createMethods = (element, index) => {
  controllerActions[element] = rfr(actionsPath + element)(Model)
}
importActions.forEach(createMethods)

// Controller custom actions
const customMethods = {
  test: (req, res) => {
    res.status(200).json({tested: true})
  },
  create: (req, res) => {
    const data = req.body
    data['last_updated_by'] = jwtHelper.getUserId(req)
    groupModel.findOne({ name: req.body.report_group }, function (err, dado) {
      if (err) throw err
      data.report_group = dado._id
      const modelInstance = new Model(data)
      modelInstance.save((err, data) => {
        if (err) throw err
        data
        .populate('last_updated_by', (err, news) => {
          if (err) throw err
          res.status(200).json(news)
        })
      })
    }
   )
  },
  find: (req, res) => {
    const query = {}
    Model
    .find(query)
    .populate('last_updated_by')
    .populate('report_group')
    .exec((err, data) => {
      if (err) throw err
      res.status(200).json(data)
    })
  }
}

extend(controllerActions, customMethods)
module.exports = controllerActions
