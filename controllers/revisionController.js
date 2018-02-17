var revision = require('../models/revision');

// Display list of all revisions
exports.revision_list = function(req, res) {
    revision.find({},'obra fechaInspeccion').exec(function(err,list_revisiones){
    	if(err){return next(err);}
    	res.render('revision_list',{title: 'Listado revisionl', revision_list:list_revisiones});
    })
};

// Display detail page for a specific revision
exports.revision_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: revision detail: ' + req.params.id);
};

// Display revision create form on GET
exports.revision_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: revision create GET');
};

// Handle revision create on POST
exports.revision_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: revision create POST');
};

// Display revision delete form on GET
exports.revision_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: revision delete GET');
};

// Handle revision delete on POST
exports.revision_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: revision delete POST');
};

// Display revision update form on GET
exports.revision_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: revision update GET');
};

// Handle revision update on POST
exports.revision_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: revision update POST');
};