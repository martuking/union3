var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObraSchema = new Schema({
    
    nombre: { type: String, required: true },
    ubicacion: { type: String, required: true },
    telefono: { type: Number },
    cliente:{ type: Schema.Types.ObjectId, ref: 'Cliente'},
    administrador: { type: Schema.Types.ObjectId, ref: 'PersonaForanea' },
    jefeTerreno:{ type: Schema.Types.ObjectId, ref: 'PersonaForanea' },
    jefeObra:{ type: Schema.Types.ObjectId, ref: 'PersonaForanea' },
    administrativo:{ type: Schema.Types.ObjectId, ref: 'PersonaForanea' },
    prevencionista:{ type: Schema.Types.ObjectId, ref: 'PersonaForanea' },
    gruas:[{ type: Schema.Types.ObjectId, ref: 'Grua' }]

});

module.exports = mongoose.model('Obra', ObraSchema);