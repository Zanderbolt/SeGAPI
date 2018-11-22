const Alumno = require('../models/alumnos')
const alumnosController = {};

// Obtener todos los alumnos
alumnosController.getAlumnos =  async (req, res) => {
    const alumnos = await Alumno.find();
    res.json(alumnos);
};

// Obtener un alumno
alumnosController.getAlumno = async (req, res) => {    
    const alumno = await Alumno.findById(req.params.id);    
    res.json(alumno);
};

// Guardar un alumno
alumnosController.createAlumno =  async (req, res) => {
    const alumno = new Alumno(req.body);
    await alumno.save((err, task) => {
        if (err) {
          res.status(500).send(err);
        }
        res.status(201).json(task);
      });
};
// Update un alumno
alumnosController.updateAlumno =  async (req, res) => {
    const {id} = req.params;
    const alumno = {
        numero_cuenta: req.body.numero_cuenta,
        nombre: req.body.nombre,
        apellido_paterno: req.body.apellido_paterno,
        apellido_materno: req.body.apellido_materno,
        grado: req.body.grado,
        grupo: req.body.grupo,
        correo: req.body.correo,
        escenario_asignado: req.body.escenario_asignado
        
    }
    await Alumno.findByIdAndUpdate(id, {$set: alumno}, { new: true});    
    res.json({
        'status': 'Alumno Updated'
    });
};
// Delete un alumno
alumnosController.deleteAlumno =   async(req, res) => {
    await Alumno.findByIdAndRemove(req.params.id);
    res.json({
        'status': "Alumno Eliminado"
    });
};

module.exports = alumnosController;