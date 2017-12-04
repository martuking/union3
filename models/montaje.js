var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MontajeSchema = new Schema({
	
	//datos montaje y puesta en marcha
	fechaInstalacion : {type: Date, required: true},
	profesionalCargo: {typye: String,required:true},
	jefeMontaje: {typye: String,required:true},
	primerAyudanteMontaje: {typye: String,required:true},
	segundoAyudanteMontaje: {typye: String,required:true},
	
	//datos cliente
	empresa: {typye: String,required:true},
	obra: {typye: String,required:true},
	direccion: {typye: String,required:true},
	profesionalObra: {typye: String,required:true},

	//informacion grua:
	marca: {typye: String,required:true},
	tipo: {typye: String,required:true},
	modelo: {typye: String,required:true},
	numero: {typye: String,required:true},

	//informacion emplazamiento e instalacion electrica
	areaTrabajo: {typye: Boolean,required:true},
	fundaciones: {typye: Boolean,required:true},
	lastresYcontrapesos {typye: Boolean,required:true},
	instalacionesElectricas: {typye: Boolean,required:true},

	//emplazamiento de la grua
	eLibreMinAncho: {typye: Number,required:true},
	eLibreMinAltura: {typye: Number,required:true},
	distTendidoElec: {typye: Number,required:true},
	tension: eLibreMinAncho: {typye: Number,required:true},
	distanciaEntreGruas: eLibreMinAncho: {typye: Number,required:true},
	alturaMontajeUt: {typye: Number,required:true},
	alturaMontajefinal: {typye: Number,required:true},
	longitudPluma: {typye: Number,required:true},
	longitudContraPluma: {typye: Number,required:true},
	contrapesoPluma: {typye: Number,required:true},
	lastresBasales : {typye: Number,required:true},

	//programa de arriostramiento
	pArroTramo: {typye: Number,required:true},
	pArroAlt: {typye: Number,required:true},
	pArroCumplir: {typye: Number,required:true},
	sArroTramo: {typye: Number,required:true},
	sArroAlt: {typye: Number,required:true},
	sArroCumplir: {typye: Number,required:true},
	tArroTramo: {typye: Number,required:true},
	tArroAlt: {typye: Number,required:true},
	tArroCumplir: {typye: Number,required:true},
});


module.exports = mongoose.model('Montaje', MontajeSchema);