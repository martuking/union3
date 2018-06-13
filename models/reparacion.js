var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReparacionSchema = new Schema({
	//responsable de la reparacion
	fechaReparacion : { type: Date, required: true },
	personas:[
		{
			id: { type: Schema.Types.ObjectId, ref: 'Persona' },
			detalle: {
				nombre: { type: String, required:true },
				apellido: { type: String, required:true },
				cargo: { type: String, required:true }
			}  
		}
	],
	//datos revisiones anteriores
	revisiones:[
		{
			id: { type: Schema.Types.ObjectId, ref: 'Revisiones' }
		}
	],
	//datos cliente
	cliente:{
		id: { type: Schema.Types.ObjectId, ref: 'Clientes' },
		nombre: { type: String, required:true }
	},
	//datos obra
	obra:{
		id: { type: Schema.Types.ObjectId, ref: 'Obras' },
		nombre: { type: String, required:true },
		ubicacion: { type: String, required:true },
		contacto: { type: String, required:true }
	},
	//informacion grua
	grua:{
		id: { type: Schema.Types.ObjectId, ref: 'Gruas' },
		marca: { type: String, required:true },
		modelo: { type: String, required:true },
		numeroSerie: { type: String, required:true }
	},
	//datos montaje y revisiones anteriores
	montaje:{
		id: {type: Schema.Types.ObjectId, ref: 'Montajes' },
		fechaMontaje: { type: Date, required:true },
		fechaUltimaMantencion: { type: Date, required:true }
	}
});

ReparacionSchema.virtual('id').get(function(){
	return '/main/reparacion/' + this._id;
});


module.exports = mongoose.model('Reparacion', ReparacionSchema);