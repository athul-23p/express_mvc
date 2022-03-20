const express = require('express');
const router = express.Router();

const Submission = require('../models/submission.model');
const User = require('../models/user.model');
// const Student = require('../models/student.model');
router.get('/getStudentsByEvalId/:evalID',async (req,res)=>{
    try {
        // console.log(req.params);
        let student = await Submission.find({
          evaluation_id: req.params.evalID,
        })
          .lean()
          .exec();;
        return res.status(200).send(student);
    } catch (error) {
        return res.status(500).send(error);
    }
});



router.get("/getTopScorerByEvalId/:evalID", async (req, res) => {
  try {
    // console.log(req.params);
    let student = await Submission.find({
      evaluation_id: req.params.evalID,
    }).sort('-marks')
      .limit(1)
      .populate({
          path:'student_id',
          model: User
      })
      .lean()
      .exec();
    return res.status(200).send(student);
  } catch (error) {
    return res.status(500).send(error);
  }
});


module.exports = router;