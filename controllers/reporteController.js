var Reporte = require('../models/reporte');

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