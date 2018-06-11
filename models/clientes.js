var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClientesSchema = new Schema({
    
    nombre: { type: String, required: true },
    rut: { type: String, required: true },
    giro: { type: String, required: true },
    status: { type: String, required: true },
    representante_legal: { type: String, required: true },
    fecha_registro: { type: Date, required: true },
    oficinas: [
        {
            direccion: { type: String, required: true },
            telefonos: [ { type: Number, required } ]
        }
    ],
    personas_contacto:[
        {
            nombre: { type: String, required: true },
            apellido: { type: String, required: true },
            celular: { type: Number, required: true },
            mail: { type: String, required: true },
            cargo: { type: String, required: true }
        }
    ]
    
});

module.exports = mongoose.model('Clientes', ClientesSchema);