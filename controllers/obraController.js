var Obra = require('../models/obra');


exports.obraList = function(req, res) {
    Obra.find({}).exec(function(err,obrasList){
    	if(err){return next(err);}
    	res.send(obrasList);
    })
};

exports.obraShow = function(req, res) {
    Obra.findById(req.params.id)
    .populate('obra')
    .exec(function(err, obraBuscada) {
        if (err) { return next(err); }
        if (obraBuscada == null) { // No results.
            var err = new Error('Obra not found');
            err.status = 404;
            return next(err);
        }
        res.send(obraBuscada);
    });
};

exports.obraNew = function(req, res) {
    res.render('obra_form', { title: 'Agregar Obra'});
};

exports.obraCreate = function(req, res) {
    var obra = new Obra({
        nombre: req.body.nombre,
        ubicacion: req.body.ubicacion,
        telefono: req.body.telefono
    });
    obra.save(function (err) {
        if (err) { return next(err); }
           // Successful - redirect to new record.
           res.send(obra);
        });
};

exports.obraDelete = function(req, res) {
    Obra.findById(req.body.id).exec(
        function(err, results){
            if (err) {return next(err);}
            else {
                Obra.findByIdAndRemove(req.body.obraid, function eleminarObra(err){
                    if (err) { return next(err);}
                    res.send('se elimino ', req.body.id);
                })
            }
        }
    );
};

exports.obraEdit = function(req, res) {
    Obra.findById(req.params.id)
    .populate('obra')
    .exec(function(err, obraBuscada){
        if (err) { return next(err); }
        if (obraBuscada == null) { // No results.
            var err = new Error('Obra not found');
            err.status = 404;
            return next(err);
        }
        res.render('obra_form', { title: 'Actualizar Obra', obra:obraBuscada });
    }   
    );
};

exports.obraUpdate = function(req, res) {
    var obra = new Obra({
        nombre: req.body.nombre,
        ubicacion: req.body.ubicacion,
        telefono: req.body.telefono,
        _id:req.params.id
    });
    Obra.findByIdAndUpdate(req.params.id, obra, function(err, laobra){
        if (err) { return next(err); }
        res.send(laobra);
    });
};
