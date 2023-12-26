const express= require('express');
const router= express.Router();
const routeIndex = require('../controllers/index');
const upload= require('../middlewares/multer');
const controller = require('../controllers/index');

router.get('/',routeIndex.index)
router.get('/crear-plato', routeIndex.crearPlato)

router.post('/crear-plato',upload.single('img'),routeIndex.guardarPlato)
module.exports= router


