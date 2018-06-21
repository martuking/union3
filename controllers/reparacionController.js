var Reparacion = require('../models/reparacion');

// Display list of all reparacions
exports.reparacionList = function(req, res) {
    Reparacion.find({},'obra fechaReparacion').exec(function(err,reparacionesList){
    	if(err){return next(err);}
    	res.send(reparacionesList);
    })
};

// Display detail page for a specific reparacion
exports.reparacionShow = function(req, res) {
    Reparacion.findById(req.params.id)
    .populate('reparacion')
    .exec(function(err, reparacionBuscada) {
        if (err) { return next(err); }
        if (reparacionBuscada == null) { // No results.
            var err = new Error('Reparacion not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render
        res.send(reparacionBuscada);
    });
};

// Display reparacion create form on GET
exports.reparacionNew = function(req, res) {
    res.render('reparacion_form', { title: 'Agregar Reparacion'});
};

// Handle reparacion create on POST
exports.reparacionCreate = function(req, res) {
    var reparacion = new Reparacion(
        {
            fechaReparacion: req.body.fechaReparacion
        }   
    )
    reparacion.save(function (err) {
        if (err) { return next(err); }
           // Successful - redirect to new record.
           res.send(reparacion);
        });
};

// Handle reparacion delete on POST
exports.reparacionDelete = function(req, res) {
    Reparacion.findById(req.body.id).exec(
        function(err, results){
            if (err) {return next(err);}
            else {
                Reparacion.findByIdAndRemove(req.body.reparacionid, function eleminarReparacion(err){
                    if (err) { return next(err);}
                    res.send("eliminada reparacion ", req.body.id);
                })
            }
        }
    )
};

// Display reparacion update form on GET
exports.reparacionEdit = function(req, res) {
    Reparacion.findById(req.params.id)
    .populate('reparacion')
    .exec(function(err, reparacionBuscada){
        if (err) { return next(err); }
        if (reparacionBuscada == null) { // No results.
            var err = new Error('Reparacion not found');
            err.status = 404;
            return next(err);
        }
        res.render('reparacion_form', { title: 'Actualizar Reparacion', reparaciones:reparacionBuscada });
    }   
    );
};

// Handle reparacion update on POST
exports.reparacionUpdate = function(req, res) {
    var reparacion = new Reparacion(
        {
            fechaReparacion: req.body.fechaReparacion,
            _id:req.params.id
        }   
    )
    Reparacion.findByIdAndUpdate(req.params.id, reparacion, function(err, lareparacion){
        if (err) { return next(err); }
        res.send(lareparacion);
    })
};