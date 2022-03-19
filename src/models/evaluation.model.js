const mongoose = require('mongoose');

const evalutaionSchema = new mongoose.Schema(
  {
    data_of_evaluation: { type: Date, required: true },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      path: "user",
      require: true,
    },
    batch_id: {
      type: mongoose.Schema.Types.ObjectId,
      path: "batch",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model('evaluation',evalutaionSchema);