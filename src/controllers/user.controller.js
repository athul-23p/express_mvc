const express = require('express');
const router = express.Router();
const crudController = require('./crud.controller');
const User = require('../models/user.model');

router.get('/', crudController.listAll(User));

router.post('/', crudController.addOne(User));

router.patch('/:id',crudController.updateById(User));

router.delete('/:id',crudController.deleteById(User));

module.exports = router;