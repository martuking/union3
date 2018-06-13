var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContratoSchema = new Schema({
    
    fechaCreacion: { type: Date, required: true },
    fechaInicio: { type: Date, required: true },
    fechaTermino: { type: Date, required: true },
    status: { type: String, required: true },
    cliente:{
        id: { type: Schema.Types.ObjectId, ref: 'Cliente'},
        nombre: { type: String, required: true },
        rut: { type: String, required: true },
        representanteLegal: { type: String, required: true }
    },
    obra:{
        id: { type: Schema.Types.ObjectId, ref: 'Obra'},
        nombre: { type: String, required: true },
        administrador: { type: String, required: true },
        direccion: { type: String, required: true }
    },
    gruas:[
        {
            id: { type: Schema.Types.ObjectId, ref: 'Grua'},
            detalle: {   
                numeroSerie: { type: String, required: true },
                marca: { type: String, required: true },
                modelo: { type: String, required: true },
            },
            configuraciones:{
                altura: { type: Number, required: true },
                pluma: { type: Number, required: true },
                empotrado: { type: String, required: true },
                lastres: { type: Number, required: true }
            }
        }
    ]
    
});

module.exports = mongoose.model('Contrato', ContratoSchema);