const mongoose = require('mongoose')
const modelName = 'reportgroup'

// {"name": "Distrito 2017"}

const structure = {
  last_updated_by: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  active: {
    type: Boolean,
    required: true
  }
}

const options = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
}

const schema = mongoose.Schema(structure, options)
const model = mongoose.model(modelName, schema)

module.exports = {
  schema: schema,
  model: model
}
