var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OficinaSchema = new Schema({
    
    clienteId: { type: Schema.Types.ObjectId, ref: 'Cliente'},
    direccion: { type: String, required: true },
    comuna: { type: String, required: true },
    telefonos: [ { type: Number, required: true } ]

});

module.exports = mongoose.model('Oficina', OficinaSchema);