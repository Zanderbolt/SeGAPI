const express = require('express');
const router = express.Router();

const alumnoController = require('../controller/alumno.controller');



router.get('/username', alumnoController.getUsername)
router.get('/', alumnoController.getAlumnos);

router.post('/', alumnoController.createAlumno);
router.get('/:id', alumnoController.getAlumno);
router.put('/:id', alumnoController.updateAlumno);
router.delete('/:id', alumnoController.deleteAlumno);

router.post('/login', alumnoController.LogIn);


module.exports = router;