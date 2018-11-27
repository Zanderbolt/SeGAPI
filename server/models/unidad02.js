const mongoose = require('mongoose');

const { Schema } = mongoose;

const unidad02Schema = new Schema( {
    justificacion:      { type: String, required: true },
    objetivos_proyecto:             { type: String, required: true },
    estrategias:   { type: String, required: true },
    metas:   { type: String, required: true },
    actividades:              { type: String, required: true },
    recursos_empleados:              { type: String, required: true },
    comentarios:             { type: String, required: true },
    calificacion:             { type: String, required: true },
    numero_cuenta: { type: String, required: false },    
});

module.exports = mongoose.model('unidad02', unidad02Schema);