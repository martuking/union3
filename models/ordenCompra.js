var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrdenSchema = new Schema({

    fechaCreacion: { type: Date, required: true },
    fechaEntrega: { type: Date, required: true },
    status: { type: String, required: true },
    
    cliente:{
        id: { type: Schema.Types.ObjectId, ref: 'Cliente'},
        nombre: { type: String, required: true },
        rut: { type: String, required: true }
    },
    
    personaContacto:{
        id : { type: Schema.Types.ObjectId, ref: 'PersonaForanea' },
        nombre: { type: String, required: true },
        mail: { type: String, required: true },
        telefono: { type: Number, required: true },
        cargo: { type: String, required: true } 
    },

    obra:{
        id: { type: Schema.Types.ObjectId, ref: 'Obra'},
        nombre: { type: String, required: true },
        administrador: { type: String, required: true },
        direccion: { type: String, required: true }
    },
    
    gruas: [
        {
            id: { type: Schema.Types.ObjectId, ref: 'Grua'},
            numeroSerie: { type: String, required: true },
            Modelo: { type: String, required: true },
            Marca: { type: String, required: true },
            
            arriendo:{
                gruaTelescopicaHoras: { type: Number },
                precioArriendoGruaTelescopica: { type: Number },
                arriendoGruaTorreMeses: { type: Number },
                arriendoGruaTorreMesesPrecio: { type: Number },
                desmontajeTorre: { type: Number },
                horasExtraGruaOperadorCantidad: { type: Number },
                horasExtraGruaOperadorPrecio: { type: Number },
                montajeTorre: { type: Number },
                operadorTorreMeses: { type: Number },
                operadorTorrePrecio: { type: Number },
                recargoDiaNoHabilCantidad: { type: Number },
                recargoDiaNoHabilPrecio: { type: Number },
                viaticoMontajeDesmontajeCantidad: { type: Number },
                viaticoMontajeDesmontajePrecio: { type: Number },
                viaticoOperadorMeses: { type: Number },
                viaticoOperadorPrecio: { type: Number }
            }
        }
    ]

});

module.exports = mongoose.model('Orden', OrdenSchema);