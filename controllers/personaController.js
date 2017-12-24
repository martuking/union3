var persona = require('../models/persona');

// Display list of all personas
exports.persona_list = function(req, res) {
    res.send('NOT IMPLEMENTED: persona list');
};

// Display detail page for a specific persona
exports.persona_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: persona detail: ' + req.params.id);
};

// Display persona create form on GET
exports.persona_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: persona create GET');
};

// Handle persona create on POST
exports.persona_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: persona create POST');
};

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