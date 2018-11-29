const express = require('express');
const router = express.Router();

const unidad03Controller = require('../controller/unidad03.controller');

// CREATE
router.post('/', unidad03Controller.createRegister);

// SELECT ONE
router.get('/:id', unidad03Controller.getUnidad03);

// UPDATE
router.put('/:id', unidad03Controller.updateUnidad03);

// router.get('/username', alumnoController.getUsername)
// router.get('/', alumnoController.getAlumnos);


// router.get('/:id', alumnoController.getAlumno);
// router.put('/:id', alumnoController.updateAlumno);
// router.delete('/:id', alumnoController.deleteAlumno);

// router.post('/login', alumnoController.LogIn);


module.exports = router;