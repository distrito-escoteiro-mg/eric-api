const mongoose = require('mongoose')
const modelName = 'report'

/* {"last_updated_by": "", "report_group": "", "type": "Despesa",
"short_description": "teste", "complete_description": "say my name",
"date": 1391141532000, "provider": "loja do zezinho", "invoice_image": "string de teste"} */

const structure = {
  last_updated_by: {
    required: false,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  report_group: {
    required: false,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'report_group'
  },
  type: {
    type: String,
    enum: ['Despesa', 'Receita'],
    required: true
  },
  short_description: {
    type: String,
    required: true
  },
  complete_description: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    required: true
  },
  provider: {
    type: String,
    required: true
  },
  invoice_image: {
    data: Buffer,
    contentType: String,
    required: false
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
