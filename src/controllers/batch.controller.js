const express = require("express");
const router = express.Router();
const crudController = require("./crud.controller");
const Batch = require("../models/batch.model");

router.get("/", crudController.listAll(Batch));

router.post("/", crudController.addOne(Batch));

router.patch("/:id", crudController.updateById(Batch));

router.delete("/:id", crudController.deleteById(Batch));

module.exports = router;
