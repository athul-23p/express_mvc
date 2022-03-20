const express = require("express");
const router = express.Router();
const crudController = require("./crud.controller");
const Student = require("../models/student.model");

router.get("/", crudController.listAll(Student));

router.post("/", crudController.addOne(Student));

router.patch("/:id", crudController.updateById(Student));

router.delete("/:id", crudController.deleteById(Student));

module.exports = router;
