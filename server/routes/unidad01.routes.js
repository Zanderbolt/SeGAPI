const express = require('express');
const router = express.Router();

const unidad01Controller = require('../controller/unidad01.controller');


// CREATE
router.post('/', unidad01Controller.createRegister);

// SELECT ONE
router.get('/:id', unidad01Controller.getUnidad01);

// UPDATE
router.put('/:id', unidad01Controller.updateUnidad01);


// router.get('/username', alumnoController.getUsername)
// router.get('/', alumnoController.getAlumnos);

// router.put('/:id', alumnoController.updateAlumno);
// router.delete('/:id', alumnoController.deleteAlumno);

// router.post('/login', alumnoController.LogIn);


module.exports = router;