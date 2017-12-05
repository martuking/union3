var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReparacionSchema = new Schema({
	//responsable de la reparacion
	fechaReparacion : { type: Date, required: true },
	encargado: { type: Schema.Types.ObjectId, ref: 'Persona' },
	ayudante: { type: Schema.Types.ObjectId, ref: 'Persona' },
	gruero: { type: Schema.Types.ObjectId, ref: 'Persona' },

	//datos cliente
	empresa: { type: String, required:true },
	obra: { type: String, required:true },
	direccion: { type: String, required:true },
	profesionalObra: { type: String, required:true },

	//informacion grua
	marca: { type: String, required:true },
	tipo: { type: String, required:true },
	modelo: { type: String, required:true },
	numero: { type: String, required:true },

	//datos montaje y revisiones anteriores
	fechaUltimoMontaje: { type: Date, required:true },
	numeroUltimoMontaje: {type: Schema.Types.ObjectId, ref: 'Montaje' },
	fechaUltimaMantencion: { type: Date, required:true },
	ultimaHojaRevision: { type: String, required:true },

	//




module.exports = mongoose.model('Reparacion', ReparacionSchema);