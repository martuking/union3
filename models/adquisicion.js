var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdquisicionSchema = new Schema({
    
    descripcion: { type: String, required: true },
    categoria: { type: String, required: true },
    precioCompra: { type: Number, required: true }

});

module.exports = mongoose.model('Adquisicion', AdquisicionSchema);