var Grua = require('../models/grua');


exports.gruaList = function(req, res) {
    Grua.find({}).exec(function(err,gruasList){
    	if(err){return next(err);}
    	res.send(gruasList);
    })
};

exports.gruaShow = function(req, res) {
    Grua.findById(req.params.id)
    .populate('grua')
    .exec(function(err, gruaBuscada) {
        if (err) { return next(err); }
        if (gruaBuscada == null) { // No results.
            var err = new Error('Grua not found');
            err.status = 404;
            return next(err);
        }
        res.send(gruaBuscada);
    });
};

exports.gruaNew = function(req, res) {
    res.render('grua_form', { title: 'Agregar Grua'});
};

exports.gruaCreate = function(req, res) {
    
    var grua = new Grua({
        numeroSerie: req.body.numeroSerie,
        marca: req.body.marca,
        modelo: req.body.modelo,
        configuraciones:{
            altura: req.body.configuraciones.altura,
            pluma: req.body.configuraciones.pluma,
            empotrado: req.body.configuraciones.empotrado,
            lastre: req.body.configuraciones.lastre
        }
    });
    grua.save(function (err) {
        if (err) { return next(err); }
           // Successful - redirect to new record.
           res.send(grua);
        });
};

exports.gruaDelete = function(req, res) {
    Grua.findById(req.body.id).exec(
        function(err, results){
            if (err) {return next(err);}
            else {
                Grua.findByIdAndRemove(req.body.gruaid, function eleminarGrua(err){
                    if (err) { return next(err);}
                    res.send('se elimino ', req.body.id);
                })
            }
        }
    );
};

exports.gruaEdit = function(req, res) {
    Grua.findById(req.params.id)
    .populate('grua')
    .exec(function(err, gruaBuscada){
        if (err) { return next(err); }
        if (gruaBuscada == null) { // No results.
            var err = new Error('Grua not found');
            err.status = 404;
            return next(err);
        }
        res.render('grua_form', { title: 'Actualizar Grua', grua:gruaBuscada });
    }   
    );
};

exports.gruaUpdate = function(req, res) {
    var grua = new Grua({
        numeroSerie: req.body.numeroSerie,
        marca: req.body.marca,
        modelo: req.body.modelo,
        configuraciones:{
            altura: req.body.configuraciones.altura,
            pluma: req.body.configuraciones.pluma,
            empotrado: req.body.configuraciones.empotrado,
            lastre: req.body.configuraciones.lastre
        },
        _id:req.params.id
    });
    Grua.findByIdAndUpdate(req.params.id, grua, function(err, lagrua){
        if (err) { return next(err); }
        res.send(lagrua);
    });
};
