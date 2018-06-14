var Reparaciones = require('../models/reparacion');

// Display list of all reparacions
exports.reparacion_list = function(req, res) {
    Reparaciones.find({},'obra fechaReparacion').exec(function(err,list_reparaciones){
    	if(err){return next(err);}
    	res.render('reparacion_list',{title: 'Listado de Reparaciones', reparacion_list:list_reparaciones});
    })
};

// Display detail page for a specific reparacion
exports.reparacion_detail = function(req, res) {
    Reparaciones.findById(req.params.id)
    .populate('reparacion')
    .exec(function(err, reparacionBuscada) {
        if (err) { return next(err); }
        if (reparacionBuscada == null) { // No results.
            var err = new Error('Reparaciones not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render
        res.render('reparacion_detail', { title: 'Reparaciones:', reparacion: reparacionBuscada } );
    });
};

// Display reparacion create form on GET
exports.reparacion_create_get = function(req, res) {
    res.render('reparacion_form', { title: 'Agregar Reparaciones'});
};

// Handle reparacion create on POST
exports.reparacion_create_post = function(req, res) {
    var reparacion = new Reparaciones(
        {
            fechaReparacion: req.body.fechaReparacion,
            encargado: req.body.encargado,
            ayudante: req.body.ayudante,
            gruero: req.body.gruero,
            empresa: req.body.empresa,
            obra: req.body.obra,
            direccion: req.body.direccion,
            profesionalObra: req.body.profesionalObra,
            marca: req.body.marca,
            tipo: req.body.tipo,
            modelo: req.body.modelo,
            numero: req.body.numero,
            fechaMontaje: req.body.fechaMontaje,
            numeroMontaje: req.body.numeroMontaje,
            fechaUltimaMantencion: req.body.fechaUltimaMantencion,
            ultimaRevision: req.body.ultimaRevision
        }   
    )
    reparacion.save(function (err) {
        if (err) { return next(err); }
           // Successful - redirect to new record.
           res.redirect(reparacion.id);
        });
};

// Display reparacion delete form on GET
exports.reparacion_delete_get = function(req, res) {
    Reparaciones.findById(req.params.id).exec(
        function(err, reparacionBuscada){
            if (err) {return next(err);}
            if (reparacionBuscada == null){
                res.redirect('/main/reparaciones');
            }
            res.render('reparacion_delete', { title: 'Eliminar Reparaciones', reparacion: reparacionBuscada } );
        }   
    )
};

// Handle reparacion delete on POST
exports.reparacion_delete_post = function(req, res) {
    Reparaciones.findById(req.body.id).exec(
        function(err, results){
            if (err) {return next(err);}
            else {
                Reparaciones.findByIdAndRemove(req.body.reparacionid, function eleminarReparacion(err){
                    if (err) { return next(err);}
                    res.redirect('/main/reparaciones')
                })
            }
        }
    )
};

// Display reparacion update form on GET
exports.reparacion_update_get = function(req, res) {
    Reparaciones.findById(req.params.id)
    .populate('reparacion')
    .exec(function(err, reparacionBuscada){
        if (err) { return next(err); }
        if (reparacionBuscada == null) { // No results.
            var err = new Error('Reparaciones not found');
            err.status = 404;
            return next(err);
        }
        res.render('reparacion_form', { title: 'Actualizar Reparaciones', reparaciones:reparacionBuscada });
    }   
    );
};

// Handle reparacion update on POST
exports.reparacion_update_post = function(req, res) {
    var reparacion = new Reparaciones(
        {
            fechaReparacion: req.body.fechaReparacion,
            encargado: req.body.encargado,
            ayudante: req.body.ayudante,
            gruero: req.body.gruero,
            empresa: req.body.empresa,
            obra: req.body.obra,
            direccion: req.body.direccion,
            profesionalObra: req.body.profesionalObra,
            marca: req.body.marca,
            tipo: req.body.tipo,
            modelo: req.body.modelo,
            numero: req.body.numero,
            fechaMontaje: req.body.fechaMontaje,
            numeroMontaje: req.body.numeroMontaje,
            fechaUltimaMantencion: req.body.fechaUltimaMantencion,
            ultimaRevision: req.body.ultimaRevision,
            _id:req.params.id
        }   
    )
    Reparaciones.findByIdAndUpdate(req.params.id, reparacion, function(err, lareparacion){
        if (err) { return next(err); }
        res.redirect(lareparacion.id)
    })
};