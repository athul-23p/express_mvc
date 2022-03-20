const express = require("express");
const router = express.Router();
const crudController = require("./crud.controller");
const Evaluation = require("../models/evaluation.model");

router.get("/", crudController.listAll(Evaluation));

router.post("/", crudController.addOne(Evaluation));

router.patch("/:id", crudController.updateById(Evaluation));

router.delete("/:id", crudController.deleteById(Evaluation));

module.exports = router;
