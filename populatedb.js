#! /usr/bin/env node

console.log('This script populates persons to your database. Specified database as argument - e.g.: populatedb mongodb://your_username:your_password@your_dabase_url');

//Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

//var async = require('async')
var persona = require('./models/persona')
var reporte = require('./models/reporte')

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var personas = []
var reportes = []

function createPerson(cod, apellido1, apellido2, nombre, rut, domicilio, cargo, dp, sexo, fechaNacimiento, fechaIngreso, sueldoBase, estadoCivil, porcentajeCom, afp, cargas, inval, isapre, tramo, dosPorciento, gratificacion, montoPactado, porcentajeZona,cb){
	personDetail = {
		cod : cod,
		apellido1 : apellido1,
		apellido2 : apellido2,
		nombre : nombre,
		rut : rut,
		domicilio : domicilio,
		cargo : cargo,
		dp : dp,
		sexo : sexo,
		fechaNacimiento : fechaNacimiento,
		fechaIngreso : fechaIngreso,
		sueldoBase : sueldoBase,
		estadoCivil : estadoCivil,
		porcentajeCom : porcentajeCom,
		afp : afp,
		cargas : cargas,
		inval : inval,
		isapre : isapre,
		tramo : tramo,
		dosPorciento : dosPorciento,
		gratificacion : gratificacion,
		montoPactado : montoPactado,
		porcentajeZona : porcentajeZona
	}

	var persona = new persona(personDetail);
	persona.save(function(err){
		if (err){
			cb(err,null)
			return
		}
		console.log('Nueva persona: '+persona);
		personas.push(persona)
		cb(null, persona)
	});
}

function createReport(empresa, obra, direccion, profesionalObra, marca, tipo, modelo, numero, fecha, horaInicio, horaTermino, colacion, aalb, aac, pacr, ogv, lrg, cec, ccsg, aybc, ps, lcm){
	reportDetail = {
		empresa : empresa,
		obra : obra,
		direccion : direccion,
		profesionalObra : profesionalObra,
		marca : marca,
		tipo : tipo,
		modelo : modelo,
		numero : numero,
		fecha : fecha,
		horaInicio : horaInicio,
		horaTermino : horaTermino,
		colacion : colacion,
		aalb : aalb,
		aac : aac,
		pacr : pacr,
		ogv : ogv,
		lrg : lrg,
		cec : cec,
		ccsg : ccsg,
		aybc : aybc,
		ps : ps,
		lcm : lcm
	}

	var reporte = new reporte(reportDetail);
	reporte.save(function(err){
		if (err){
			cb(err,null)
			return
		}
		console.log('Nuevo reporte: '+reporte);
		reportes.push(reporte)
		cb(null, reporte)
	});
}

//createPerson(123,'Schmidt','Fernandez','Martin',177008087,'Pocuro','Asesor','01','M','1991-03-18','2012-12-01',850000,'Soltero',0,'Modelo',0,false,'Cruz Blanca',1,false,true,2.91,false);
createReport('Ingevec S.A.', 'Ibis', 'Manuel Montt 252', 'Mauricio Badawy', 'Jaso', 'Torre', 'J47NS', '0118', '2018-02-06', '2018-02-06T09:00:00', '2018-02-06T18:00:00', 1, true, true, true, true, true, true, true, true, true, true);