var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');

var ReporteSchema = new Schema({

	//datos persona
	persona:{
		id: { type: Schema.Types.ObjectId, ref: 'Clientes' },
		nombre: { type: String, required: true },
		apellido: { type: String, required: true }
	},
	//datos cliente
	cliente:{
		id: { type: Schema.Types.ObjectId, ref: 'Clientes' },
		nombre: { type: String, required: true }
	},
	//datos obra
	obra:{
		id: { type: Schema.Types.ObjectId, ref: 'Obras' },
		nombre: { type: String, required:true },
		direccion: { type: String, required:true }
	},
	//informacion persona de contacto
	personaContacto:{
		id: { type: Schema.Types.ObjectId, ref: 'PersonaForanea' },
		nombre: { type: String, required:true },
		apellido: { type: String, required:true },
		telefono: { type: String, required:true },
		cargo: { type: String, required:true }
	},
	//informacion grua
	grua:{
		id: { type: Schema.Types.ObjectId, ref: 'Gruas'},
		marca: { type: String, required:true },
		modelo: { type: String, required:true },
		numeroSerie: { type: String, required:true },
	},

	//informacion report
	fecha: { type: Date, required:true },
	horaInicio: { type: Date, required:true },
	horaTermino: { type: Date, required:true },
	colacion: { type: Number, required:true },
	//AFIANZAMIENTO Y ALINEACON LASTRE BASAl
	aalb: { type: Boolean, required:true },
	//AFIANZAMIENTO Y ALINEACION CONTRAPESOS		
	aac: { type: Boolean, required:true },
	//PERDIDAS DE ACEITE CAJAS REDUCTORAS		
	pacr: { type: Boolean, required:true },
	//OPERACIÓN DE GRUA EN VACÍO	
	ogv: { type: Boolean, required:true },
	//LIMITADORES DE RECORRIDO Y GANCHO		
	lrg: { type: Boolean, required:true },
	//COMPROBAR EL ESTADO DE CABLES		
	cec: { type: Boolean, required:true },
	//COMPROBAR CIERRE SEGURIDAD GANCHO		
	ccsg: { type: Boolean, required:true },
	//ASA Y BRIDAS DE CAPACHOS	
	aybc: { type: Boolean, required:true },
	//SE CUENTA CON PRESENCIA DE SEÑALERO		
	ps: { type: Boolean, required:true },
	//SE ACTIVÓ  LIMITADOR DE CARGA O MOMENTO		
	lcm: { type: Boolean, required:true }
});

ReporteSchema.virtual('id').get(function(){
	return '/main/reporte/' + this._id;
});

ReporteSchema.virtual('fecha_formato').get(function(){
	return moment(this.fecha).format('MMMM Do, YYYY');
});

module.exports = mongoose.model('Reporte', ReporteSchema);