var limitadores = require('../models/limitadores');
var montaje = require('../models/montaje');
var persona = require('../models/persona');
var reparacion = require('../models/reparacion');
var reporte = require('../models/reporte');
var revision = require('../models/revision');

var async = require('async');

exports.index = function(req, res) {   
    
    async.parallel({
        limitadores_count: function(callback) {
            limitadores.count(callback);
        },
        montaje_count: function(callback) {
            montaje.count(callback);
        },
        persona_count: function(callback) {
            persona.count(callback);
        },
        reparacion_count: function(callback) {
            reparacion.count(callback);
        },
        reporte_count: function(callback) {
            reporte.count(callback);
        },
        revision_count: function(callback){
            revision.count(callback);
        }
    }, function(err, results) {
        res.render('index', {title:'Union App', error: err, data: results });
    });
};
