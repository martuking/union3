var montaje = require('../models/montaje');

// Display list of all montajes
exports.montaje_list = function(req, res) {
    montaje.find({},'obra fechaInstalacion').exec(function(err,list_montajes){
    	if(err){return next(err);}
    	res.render('montaje_list',{title: 'Listado montajes', montaje_list:list_montajes});
    })
};

// Display detail page for a specific montaje
exports.montaje_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: montaje detail: ' + req.params.id);
};

// Display montaje create form on GET
exports.montaje_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: montaje create GET');
};

// Handle montaje create on POST
exports.montaje_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: montaje create POST');
};

// Display montaje delete form on GET
exports.montaje_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: montaje delete GET');
};

// Handle montaje delete on POST
exports.montaje_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: montaje delete POST');
};

// Display montaje update form on GET
exports.montaje_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: montaje update GET');
};

// Handle montaje update on POST
exports.montaje_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: montaje update POST');
};