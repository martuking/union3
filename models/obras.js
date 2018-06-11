var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObrasSchema = new Schema({

    clientes_id: Schema.Types.ObjectId,
    nombre: { type: String, required: true },
    ubicacion: { type: String, required: true },
    nombre: { type: String, required: true },
    telefono_obra: { type: Number },
    administrador_obra: { type: String, required: true },
    administrador_mail: { type: String, required: true },
    administrador_celular: { type: Number, required: true },
    jefe_terreno: { type: String, required: true },
    jefe_terreno_mail: { type: String, required: true },
    jefe_terreno_celular: { type: Number, required: true },
    jefe_obra: { type: String, required: true },
    jefe_obra_mail: { type: String, required: true },
    jefe_obra_celular: { type: Number, required: true },
    administrativo: { type: String },
    administrativo_mail: { type: String },
    administrativo_celular: { type: String },
    prevencionista: { type: String, required: true },
    prevencionista_mail: { type: String, required: true },
    prevencionista_celuar: { type: Number, required: true },
    gruas:[
        {
            gruas_id: Schema.Types.ObjectId,
            numero_serie: { type: Number, required: true },
            marca: { type: String, required: true },
            modelo: { type: String, required: true },
            configuraciones_altura_actual: { type: Number, required: true },
            configuraciones_pluma_actual: { type: Number, required: true },
            configuraciones_empotrado_actual: { type: Number, required: true },
            configuraciones_lastre_actual: { type: Number, required: true }
        }
    ]

});

module.exports = mongoose.model('Obras', ObrasSchema);