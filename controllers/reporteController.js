var Reporte = require('../models/reporte');
var mongoose = require('mongoose');

// Display list of all reportes
exports.reporteList = function(req, res) {
    Reporte.find({},'empresa obra').exec(function(err,reportesList){
    	if(err){return next(err);}
    	res.send(reportesList);
    })
};

// Display detail page for a specific reporte
exports.reporteShow = function(req, res) {
    Reporte.findById(req.params.id)
    .populate('reporte')
    .exec(function(err, reporteBuscado) {
        if (err) { return next(err); }
        if (reporteBuscado==null) { // No results.
            var err = new Error('Reporte not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render
        res.send(reporteBuscado);
    });
};

// Display reporte create form on GET
exports.reporteNew = function(req, res) {
    res.render('reporte_form', { title: 'Agregar Reporte'});
};

// Handle reporte create on POST
exports.reporteCreate = function(req, res) {
    var reporte = new Reporte(
        {
            fecha: req.body.fecha,
            horaInicio: req.body.horaInicio,
            horaTermino: req.body.horaTermino,
            colacion: req.body.colacion,
            aalb: req.body.aalb,
            aac: req.body.aac,
            pacr: req.body.pacr,
            ogv: req.body.ogv,
            lrg: req.body.lrg,
            cec: req.body.cec,
            ccsg: req.body.ccsg,
            aybc: req.body.aybc,
            ps: req.body.ps,
            lcm: req.body.lcm
        }   
    )
    reporte.save(function (err) {
        if (err) { return next(err); }
           // Successful - redirect to new record.
           res.send(reporte);
        });
};

// Handle reporte delete on POST
exports.reporteDelete = function(req, res) {
    Reporte.findById(req.body.id).exec(
        function(err, results){
            if (err) {return next(err);}
            else {
                Reporte.findByIdAndRemove(req.body.reporteid, function eleminarReporte(err){
                    if (err) { return next(err);}
                    res.send("eliminado el reporte", req.body.id);
                })
            }
        }
    )
};

// Display reporte update form on GET
exports.reporteEdit = function(req, res) {
    Reporte.findById(req.params.id)
    .populate('reporte')
    .exec(function(err, reporteBuscado){
        if (err) { return next(err); }
        if (reporteBuscado == null) { // No results.
            var err = new Error('Reporte not found');
            err.status = 404;
            return next(err);
        }
        res.render('reporte_form', { title: 'Actualizar Reporte', reportes:reporteBuscado });
    }   
    );
};

// Handle reporte update on POST
exports.reporteUpdate = function(req, res) {
    var reporte = new Reporte(
        {
            fecha: req.body.fecha,
            horaInicio: req.body.horaInicio,
            horaTermino: req.body.horaTermino,
            colacion: req.body.colacion,
            aalb: req.body.aalb,
            aac: req.body.aac,
            pacr: req.body.pacr,
            ogv: req.body.ogv,
            lrg: req.body.lrg,
            cec: req.body.cec,
            ccsg: req.body.ccsg,
            aybc: req.body.aybc,
            ps: req.body.ps,
            lcm: req.body.lcm,
            _id:req.params.id
        }   
    )
    Reporte.findByIdAndUpdate(req.params.id, reporte, function(err, elreporte){
        if (err) { return next(err); }
        res.send(elreporte);
    })
};