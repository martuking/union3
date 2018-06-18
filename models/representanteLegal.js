var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RepresentanteLegalSchema = new Schema({
    
    clienteId: { type: Schema.Types.ObjectId, ref: 'Cliente'},
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    rut: { type: String, required: true }

});

module.exports = mongoose.model('RepresentanteLegal', RepresentanteLegalSchema);