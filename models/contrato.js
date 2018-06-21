var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContratoSchema = new Schema({
    
    fechaCreacion: { type: Date, required: true },
    fechaInicio: { type: Date, required: true },
    fechaTermino: { type: Date, required: true },
    status: { type: String, default: 'activo' },
    cliente:{ type: Schema.Types.ObjectId, ref: 'Cliente' },
    representanteLegal:[{ type: Schema.Types.ObjectId, ref: 'PersonaForanea' }],
    obra:{ type: Schema.Types.ObjectId, ref: 'Obra' },
    gruas:[{ type: Schema.Types.ObjectId, ref: 'Grua'}]
    
});

module.exports = mongoose.model('Contrato', ContratoSchema);