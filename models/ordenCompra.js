var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrdenSchema = new Schema({

    fechaCreacion: { type: Date, required: true },
    fechaEntrega: { type: Date, required: true },
    status: { type: String, default: 'activa' },
    cliente:{ type: Schema.Types.ObjectId, ref: 'Cliente'},
    personaContacto:{ type: Schema.Types.ObjectId, ref: 'PersonaForanea' },
    obra:{ type: Schema.Types.ObjectId, ref: 'Obra' },
    gruas: [
        {
            grua: { type: Schema.Types.ObjectId, ref: 'Grua'},
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