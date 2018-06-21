var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OficinaSchema = new Schema({
    
    direccion: { type: String, require: true },
    comuna: { type: String, require: true },
    telefono: { type: String, require: true },
    cliente: { type: Schema.Types.ObjectId, ref: 'Cliente'},

});

module.exports = mongoose.model('Oficina', OficinaSchema);