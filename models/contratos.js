var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContratosSchema = new Schema({
    
    fecha_creacion: { type: Date, required: true },
    fecha_inicio: { type: Date, required: true },
    fecha_termino: { type: Date, required: true },
    status: { type: String, required: true },
    clientes_id: Schema.Types.ObjectId,
    clientes_nombre: { type: String, required: true },
    clientes_rut: { type: String, required: true },
    clientes_representante_legal: { type: String, required: true },
    obras_id: Schema.Types.ObjectId,
    obras_nombre: { type: String, required: true },
    obras_administrador: { type: String, required: true },
    obras_direccion: { type: String, required: true },
    gruas: [
        {
            gruas_id: Schema.Types.ObjectId,
            gruas_numero_serie: { type: String, required: true },
            gruas_marca: { type: String, required: true },
            gruas_modelo: { type: String, required: true },
            configuracion_altura: { type: Number, required: true },
            configuracion_pluma: { type: Number, required: true },
            configuracion_empotrado: { type: String, required: true },
            configuracion_lastres: { type: Number, required: true }
        }
    ]
    
});

module.exports = mongoose.model('Contratos', ContratosSchema);