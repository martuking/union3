var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdquisicionesSchema = new Schema({
    
    descripcion: { type: String, required: true },
    categoria: { type: String, required: true },
    precio_compra: { type: Number, required: true }

});

module.exports = mongoose.model('Adquisiciones', AdquisicionesSchema);