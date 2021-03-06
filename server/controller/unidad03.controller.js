const Unidad03 = require('../models/unidad03')
const unidad03Controller = {};
var jwt = require('jsonwebtoken');

// Guardar un alumno
unidad03Controller.createRegister = async (req, res) => {
    const unidad03 = new Unidad03(req.body);
    await unidad03.save((err, task) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(201).json(task);
    });
};

// Obtener laUNidad
unidad03Controller.getUnidad03 = async (req, res) => {
    const unidad03 = await Unidad03.findOne(
        {numero_cuenta: req.params.id});
    res.json(unidad03);
};

// Actualizar Unidad
unidad03Controller.updateUnidad03 = async (req, res) => {
    const { id } = req.params;
    const unidad03 = {
        informe_actividades: req.body.informe_actividades,           
    }
    await Unidad03.findOneAndUpdate({numero_cuenta: id}, { $set: unidad03 }, { new: true });
    res.json({
        'status': id
    });
};


module.exports = unidad03Controller;

// // Obtener todos los alumnos
// alumnosController.getAlumnos = async (req, res) => {
//     const alumnos = await Alumno.find();
//     res.json(alumnos);
// };


// // Obtener un alumno
// alumnosController.getAlumno = async (req, res) => {
//     // const alumno = await Alumno.findOne(req.params.id);
//     // res.json(alumno);
// };

// //Login
// alumnosController.LogIn = async (req, res, next) => {
//     const alumnos = await Alumno.findOne({
//         numero_cuenta: req.body.numero_cuenta
//     });
//     if (alumnos != null) {
//         var PWserver = alumnos.password;
//         var PWcliente = req.body.password;
//         if (PWserver == PWcliente) {
//             let token = jwt.sign({ numero_cuenta: alumnos.numero_cuenta }, 'secret', { expiresIn: '3h' });
//             return res.status(200).json(token);
//         }
//         else
//             return res.json({ message: 'Datos Incorrectos' })
//     }
//     else {
//         return res.json({ message: 'Usuario no Registrado' });
//     }
// };



// // Update un alumno
// alumnosController.updateAlumno = async (req, res) => {
//     const { id } = req.params;
//     const alumno = {
//         numero_cuenta: req.body.numero_cuenta,
//         nombre: req.body.nombre,
//         apellido_paterno: req.body.apellido_paterno,
//         apellido_materno: req.body.apellido_materno,
//         grado: req.body.grado,
//         grupo: req.body.grupo,
//         correo: req.body.correo,
//         escenario_asignado: req.body.escenario_asignado

//     }
//     await Alumno.findByIdAndUpdate(id, { $set: alumno }, { new: true });
//     res.json({
//         'status': 'Alumno Updated'
//     });
// };
// // Delete un alumno
// alumnosController.deleteAlumno = async (req, res) => {
//     await Alumno.findByIdAndRemove(req.params.id);
//     res.json({
//         'status': "Alumno Eliminado"
//     });
// };

// alumnosController.getUsername = async (req, res) => {

    
//     alumnosController.verifyToken(req,res);
//     return res.status(200).json(decodedToken.numero_cuenta);

// };




// var decodedToken = '';
// //validateToken

// alumnosController.verifyToken = async(req,res, next) => {
//     let token = req.query.token;

//     jwt.verify(token,'secret', function(err, tokendata){
//         if (err) {
//             return res.status(400).json({message: 'Unahtorized Request'});
//         }
//         if (tokendata) {
//             decodedToken = tokendata;
//             // next();
//         }
//     })
// };


