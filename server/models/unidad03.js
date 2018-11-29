const mongoose = require('mongoose');

const { Schema } = mongoose;

const unidad03Schema = new Schema({
    informe_actividades: { type: String, required: true },
    comentarios: { type: String, required: false },
    calificacion: { type: String, required: false },
    numero_cuenta: { type: String, required: false },
});

module.exports = mongoose.model('unidad03', unidad03Schema);