const express = require('express');
const router = express.Router();

const unidad01Controller = require('../controller/unidad01.controller');



// router.get('/username', alumnoController.getUsername)
// router.get('/', alumnoController.getAlumnos);

router.post('/', unidad01Controller.createRegister);
// router.get('/:id', alumnoController.getAlumno);
// router.put('/:id', alumnoController.updateAlumno);
// router.delete('/:id', alumnoController.deleteAlumno);

// router.post('/login', alumnoController.LogIn);


module.exports = router;