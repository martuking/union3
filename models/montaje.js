var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MontajeSchema = new Schema({
	
	//datos de las personas que fueron al montaje
	personas:[{ type: Schema.Types.ObjectId, ref: 'Persona' }],
	//datos cliente
	cliente:{type: Schema.Types.ObjectId, ref: 'Cliente'},
	//datos obra
	obra:{ type: Schema.Types.ObjectId, ref: 'Obra' },
	//persona de contacto en la obra
	personasContacto:[{ type: Schema.Types.ObjectId, ref: 'PersonaForanea'}],
	//informacion grua:
	grua:{ type: Schema.Types.ObjectId, ref: 'Grua' },
	//informacion emplazamiento e instalacion electrica
	areaTrabajo: {type: Boolean,required:true},
	fundaciones: {type: Boolean,required:true},
	lastresYcontrapesos: {type: Boolean,required:true},
	instalacionesElectricas: {type: Boolean,required:true},
	//datos montaje y puesta en marcha
	fechaInstalacion : {type: Date, required: true},
	//emplazamiento de la grua
	eLibreMinAncho: {type: Number,required:true},
	eLibreMinAltura: {type: Number,required:true},
	distTendidoElec: {type: Number,required:true},
	tension: {type: Number,required:true},
	distanciaEntreGruas: {type: Number,required:true},
	alturaMontajeUt: {type: Number,required:true},
	alturaMontajefinal: {type: Number,required:true},
	longitudPluma: {type: Number,required:true},
	longitudContraPluma: {type: Number,required:true},
	contrapesoPluma: {type: Number,required:true},
	lastresBasales : {type: Number,required:true},

	//programa de arriostramiento
	pArroTramo: {type: Number,required:true},
	pArroAlt: {type: Number,required:true},
	pArroCumplir: {type: Number,required:true},
	sArroTramo: {type: Number,required:true},
	sArroAlt: {type: Number,required:true},
	sArroCumplir: {type: Number,required:true},
	tArroTramo: {type: Number,required:true},
	tArroAlt: {type: Number,required:true},
	tArroCumplir: {type: Number,required:true}
});

MontajeSchema.virtual('id').get(function(){
	return '/main/montaje/' + this._id;
});


module.exports = mongoose.model('Montaje', MontajeSchema);