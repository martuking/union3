var Adquisicion = require('../models/adquisicion');


exports.adquisicionList = function(req, res) {
    Adquisicion.find({}).exec(function(err,adquisicionesList){
    	if(err){return next(err);}
    	res.send(adquisicionesList);
    })
};

exports.adquisicionShow = function(req, res) {
    Adquisicion.findById(req.params.id)
    .populate('adquisicion')
    .exec(function(err, adquisicionBuscada) {
        if (err) { return next(err); }
        if (adquisicionBuscada == null) { // No results.
            var err = new Error('Adquisicion not found');
            err.status = 404;
            return next(err);
        }
        res.send(adquisicionBuscada);
    });
};

exports.adquisicionNew = function(req, res) {
    res.render('adquisicion_form', { title: 'Agregar Adquisicion'});
};

exports.adquisicionCreate = function(req, res) {
    var adquisicion = new Adquisicion({
        descripcion: req.body.descripcion,
        categoria: req.body.categoria,
        precioCompra: req.body.precioCompra
    });
    adquisicion.save(function (err) {
        if (err) { return next(err); }
           // Successful - redirect to new record.
           res.send(adquisicion);
        });
};

exports.adquisicionDelete = function(req, res) {
    Adquisicion.findById(req.body.id).exec(
        function(err, results){
            if (err) {return next(err);}
            else {
                Adquisicion.findByIdAndRemove(req.body.adquisicionid, function eleminarAdquisicion(err){
                    if (err) { return next(err);}
                    res.send('se elimino ', req.body.id);
                })
            }
        }
    );
};

exports.adquisicionEdit = function(req, res) {
    Adquisicion.findById(req.params.id)
    .populate('adquisicion')
    .exec(function(err, adquisicionBuscada){
        if (err) { return next(err); }
        if (adquisicionBuscada == null) { // No results.
            var err = new Error('Adquisicion not found');
            err.status = 404;
            return next(err);
        }
        res.render('adquisicion_form', { title: 'Actualizar Adquisicion', adquisicion:adquisicionBuscada });
    }   
    );
};

exports.adquisicionUpdate = function(req, res) {
    var adquisicion = new Adquisicion({
        descripcion: req.body.descripcion,
        categoria: req.body.categoria,
        precioCompra: req.body.precioCompra,
        _id:req.params.id
    });
    Adquisicion.findByIdAndUpdate(req.params.id, adquisicion, function(err, laadquisicion){
        if (err) { return next(err); }
        res.send(laadquisicion);
    });
};
