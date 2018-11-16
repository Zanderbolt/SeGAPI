const mongoose = require('mongoose');

const { Schema } = mongoose;

const alumnoSchema = new Schema( {
    numero_cuenta:      { type: String, required: true },
    nombre:             { type: String, required: true },
    apellido_paterno:   { type: String, required: true },
    apellido_materno:   { type: String, required: true },
    grado:              { type: String, required: true },
    grupo:              { type: String, required: true },
    correo:             { type: String, required: true },
    escenario_asignado: { type: String, required: true }
});

module.exports = mongoose.model('alumno', alumnoSchema);