const mongoose = require('mongoose');

const { Schema } = mongoose;

const unidad04Schema = new Schema( {
    sistematizacion:      { type: String, required: true },
    comentarios:              { type: String, required: false },
    calificacion:             { type: String, required: false },
    numero_cuenta: { type: String, required: false },    
});

module.exports = mongoose.model('unidad04', unidad04Schema);