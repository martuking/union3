var Reporte = require('../models/reporte');
var mongoose = require('mongoose');

// Display list of all reportes
exports.reporte_list = function(req, res) {
    Reporte.find({},'empresa obra').exec(function(err,list_reportes){
    	if(err){return next(err);}
    	res.render('reporte_list',{title: 'Listado de Reportes', reporte_list:list_reportes});
    })
};

// Display detail page for a specific reporte
exports.reporte_detail = function(req, res) {
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
        res.render('reporte_detail', { title: 'Reporte:', reporte: reporteBuscado } );
    });
};

// Display reporte create form on GET
exports.reporte_create_get = function(req, res) {
    res.render('reporte_form', { title: 'Agregar Reporte'});
};

// Handle reporte create on POST
exports.reporte_create_post = function(req, res) {
    var reporte = new Reporte(
        {
            empresa: req.body.empresa,
            obra: req.body.obra,
            direccion: req.body.direccion,
            profesionalObra: req.body.profesionalObra,
            marca: req.body.marca,
            tipo: req.body.tipo,
            modelo: req.body.modelo,
            numero: req.body.numero,
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
           res.redirect(reporte.id);
        });
};

// Display reporte delete form on GET
exports.reporte_delete_get = function(req, res) {
    Reporte.findById(req.params.id).exec(
        function(err, reporteBuscado){
            if (err) {return next(err);}
            if (reporteBuscado == null){
                res.redirect('/main/reportes');
            }
            res.render('reporte_delete', { title: 'Eliminar Reporte', reporte: reporteBuscado } );
        }   
    )
};

// Handle reporte delete on POST
exports.reporte_delete_post = function(req, res) {
    Reporte.findById(req.body.id).exec(
        function(err, results){
            if (err) {return next(err);}
            else {
                Reporte.findByIdAndRemove(req.body.reporteid, function eleminarReporte(err){
                    if (err) { return next(err);}
                    res.redirect('/main/reportes')
                })
            }
        }
    )
};

// Display reporte update form on GET
exports.reporte_update_get = function(req, res) {
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
exports.reporte_update_post = function(req, res) {
    var reporte = new Reporte(
        {
            empresa: req.body.empresa,
            obra: req.body.obra,
            direccion: req.body.direccion,
            profesionalObra: req.body.profesionalObra,
            marca: req.body.marca,
            tipo: req.body.tipo,
            modelo: req.body.modelo,
            numero: req.body.numero,
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
        res.redirect(elreporte.id)
    })
};