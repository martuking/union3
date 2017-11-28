#! /usr/bin/env node

console.log('This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb://your_username:your_password@your_dabase_url');

//Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

var async = require('async')
var Book = require('./models/personal')

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var personas = []

function createPerson(cod, apellido1, apellido2, nombre, rut, domicilio, cargo, dp, sexo, fechaNacimiento, fechaIngreso, sueldoBase, estadoCivil, estadoCivil, afp, cargas, inval, isapre, tramo, dosPorciento, gratificacion, montoPactado, porcentajeZona){

}