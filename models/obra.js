var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObraSchema = new Schema({
    
    nombre: { type: String, required: true },
    ubicacion: { type: String, required: true },
    telefonoObra: { type: Number },
    
    cliente:{
        id: { type: Schema.Types.ObjectId, ref: 'Cliente'},
        rut: { type: String, required: true },
        nombre: { type: String, required: true },
    },
    
    administrador:{
        nombre: { type: String, required: true },
        mail: { type: String, required: true },
        celular: { type: Number, required: true }
    },
    
    jefeTerreno:{
        nombre: { type: String, required: true },
        mail: { type: String, required: true },
        celular: { type: Number, required: true }
    },
    
    jefeObra:{
        nombre: { type: String, required: true },
        mail: { type: String, required: true },
        celular: { type: Number, required: true }
    },
    
    administrativo:{
        nombre: { type: String },
        mail: { type: String },
        celular: { type: String }
    },
    
    prevencionista:{
        nombre: { type: String, required: true },
        mail: { type: String, required: true },
        celuar: { type: Number, required: true }
    },
    
    gruas:[
        {
            id: { type: Schema.Types.ObjectId, ref: 'Grua' },
            numeroSerie: { type: Number, required: true },
            marca: { type: String, required: true },
            modelo: { type: String, required: true },
            configuraciones:{
                altura: { type: Number, required: true },
                pluma: { type: Number, required: true },
                empotrado: { type: Number, required: true },
                lastre: { type: Number, required: true }
            }
        }
    ]

});

module.exports = mongoose.model('Obra', ObraSchema);