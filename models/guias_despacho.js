var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GuiasSchema = new Schema({

   fecha: { type: String, required: true },
   clientes_id: Schema.Types.ObjectId,
   clientes_nombre: { type: String, required: true },
   clientes_rut: { type: String, required: true },
   clientes_giro: { type: String, required: true },
   obras_id: Schema.Types.ObjectId,
   obras_nombre: { type: String, required: true },
   obras_ubicacion: { type: String, required: true },
   tipo_traslado : { type: String, required: true },
   datos_chofer : {
       nombre: { type: String, required: true },
       apellido: { type: String, required: true },
       rut: { type: String, required: true },
   },
   items: [
       [{ type: String, required: true }, { type: Number, required: true }]
   ]

});

module.exports = mongoose.model('Guias', GuiasSchema);