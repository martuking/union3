var reparacion = require('../models/reparacion');

// Display list of all reparacions
exports.reparacion_list = function(req, res) {
    reparacion.find({},'obra fechaReparacion').exec(function(err,list_reparaciones){
    	if(err){return next(err);}
    	res.render('reparacion_list',{title: 'Listado de Reparaciones', reparacion_list:list_reparaciones});
    })
};

// Display detail page for a specific reparacion
exports.reparacion_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: reparacion detail: ' + req.params.id);
};

// Display reparacion create form on GET
exports.reparacion_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: reparacion create GET');
};

// Handle reparacion create on POST
exports.reparacion_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: reparacion create POST');
};

// Display reparacion delete form on GET
exports.reparacion_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: reparacion delete GET');
};

// Handle reparacion delete on POST
exports.reparacion_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: reparacion delete POST');
};

// Display reparacion update form on GET
exports.reparacion_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: reparacion update GET');
};

// Handle reparacion update on POST
exports.reparacion_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: reparacion update POST');
};