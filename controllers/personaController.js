var Persona = require('../models/persona');
var mongoose = require('mongoose');
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

// Display list of all persona
exports.persona_list = function(req, res, next) {
    Persona.find()
    .populate('persona')
    .exec(function (err, list_personas) {
      if (err) { return next(err); }
      // Successful, so render
      res.render('persona_list', { title: 'Listado de Personas', persona_list: list_personas });
    });
};

// Display detail page for a specific persona
exports.persona_detail = function(req, res, next) {
    Persona.findById(req.params.id)
    .populate('persona')
    .exec(function(err, personaBuscada) {
        if (err) { return next(err); }
        if (personaBuscada == null) { // No results.
            var err = new Error('Persona not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render
        res.render('persona_detail', { title: 'Persona:', persona: personaBuscada } );
    });
};

// Display persona create form on GET
exports.persona_create_get = function(req, res, next) {
    res.render('persona_form', { title: 'Agregar Persona'});
};

// Handle persona create on POST
exports.persona_create_post = function(req, res, next) {
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
           // Successful - redirect to new record.
           res.redirect(persona.id);
        });
};

// Display persona delete form on GET
exports.persona_delete_get = function(req, res, next) {
    Persona.findById(req.params.id).exec(
        function(err, personaBuscada){
            if (err) {return next(err);}
            if (personaBuscada == null){
                res.redirect('/main/personas');
            }
            res.render('persona_delete', { title: 'Eliminar Persona', persona: personaBuscada } );
        }   
    );
};

// Handle persona delete on POST
exports.persona_delete_post = function(req, res, next) {
    Persona.findById(req.body.id).exec(
        function(err, results){
            if (err) {return next(err);}
            else {
                Persona.findByIdAndRemove(req.body.personaid, function eleminarPersona(err){
                    if (err) { return next(err);}
                    res.redirect('/main/personas')
                })
            }
        }
    );
};

// Display persona update form on GET
exports.persona_update_get = function(req, res, next) {
    Persona.findById(req.params.id)
    .populate('persona')
    .exec(function(err, personaBuscada){
        if (err) { return next(err); }
        if (personaBuscada == null) { // No results.
            var err = new Error('Persona not found');
            err.status = 404;
            return next(err);
        }
        res.render('persona_form', { title: 'Actualizar Persona', personas:personaBuscada });
    }   
    );
};

// Handle persona update on POST
exports.persona_update_post = function(req, res, next) {
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
        res.redirect(lapersona.id);
    });
};

//controller for merkat
exports.api_persona_list = function(req, res){
    Persona.find()
    .populate('persona')
    .exec(function (err, list_personas) {
      if (err) { return next(err); }
      // Successful, so render
      //res.render('persona_list', { title: 'Listado de Personas', persona_list: list_personas });
      res.send(list_personas);
    });
};