var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OfertasSchema = new Schema({

    fecha_creacion: { type: Date, required: true },
    status: { type: String, required: true },
    fecha_cambio_status: { type: Date, required: true },
    clientes_id: Schema.Types.ObjectId,
    clientes_nombre: { type: String, required: true },
    obras_id: Schema.Types.ObjectId,
    obras_nombre: { type: String, required: true },
    obras_administrador: { type: String, required: true },
    obras_ubicacion: { type: String, required: true },
    gruas: [
        {
            gruas_id: Schema.Types.ObjectId,
            items_incluidos: {
                operador_precio: { type: Number, required: true },
                hora_extra_operador_semana: { type: Number, required: true },
                hora_extra_operador_fin_semana: { type: Number, required: true },
                montaje_desmontaje: { type: Number, required: true },
                mantencion_santiago: { type: Number, required: true },
                visita_emergencia: { type: Number, required: true },
                pie_empotramiento: { type: Number, required: true },
                cambio_cable: { type: Number, required: true },
                carga_descarga_camiones: { type: Number, required: true },
                arriendo_juego_patas_empotramiento: { type: Number, required: true },
                arriendo_tramos: { type: Number, required: true },
                telescopaje_destelescopaje: { type: Number, required: true },
                confeccion_riostra: { type: Number, required: true },
                arriendo_anillo_arriostramiento: { type: Number, required: true },
                transporte_accesorios: { type: Number, required: true },
                revision_inicial: { type: Number, required: true }
            },
            items_no_incluidos: {
                seguro_daños_terceros: { type: Number, required: true },
                permisos_municipales_transito: { type: Number, required: true },
                empalme_electrico_grua: { type: Number, required: true },
                obras_civiles_anexas: { type: Number, required: true },
                impuestos_dia_facturacion: { type: Number, required: true },
                reparaciones_repuestos: { type: Number, required: true },
                horas_extra_operador: { type: Number, required: true },
                grua_aux_montaje_desmontaje: { type: Number, required: true },
                grua_aux_carga_descarga_bodega:  { type: Number, required: true }
            }
        }
    ]

});

module.exports = mongoose.model('Ofertas', OfertasSchema);