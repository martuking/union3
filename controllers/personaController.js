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
      //res.send(list_personas);
    });
};

// Display detail page for a specific persona
exports.persona_detail = function(req, res, next) {
    Persona.findById(req.params.id)
    .populate('persona')
    .exec(function(err, personaBuscada) {
        if (err) { return next(err); }
        if (personaBuscada==null) { // No results.
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
/*exports.persona_create_post = function(req, res) {
    body('cod').isLength({ min: 1 }).trim().isAlphanumeric,
    body('apellido1').isLength({ min: 1 }).trim().isAlphanumeric(),
    body('apellido2').isLength({ min: 1 }).trim().withMessage.isAlphanumeric().,
    body('nombre').isLength({ min: 1 }).trim().isAlphanumeric(),
    body('rut').isLength({ min: 1 }).trim().isAlphanumeric,
    body('domicilio').isLength({ min: 1 }).trim().isAlphanumeric.,
    body('cargo').isLength({ min: 1 }).trim().isAlphanumeric(),
    body('dp').isLength({ min: 1 }).trim().isAlphanumeric().withMessage('DP es un numero'),
    body('cargo').isLength({ min: 1 }).trim().isAlphanumeric(),
    body('sexo').isLength({ min: 1 }).trim().isAlphanumeric(),
    body('fechaNacimiento').optional({ checkFalsy: true }).isISO8601(),
    body('fechaIngreso').optional({ checkFalsy: true }).isISO8601(),
    body('sueldoBase').isLength({ min: 1 }).trim().isAlphanumeric(),
    body('estadoCivil').isLength({ min: 1 }).trim().isAlphanumeric(),
    body('porcentaCom').isLength({ min: 1 }).trim().isAlphanumeric(),
    body('afp').isLength({ min: 1 }).trim().isAlphanumeric(),
};*/

// Display persona delete form on GET
exports.persona_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: persona delete GET');
};

// Handle persona delete on POST
exports.persona_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: persona delete POST');
};

// Display persona update form on GET
exports.persona_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: persona update GET');
};

// Handle persona update on POST
exports.persona_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: persona update POST');
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