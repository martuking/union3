var reporte = require('../models/reporte');

// Display list of all reportes
exports.reporte_list = function(req, res) {
    reporte.find({},'empresa obra').exec(function(err,list_reportes){
    	if(err){return next(err);}
    	res.render('reporte_list',{title: 'Listado Reportes', reporte_list:list_reportes});
    })
};

// Display detail page for a specific reporte
exports.reporte_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: reporte detail: ' + req.params.id);
};

// Display reporte create form on GET
exports.reporte_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: reporte create GET');
};

// Handle reporte create on POST
exports.reporte_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: reporte create POST');
};

// Display reporte delete form on GET
exports.reporte_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: reporte delete GET');
};

// Handle reporte delete on POST
exports.reporte_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: reporte delete POST');
};

// Display reporte update form on GET
exports.reporte_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: reporte update GET');
};

// Handle reporte update on POST
exports.reporte_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: reporte update POST');
};