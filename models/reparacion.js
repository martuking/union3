var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReparacionSchema = new Schema({
	//responsable de la reparacion
	fechaReparacion : { type: Date, required: true },
	encargado: { type: Schema.Types.ObjectId, ref: 'Personas' },
	ayudante: { type: Schema.Types.ObjectId, ref: 'Personas' },
	gruero: { type: Schema.Types.ObjectId, ref: 'Personas' },

	//datos cliente
	clientes_id: { type: Schema.Types.ObjectId, ref: 'Clientes' },
	clientes_nombre: { type: String, required:true },
	obras_id: { type: Schema.Types.ObjectId, ref: 'Obras' },
	obras_nombre: { type: String, required:true },
	obras_ubicacion: { type: String, required:true },
	obras_contacto: { type: String, required:true },

	//informacion grua
	gruas_id: { type: Schema.Types.ObjectId, ref: 'Gruas' },
	gruas_marca: { type: String, required:true },
	gruas_modelo: { type: String, required:true },
	gruas_numero_serie: { type: String, required:true },

	//datos montaje y revisiones anteriores
	fechaMontaje: { type: Date, required:true },
	montajes_id: {type: Schema.Types.ObjectId, ref: 'Montajes' },
	fechaUltimaMantencion: { type: Date, required:true },
	revisiones_id: { type: Schema.Types.ObjectId, ref: 'Revisiones' }
});

ReparacionSchema.virtual('id').get(function(){
	return '/main/reparacion/' + this._id;
});


module.exports = mongoose.model('Reparaciones', ReparacionSchema);