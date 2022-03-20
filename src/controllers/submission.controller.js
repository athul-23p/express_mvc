const express = require("express");
const router = express.Router();
const crudController = require("./crud.controller");
const Submission = require("../models/submission.model");

router.get("/", crudController.listAll(Submission));

router.post("/", async (req, res) => {
  try {
    
    let marks = req.body.marks;
    if(marks>3){
        req.body.result='PASSED';
    }
    else{
        req.body.result='FAILED';
    }
    const data = await Submission.create(req.body);
    res.status(201).send(data);
    

  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.patch("/:id", crudController.updateById(Submission));

router.delete("/:id", crudController.deleteById(Submission));

module.exports = router;
