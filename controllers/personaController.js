var Persona = require('../models/persona');
var mongoose = require('mongoose');
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

//personaList
exports.personalist = function(req, res){
    Persona.find()
    .populate('persona')
    .exec(function (err, personasList) {
      if (err) { return next(err); };
      res.send(personasList);
    });
};

// PersonaShow
exports.personaShow = function(req, res, next) {
    Persona.findById(req.params.id)
    .populate('persona')
    .exec(function(err, personaBuscada) {
        if (err) { return next(err); }
        if (personaBuscada == null) { 
            var err = new Error('Persona not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render
        res.send(personaBuscada);
    });
};

// PersonaNew
exports.personaNew = function(req, res, next) {
    res.render('persona_form', { title: 'Agregar Persona'});
};

// PersonaEdit
exports.personaEdit = function(req, res, next) {
    Persona.findById(req.params.id)
    .populate('persona')
    .exec(function(err, PersonaBuscada){
        if (err) { return next(err); }
        if (PersonaBuscada == null) { // No results.
            var err = new Error('Persona not found');
            err.status = 404;
            return next(err);
        }
        res.render('persona_form', { title: 'Actualizar Persona', personas:PersonaBuscada });
    }   
    );
};


// PersonaCreate
exports.personaCreate = function(req, res, next) {
    var persona = new Persona(
        {
            cod: req.body.cod,
            apellido1: req.body.apellido1,
            apellido2: req.body.apellido2,
            nombre: req.body.nombre,
            rut: req.body.rut,
            domicilio: req.body.domicilio,
            cargo: req.body.cargo,
            dp: req.body.dp,
            sexo: req.body.sexo,
            fechaNacimiento: req.body.fechaNacimiento,
            fechaIngreso: req.body.fechaIngreso,
            sueldoBase: req.body.sueldoBase,
            estadoCivil: req.body.estadoCivil,
            porcentajeCom: req.body.porcentajeCom,
            afp: req.body.afp,
            cargas: req.body.cargas,
            inval: req.body.inval,
            isapre: req.body.isapre,
            tramo: req.body.tramo,
            dosPorciento: req.body.dosPorciento,
            gratificacion: req.body.gratificacion,
            montoPactado: req.body.montoPactado,
            porcentajeZona: req.body.porcentajeZona
        }   
    )
    persona.save(function (err) {
        if (err) { return next(err); }
        });
        res.send(persona);
};


// PersonaDelete
exports.personaDelete = function(req, res, next) {
    Persona.findById(req.body.id).exec(
        function(err, results){
            if (err) {return next(err);}
            else {
                Persona.findByIdAndRemove(req.body.personaid, function eleminarPersona(err){
                    if (err) { return next(err);}
                    res.send("persona eliminada id: ", req.body.id);
                });
            }
        }
    );
};


// PersonaUpdate
exports.personaUpdate = function(req, res, next) {
    var persona = new Persona(
        {
            cod: req.body.cod,
            apellido1: req.body.apellido1,
            apellido2: req.body.apellido2,
            nombre: req.body.nombre,
            rut: req.body.rut,
            domicilio: req.body.domicilio,
            cargo: req.body.cargo,
            dp: req.body.dp,
            sexo: req.body.sexo,
            fechaNacimiento: req.body.fechaNacimiento,
            fechaIngreso: req.body.fechaIngreso,
            sueldoBase: req.body.sueldoBase,
            estadoCivil: req.body.estadoCivil,
            porcentajeCom: req.body.porcentajeCom,
            afp: req.body.afp,
            cargas: req.body.cargas,
            inval: req.body.inval,
            isapre: req.body.isapre,
            tramo: req.body.tramo,
            dosPorciento: req.body.dosPorciento,
            gratificacion: req.body.gratificacion,
            montoPactado: req.body.montoPactado,
            porcentajeZona: req.body.porcentajeZona,
            _id:req.params.id
        }   
    );
    Persona.findByIdAndUpdate(req.params.id, persona, function(err, lapersona){
        if (err) { return next(err); }
    });
};
