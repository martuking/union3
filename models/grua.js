var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GruaSchema = new Schema({
    
    numeroSerie:{ type: String, required: true },
    marca:{ type: String, required: true },
    modelo:{ type: String, required: true },
    configuraciones:{
        
        altura: { type: Number, required: true },
        pluma: { type: Number, required: true },
        empotrado: { type: String, required: true },
        lastre: { type: Number, required: true }

    }
});

module.exports = mongoose.model('Grua', GruaSchema);