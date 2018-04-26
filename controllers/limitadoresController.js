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
    var limitadores = new Limitadores(
        {
            fechaPrueba: req.body.fechaPrueba,
            profesionalObra: req.body.profesionalObra,
            jefeMontaje: req.body.jefeMontaje,
            primerAyudanteMontaje: req.body.primerAyudanteMontaje,
            segundoAyudanteMontaje: req.body.segundoAyudanteMontaje,
            empresa: req.body.empresa,
            obra: req.body.obra,
            direccion: req.body.direccion,
            marca: req.body.marca,
            tipo: req.body.tipo,
            modelo: req.body.modelo,
            numero: req.body.numero,
            peso1: req.body.peso1,
            peso2: req.body.peso2,
            longitud1: req.body.longitud1,
            longitud2: req.body.longitud2,
            peso3: req.body.peso3,
            longitud3: req.body.longitud3,
            peso4: req.body.peso4,
            longitud4: req.body.longitud4,
            longitud5: req.body.gratificacion,
            giro1: req.body.montoPactado,
            giro2: req.body.porcentajeZona
        }   
    );
    limitadores.save(function (err) {
        if (err) { return next(err); }
           // Successful - redirect to new record.
           res.redirect(limitadores.id);
        });
};

// Display limitadores delete form on GET
exports.limitadores_delete_get = function(req, res) {
    Limitadores.findById(req.params.id).exec(
        function(err, limitadoresBuscados){
            if (err) {return next(err);}
            if (limitadoresBuscados == null){
                res.redirect('/main/limitadores');
            }
            res.render('limitadores_delete', { title: 'Eliminar Prueba de Limitadores', limitadores: limitadoresBuscados } );
        }   
    );
};

// Handle limitadores delete on POST
exports.limitadores_delete_post = function(req, res) {
    Limitadores.findById(req.body.id).exec(
        function(err, results){
            if (err) {return next(err);}
            else {
                Limitadores.findByIdAndRemove(req.body.limitadoresid, function eleminarLimitadores(err){
                    if (err) { return next(err);}
                    res.redirect('/main/limitadores');
                })
            }
        }
    );
};

// Display limitadores update form on GET
exports.limitadores_update_get = function(req, res) {
    Limitadores.findById(req.params.id)
    .populate('persona')
    .exec(function(err, limitadoresBuscados){
        if (err) { return next(err); }
        if (limitadoresBuscados == null) { // No results.
            var err = new Error('Limitador not found');
            err.status = 404;
            return next(err);
        }
        res.render('limitadores_form', { title: 'Actualizar Prueba de Limitadores', limitadores:limitadoresBuscados });
    }   
    );
};

// Handle limitadores update on POST
exports.limitadores_update_post = function(req, res) {
    var limitadores = new Limitadores(
        {
            fechaPrueba: req.body.fechaPrueba,
            profesionalObra: req.body.profesionalObra,
            jefeMontaje: req.body.jefeMontaje,
            primerAyudanteMontaje: req.body.primerAyudanteMontaje,
            segundoAyudanteMontaje: req.body.segundoAyudanteMontaje,
            empresa: req.body.empresa,
            obra: req.body.obra,
            direccion: req.body.direccion,
            marca: req.body.marca,
            tipo: req.body.tipo,
            modelo: req.body.modelo,
            numero: req.body.numero,
            peso1: req.body.peso1,
            peso2: req.body.peso2,
            longitud1: req.body.longitud1,
            longitud2: req.body.longitud2,
            peso3: req.body.peso3,
            longitud3: req.body.longitud3,
            peso4: req.body.peso4,
            longitud4: req.body.longitud4,
            longitud5: req.body.gratificacion,
            giro1: req.body.montoPactado,
            giro2: req.body.porcentajeZona,
            _id:req.params.id
        }   
    );
    Limitadores.findByIdAndUpdate(req.params.id, limitadores, function(err, elLimitador){
        if (err) { return next(err); }
        res.redirect(elLimitador.id);
    });
};