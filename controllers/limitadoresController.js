var Limitadores = require('../models/limitadores');

// Display list of all limitadoress
exports.limitadores_list = function(req, res) {
    Limitadores.find({},'fechaPrueba obra').exec(function(err,list_limitadores){
    	if(err){return next(err);}
    	res.render('limitadores_list',{title: 'Listado de Pruebas Limitadores', limitadores_list:list_limitadores});
    });
};

// Display detail page for a specific limitadores
exports.limitadores_detail = function(req, res) {
    Limitadores.findById(req.params.id)
    .populate('limitadores')
    .exec(function(err, limitadoresBuscada) {
        if (err) { return next(err); }
        if (limitadoresBuscada == null) { // No results.
            var err = new Error('Limitadores not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render
        res.render('limitadores_detail', { title: 'Prueba de Limitadores:', limitadores: limitadoresBuscada } );
    });
};

// Display limitadores create form on GET
exports.limitadores_create_get = function(req, res) {
    res.render('limitadores_form', { title: 'Agregar Prueba de Limitadores'});
};

// Handle limitadores create on POST
exports.limitadores_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: limitadores create POST');
};

// Display limitadores delete form on GET
exports.limitadores_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: limitadores delete GET');
};

// Handle limitadores delete on POST
exports.limitadores_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: limitadores delete POST');
};

// Display limitadores update form on GET
exports.limitadores_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: limitadores update GET');
};

// Handle limitadores update on POST
exports.limitadores_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: limitadores update POST');
};