var pruebaLimitadores = require('../models/pruebaLimitadores');
var montaje = require('../models/montaje');
var persona = require('../models/persona');
var reparacion = require('../models/reparacion');
var reporte = require('../models/reporte');
var revision = require('../models/revision');
var adquisicion = require('../models/adquisicion');
var cliente = require('../models/cliente');
var contrato = require('../models/contrato');
var grua = require('../models/grua');
var guiaDespacho = require('../models/guiaDespacho');
var obra = require('../models/obra');
var oferta = require('../models/oferta');
var ordenCompra = require('../models/ordenCompra');
var oficina = require('../models/oficina');
var personaForanea = require('../models/personaForanea');

var async = require('async');

exports.index = function(req, res) {   
    
    async.parallel({
        pruebaLimitadoresCount: function(callback) {
            pruebaLimitadores.count(callback);
        },
        montajeCount: function(callback) {
            montaje.count(callback);
        },
        personaCount: function(callback) {
            persona.count(callback);
        },
        reparacionCount: function(callback) {
            reparacion.count(callback);
        },
        reporteCount: function(callback) {
            reporte.count(callback);
        },
        revisionCount: function(callback){
            revision.count(callback);
        },
        adquisicionCount: function(callback){
            adquisicion.count(callback);
        },
        clienteCount: function(callback){
            cliente.count(callback);
        },
        contratoCount: function(callback){
            contrato.count(callback);
        },
        gruaCount: function(callback){
            grua.count(callback);
        },
        guiaDespachoCount: function(callback){
            guiaDespacho.count(callback);
        },
        obraCount: function(callback){
            obra.count(callback);
        },
        ofertaCount: function(callback){
            oferta.count(callback);
        },
        ordenCompraCount: function(callback){
            ordenCompra.count(callback);
        },
        oficinaCount: function(callback){
            oficina.count(callback);
        },
        personaForaneaCount: function(callback){
            personaForanea.count(callback);
        }
    }, function(err, results) {
        res.render('index', {title:'Union App', error: err, data: results });
    });
};
