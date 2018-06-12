var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MontajeSchema = new Schema({
	
	//datos montaje y puesta en marcha
	fechaInstalacion : {type: Date, required: true},
	profesionalCargo: {type: String, required: true},
	jefeMontaje: { type: Schema.Types.ObjectId, ref: 'Personas' },
	primerAyudanteMontaje: { type: Schema.Types.ObjectId, ref: 'Personas' },
	segundoAyudanteMontaje: { type: Schema.Types.ObjectId, ref: 'Personas' },
	
	//datos cliente
	clientes_id: { type: Schema.Types.ObjectId, ref: 'Clientes'},
	clientes_nombre: {type: String,required:true},
	obras_id: { type: Schema.Types.ObjectId, ref: 'Obras'},
	obras_nombre: {type: String,required:true},
	obras_ubicacion: {type: String,required:true},
	obras_contacto: {type: String,required:true},

	//informacion grua:
	gruas_id : { type: Schema.Types.ObjectId, ref: 'Gruas'},
	gruas_marca: {type: String,required:true},
	gruas_modelo: {type: String,required:true},
	gruas_numero_serie: {type: String,required:true},

	//informacion emplazamiento e instalacion electrica
	areaTrabajo: {type: Boolean,required:true},
	fundaciones: {type: Boolean,required:true},
	lastresYcontrapesos: {type: Boolean,required:true},
	instalacionesElectricas: {type: Boolean,required:true},

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


module.exports = mongoose.model('Montajes', MontajeSchema);