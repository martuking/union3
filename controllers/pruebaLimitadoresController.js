var PruebaLimitadores = require('../models/pruebaPruebaLimitadores');

// pruebaLimitadoresList
exports.pruebaLimitadoresList = function(req, res) {
    PruebaLimitadores.find({},'fechaPrueba obra').exec(function(err,pruebaLimitadoresList){
    	if(err){return next(err);}
    	res.send(pruebaLimitadoresList);
    });
};

// pruebaLimitadoresShow
exports.pruebaLimitadoresShow = function(req, res) {
    PruebaLimitadores.findById(req.params.id)
    .populate('pruebaLimitadores')
    .exec(function(err, pruebaLimitadoresBuscada) {
        if (err) { return next(err); }
        if (pruebaLimitadoresBuscada == null) { // No results.
            var err = new Error('PruebaLimitadores not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render
        res.send(pruebaLimitadoresBuscada);
    });
};

// pruebaLimitadoresNew
exports.pruebaLimitadoresNew = function(req, res) {
    res.render('pruebaLimitadores_form', { title: 'Agregar Prueba de PruebaLimitadores'});
};

// pruebaLimitadoresCreate
exports.pruebaLimitadoresCreate = function(req, res) {
    var pruebaLimitadores = new PruebaLimitadores(
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
    pruebaLimitadores.save(function (err) {
        if (err) { return next(err); }
           // Successful - redirect to new record.
           res.send(pruebaLimitadores);
        });
};

// pruebaLimitadoresDelete
exports.pruebaLimitadoresDelete = function(req, res) {
    PruebaLimitadores.findById(req.body.id).exec(
        function(err, results){
            if (err) {return next(err);}
            else {
                PruebaLimitadores.findByIdAndRemove(req.body.pruebaLimitadoresid, function eleminarPruebaLimitadores(err){
                    if (err) { return next(err);}
                    res.send("eliminado prueba de limitadores", req.body.id);
                });
            }
        }
    );
};

// pruebaLimitadoresEdit
exports.pruebaLimitadoresEdit = function(req, res) {
    PruebaLimitadores.findById(req.params.id)
    .populate('persona')
    .exec(function(err, pruebaLimitadoresBuscados){
        if (err) { return next(err); }
        if (pruebaLimitadoresBuscados == null) { // No results.
            var err = new Error('Limitador not found');
            err.status = 404;
            return next(err);
        }
        res.render('pruebaLimitadores_form', { title: 'Actualizar Prueba de PruebaLimitadores', pruebaLimitadores:pruebaLimitadoresBuscados });
    }   
    );
};

// pruebaLimitadoresUpdate
exports.pruebaLimitadoresUpdate = function(req, res) {
    var pruebaLimitadores = new PruebaLimitadores(
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
    PruebaLimitadores.findByIdAndUpdate(req.params.id, pruebaLimitadores, function(err, elLimitador){
        if (err) { return next(err); }
        res.send(pruebaLimitadores);
    });
};