const mongoose = require('mongoose');

const { Schema } = mongoose;

const unidad04Schema = new Schema( {
    sistematizacion:      { type: String, required: true },
    comentarios:              { type: String, required: true },
    calificacion:             { type: String, required: true },
    numero_cuenta: { type: String, required: false },    
});

module.exports = mongoose.model('unidad04', unidad04Schema);