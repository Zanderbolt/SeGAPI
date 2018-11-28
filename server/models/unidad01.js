const mongoose = require('mongoose');

const { Schema } = mongoose;

const unidad01Schema = new Schema({
    antecedentes_comunidad: { type: String, required: true },
    infraestructura_equipamiento: { type: String, required: true },
    organizacion_social: { type: String, required: true },
    niveles_de_vida: { type: String, required: true },
    diagnostico_general: { type: String, required: true },
    comentarios: { type: String, required: false },
    calificacion: { type: String, required: false },
    numero_cuenta: { type: String, required: false },
});

module.exports = mongoose.model('unidad01', unidad01Schema);