const express = require('express');
const router = express.Router();

const unidad02Controller = require('../controller/unidad02.controller');

// CREATE
router.post('/', unidad02Controller.createRegister);

// SELECT ONE
router.get('/:id', unidad02Controller.getUnidad02);

// SELECT ONE
router.put('/:id', unidad02Controller.updateUnidad02);


// router.get('/username', alumnoController.getUsername)
// router.get('/', alumnoController.getAlumnos);

// router.get('/:id', alumnoController.getAlumno);
// router.put('/:id', alumnoController.updateAlumno);
// router.delete('/:id', alumnoController.deleteAlumno);

// router.post('/login', alumnoController.LogIn);


module.exports = router;