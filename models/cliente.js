var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteSchema = new Schema({
    
    nombre: { type: String, required: true },
    rut: { type: String, required: true },
    giro: { type: String, required: true },
    status: { type: String, required: true },
    fechaRegistro: { type: Date, required: true },
    
    representanteLegal:[
        {
            nombre: { type: String, required: true },
            apellido: { type: String, required: true },
            rut: { type: String, required: true }
        }
    ],
    oficinas:[
        {
            direccion: { type: String, required: true },
            comuna: { type: String, required: true },
            telefonos: [ { type: Number, required: true } ]
        }
    ],
    personasContacto:[
        {
            nombre: { type: String, required: true },
            apellido: { type: String, required: true },
            celular: { type: Number, required: true },
            mail: { type: String, required: true },
            cargo: { type: String, required: true }
        }
    ]
    
});

module.exports = mongoose.model('Cliente', ClienteSchema);