const express = require('express');
const router = express.Router();

const unidad02Controller = require('../controller/unidad02.controller');



// router.get('/username', alumnoController.getUsername)
// router.get('/', alumnoController.getAlumnos);

router.post('/', unidad02Controller.createRegister);
// router.get('/:id', alumnoController.getAlumno);
// router.put('/:id', alumnoController.updateAlumno);
// router.delete('/:id', alumnoController.deleteAlumno);

// router.post('/login', alumnoController.LogIn);


module.exports = router;