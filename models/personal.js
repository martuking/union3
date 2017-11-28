var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonalSchema = new Schema({
	cod : {type: String, required: true},
	apellido1 : {type: String, required: true},
	apellido2 : {type: String, required: true},
	nombre : {type: String, required: true},
	rut : {type: Number, required: true},
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
	inval : {type: Boolean, required: true},
	isapre : {type: String, required: true},
	tramo : {type: Number, required: true},
	dosPorciento : {type: Boolean, required: true},
	gratificacion : {type: Boolean, required: true},
	montoPactado : {type: Number, required: true},
	porcentajeZona : {type: Boolean, required: true}
});

PersonalSchema.virtual('nombre').get(function(){
	return this.nombre + ' '+ this.apellido1 + ' ' + this.apellido2;
});

PersonalSchema.virtual('_id').get(function(){
	return this._id;
});