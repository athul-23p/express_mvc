const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema(
  {
    evaluation_id: {
      type: mongoose.Schema.Types.ObjectId,
      path: "evaluation",
      required: true,
    },
    student_id: {
      type: mongoose.Schema.Types.ObjectId,
      path: "student",
      required: true,
    },
    marks: {
      type: Number,
      required: true,
    },
    result: {
        type: String,
        enum: ['PASSED','FAILED'],
        required:true
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model('submission',submissionSchema);