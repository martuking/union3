var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReparacionSchema = new Schema({
	//responsable de la reparacion
	fechaReparacion : { type: Date, required: true },
	personas:[{ type: Schema.Types.ObjectId, ref: 'Persona' }],
	//datos revisiones anteriores
	revisiones:[{ type: Schema.Types.ObjectId, ref: 'Revision' }],
	//datos cliente
	cliente:{ type: Schema.Types.ObjectId, ref: 'Cliente' },
	//datos obra
	obra:{ type: Schema.Types.ObjectId, ref: 'Obra' },
	//informacion persona de contacto
	personaContacto:{ type: Schema.Types.ObjectId, ref: 'PersonaForanea' },
	//informacion grua
	grua:{ type: Schema.Types.ObjectId, ref: 'Grua' },
	//datos montaje y revisiones anteriores
	montaje:{ type: Schema.Types.ObjectId, ref: 'Montaje' }
});

ReparacionSchema.virtual('id').get(function(){
	return '/main/reparacion/' + this._id;
});


module.exports = mongoose.model('Reparacion', ReparacionSchema);