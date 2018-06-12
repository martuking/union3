var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');

var PersonaSchema = new Schema({
	cod : {type: String, required: true},
	apellido1 : {type: String, required: true},
	apellido2 : {type: String, required: true},
	nombre : {type: String, required: true},
	rut : {type: String, required: true},
	domicilio : {type: String, required: true},
	cargo : {type: String, required: true},
	dp : {type: Number, required: true},
	sexo : {type: String, required: true},
	fechaNacimiento : {type: Date, required: true},
	fechaIngreso : {type: Date, required: true},
	sueldoBase : {type: Number, required: true},
	estadoCivil : {type: String, required: true},
	porcentajeCom: {type: Number, required: true},
	afp : {type: String, required: true},
	cargas : {type: Number, required: true},
	inval : {type: Boolean},
	isapre : {type: String, required: true},
	tramo : {type: Number, required: true},
	dosPorciento : {type: Boolean},
	gratificacion : {type: Boolean},
	montoPactado : {type: Number, required: true},
	porcentajeZona : {type: Boolean}
});

PersonaSchema.virtual('id').get(function(){
	return '/main/persona/' + this._id;
});

PersonaSchema.virtual('fecha_nacimiento_formato').get(function(){
	return moment(this.fechaNacimiento).format('MMMM Do, YYYY');
});

PersonaSchema.virtual('fecha_ingreso_formato').get(function(){
	return moment(this.fechaIngreso).format('MMMM Do, YYYY');
});


module.exports = mongoose.model('Personas', PersonaSchema);