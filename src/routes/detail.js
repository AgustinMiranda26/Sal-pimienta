const express= require('express');
const router= express.Router();
const routeDetail = require('../controllers/detail');

router.get('/:id',routeDetail.detail)
module.exports= router

