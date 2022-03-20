const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    roll_no : {type: Number, required: true},
    currentBatch: {
        type:mongoose.Schema.Types.ObjectId, 
        ref:'batch',
        required:true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
},{
    versionKey:false,
    timestamps:true,
});

module.exports = mongoose.model('student',studentSchema);