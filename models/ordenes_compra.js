var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrdenesSchema = new Schema({

    fecha_creacion: { type: Date, required: true },
    fecha_entrega: { type: Date, required: true },
    status: { type: String, required: true },
    clientes_id: Schema.Types.ObjectId,
    clientes_nombre: { type: String, required: true },
    clientes_rut: { type: String, required: true },
    clientes_contacto: { type: String, required: true },
    clientes_contacto_mail: { type: String, required: true },
    clientes_contacto_telefono: { type: Number, required: true },
    obras_id: Schema.Types.ObjectId,
    obras_nombre: { type: String, required: true },
    obras_administrador: { type: String, required: true },
    obras_direccion: { type: String, required: true },
    detalle_orden: [
        {
            gruas_id: Schema.Types.ObjectId,
            gruas_numero_serie: { type: String, required: true },
            gruas_modelo: { type: String, required: true },
            gruas_marca: { type: String, required: true },
            arriendo_grua_telescopica_horas: { type: Number },
            precio_arriendo_grua_telescopica: { type: Number },
            arriendo_grua_torre_meses: { type: Number },
            arriendo_grua_torre_meses_precio: { type: Number },
            desmontaje_torre: { type: Number },
            horas_extra_grua_operador_cantidad: { type: Number },
            horas_extra_grua_operador_precio: { type: Number },
            montaje_torre: { type: Number },
            operador_torre_meses: { type: Number },
            operador_torre_precio: { type: Number },
            recargo_dia_no_habil_cantidad: { type: Number },
            recargo_dia_no_habil_precio: { type: Number },
            viatico_montaje_desmontaje_cantidad: { type: Number },
            viatico_montaje_desmontaje_precio: { type: Number },
            viatico_operador_meses: { type: Number },
            viatico_operador_precio: { type: Number }
        }
    ]

});

module.exports = mongoose.model('Ordenes', OrdenesSchema);