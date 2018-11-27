const express = require('express');
const router = express.Router();

const unidad04Controller = require('../controller/unidad04.controller');



// router.get('/username', alumnoController.getUsername)
// router.get('/', alumnoController.getAlumnos);

router.post('/', unidad04Controller.createRegister);
// router.get('/:id', alumnoController.getAlumno);
// router.put('/:id', alumnoController.updateAlumno);
// router.delete('/:id', alumnoController.deleteAlumno);

// router.post('/login', alumnoController.LogIn);


module.exports = router;