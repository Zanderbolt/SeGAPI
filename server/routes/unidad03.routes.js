const express = require('express');
const router = express.Router();

const unidad03Controller = require('../controller/unidad03.controller');



// router.get('/username', alumnoController.getUsername)
// router.get('/', alumnoController.getAlumnos);

router.post('/', unidad03Controller.createRegister);
// router.get('/:id', alumnoController.getAlumno);
// router.put('/:id', alumnoController.updateAlumno);
// router.delete('/:id', alumnoController.deleteAlumno);

// router.post('/login', alumnoController.LogIn);


module.exports = router;