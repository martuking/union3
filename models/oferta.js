var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OfertaSchema = new Schema({

    fechaCreacion: { type: Date, required: true },
    status: { type: String, required: true },
    fechaCambioStatus: { type: Date, required: true },
    
    cliente:{
        id: { type: Schema.Types.ObjectId, ref: 'Cliente'},
        rut: { type: String, required: true },
        nombre: { type: String, required: true }
    },
    
    obra:{
        id: { type: Schema.Types.ObjectId, ref: 'Obra'},
        nombre: { type: String, required: true },
        ubicacion: { type: String, required: true }
    },

    personaContacto:{
        id: { type: Schema.Types.ObjectId, ref: 'Obra'},
        nombre: { type: String, required: true },
        apellido: { type: String, required: true },
        mail: { type: String, required: true },
        telefono: { type: String, required: true },
        cargo: { type: String, required: true } 
    },
    
    gruas: [
        {
            id: Schema.Types.ObjectId,
            itemsIncluidos: {
                operadorPrecio: { type: Number, required: true },
                horaExtraOperadorSemana: { type: Number, required: true },
                horaExtraOperadorFinSemana: { type: Number, required: true },
                montajeDesmontaje: { type: Number, required: true },
                mantencionSantiago: { type: Number, required: true },
                visitaEmergencia: { type: Number, required: true },
                pieEmpotramiento: { type: Number, required: true },
                cambioCable: { type: Number, required: true },
                cargaDescargaCamiones: { type: Number, required: true },
                arriendoJuegoPatasEmpotramiento: { type: Number, required: true },
                arriendoTramos: { type: Number, required: true },
                telescopajeDestelescopaje: { type: Number, required: true },
                confeccionRiostra: { type: Number, required: true },
                arriendoAnilloArriostramiento: { type: Number, required: true },
                transporteAccesorios: { type: Number, required: true },
                revisionInicial: { type: Number, required: true }
            },
            itemsNoIncluidos: {
                seguroDañosTerceros: { type: Number, required: true },
                permisosMunicipalesTransito: { type: Number, required: true },
                empalmeElectricoGrua: { type: Number, required: true },
                obrasCivilesAnexas: { type: Number, required: true },
                impuestosDiaFacturacion: { type: Number, required: true },
                reparacionesRepuestos: { type: Number, required: true },
                horasExtraOperador: { type: Number, required: true },
                gruaAuxMontajeDesmontaje: { type: Number, required: true },
                gruaAuxCargaDescargaBodega:  { type: Number, required: true }
            }
        }
    ]

});

module.exports = mongoose.model('Oferta', OfertaSchema);