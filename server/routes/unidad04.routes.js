const express = require('express');
const router = express.Router();

const unidad04Controller = require('../controller/unidad04.controller');

// Create
router.post('/', unidad04Controller.createRegister);

// SELECT ONE
router.get('/:id', unidad04Controller.getUnidad04);

// UPDATE
router.put('/:id', unidad04Controller.updateUnidad04);

// router.get('/username', alumnoController.getUsername)
// router.get('/', alumnoController.getAlumnos);


// router.get('/:id', alumnoController.getAlumno);
// router.put('/:id', alumnoController.updateAlumno);
// router.delete('/:id', alumnoController.deleteAlumno);

// router.post('/login', alumnoController.LogIn);


module.exports = router;