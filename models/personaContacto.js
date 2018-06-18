var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonaContactoSchema = new Schema({
    
    clienteId: { type: Schema.Types.ObjectId, ref: 'Cliente'},
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    celular: { type: Number, required: true },
    mail: { type: String, required: true },
    cargo: { type: String, required: true }
    
});

module.exports = mongoose.model('PersonaContacto', PersonaContactoSchema);