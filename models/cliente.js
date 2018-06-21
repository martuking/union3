var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteSchema = new Schema({
    
    nombre: { type: String, required: true },
    rut: { type: String, required: true },
    giro: { type: String, required: true },
    status: { type: String, default: 'activo' },
    fechaRegistro: { type: Date, required: true },
    oficinas:[{ type: Schema.Types.ObjectId, ref: 'Oficina'}],
    personasCliente:[{ type: Schema.Types.ObjectId, ref: 'PersonaForanea'}]
    
});

module.exports = mongoose.model('Cliente', ClienteSchema);