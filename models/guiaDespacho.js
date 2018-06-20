var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GuiaSchema = new Schema({
    
    tipoTraslado : { type: String, required: true },
    fecha: { type: String, required: true },
    
    cliente:{
        id: { type: Schema.Types.ObjectId, ref: 'Cliente'},
        nombre: { type: String, required: true },
        rut: { type: String, required: true },
        giro: { type: String, required: true }
    },
    
    obra:{
        id: { type: Schema.Types.ObjectId, ref: 'Obra'},
        nombre: { type: String, required: true },
        direccion: { type: String, required: true }
    },
    
    datosChofer : {
        id: { type: Schema.Types.ObjectId, ref: 'PersonaForanea'},
        nombre: { type: String, required: true },
        apellido: { type: String, required: true },
        rut: { type: String, required: true },
        cargo: { type: String, required: true } 
    },
   
    items: [
       {
            detalle:{
                descripcion:{ type: String, required: true },
                cantidad: { type: Number, required: true }
            }
       }
    ]

});

module.exports = mongoose.model('Guia', GuiaSchema);