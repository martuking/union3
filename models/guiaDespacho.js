var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GuiaSchema = new Schema({
    
    tipoTraslado : { type: String, required: true },
    fecha: { type: String, required: true },
    
    cliente:{ type: Schema.Types.ObjectId, ref: 'Cliente' },
    obra:{ type: Schema.Types.ObjectId, ref: 'Obra' },
    chofer : { type: Schema.Types.ObjectId, ref: 'PersonaForanea' },
    items: [
       {
            descripcion:{ type: String, required: true },
            cantidad: { type: Number, required: true }
       }
    ]

});

module.exports = mongoose.model('Guia', GuiaSchema);