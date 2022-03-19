const mongoose = require('mongoose');
const { modelName } = require('./user.model');

const batchSchema = new mongoose.Schema(
  {
      batchName: {type: String, required:true},
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model('batch',batchSchema);