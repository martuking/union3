var mongoose = require('mongoose');
var Schema = mongoose.Schema;

PersonaForaneaSchema = new Schema({
    
    nombre: { type: String, require: true },
    apellido1: { type: String, require: true },
    apellido2: { type: String },
    rut: { type: String },
    cargo: { type: String, require: true },
    mail: { type: String },
    celular: { type: String },
    cliente: { type: Schema.Types.ObjectId, ref: 'cliente' }

}); 

module.exports = mongoose.model('PersonaForanea', PersonaForaneaSchema);