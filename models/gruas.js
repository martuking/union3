var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GruasSchema = new Schema({
    
    numero_serie:{ type: String, required: true },
    marca:{ type: String, required: true },
    modelo:{ type: String, required: true },
    configuraciones_altura: [{ type: Number, required: true }],
    configuraciones_pluma: [{ type: Number, required: true }],
    configuraciones_empotrado: [{ type: String, required: true }],
    configuraciones_lastre: [{ type: Number, required: true }]
    
});

module.exports = mongoose.model('Gruas', GruasSchema);