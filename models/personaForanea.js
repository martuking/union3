var mongoose = require('mongoose');
var Schema = mongoose.Schema;

PersonaForaneaSchema = new Schema({
    
    nombre: { type: String, require: true },
    apellido: { type: String, require: true },
    rut: { type: String, require: true },
    cargo: { type: String, require: true },
    mail: { type: String, require: true },
    celular: { type: String, require: true },
    clienteId: { type: Schema.Types.ObjectId, ref: 'Cliente'}

}); 

module.exports = mongoose.model('PersonaForanea', PersonaForaneaSchema);