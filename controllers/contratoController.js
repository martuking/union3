var Contrato = require('../models/contrato');
var Cliente = require('../models/cliente');

exports.contratoList = function(req, res) {
    Contrato.find({}).exec(function(err,contratosList){
    	if(err){return next(err);}
    	res.send(contratosList);
    })
};

exports.contratoShow = function(req, res) {
    Contrato.findById(req.params.id)
    .populate('contrato')
    .exec(function(err, contratoBuscado) {
        if (err) { return next(err); }
        if (contratoBuscado == null) {
            var err = new Error('Contrato not found');
            err.status = 404;
            return next(err);
        }
        res.send(contratoBuscado);
    });
};

exports.contratoNew = function(req, res) {
    res.render('contrato_form', { title: 'Agregar Contrato'});
};

exports.contratoCreate = function(req, res) {
    var contrato = new Contrato({
        fechaCreacion: req.body.fechaCreacion,
        fechaInicio: req.body.fechaInicio,
        fechaTermino: req.body.fechaTermino
    });
    contrato.save(function (err) {
        if (err) { return next(err); }
           res.send(contrato);
        });
};

exports.contratoDelete = function(req, res) {
    Contrato.findById(req.body.id).exec(
        function(err, results){
            if (err) {return next(err);}
            else {
                Contrato.findByIdAndRemove(req.body.contratoid, function eleminarContrato(err){
                    if (err) { return next(err);}
                    res.send('se elimino ', req.body.id);
                })
            }
        }
    );
};

exports.contratoEdit = function(req, res) {
    Contrato.findById(req.params.id)
    .populate('contrato')
    .exec(function(err, contratoBuscado){
        if (err) { return next(err); }
        if (contratoBuscado == null) {
            var err = new Error('Contrato not found');
            err.status = 404;
            return next(err);
        }
        res.render('contrato_form', { title: 'Actualizar Contrato', contrato:contratoBuscado });
    }   
    );
};

exports.contratoUpdate = function(req, res) {
    var contrato = new Contrato({
        fechaCreacion: req.body.fechaCreacion,
        fechaInicio: req.body.fechaInicio,
        fechaTermino: req.body.fechaTermino,
        status: req.body.status,
        _id:req.params.idContrato
    });
    Contrato.findByIdAndUpdate(req.params.id, contrato, function(err, elcontrato){
        if (err) { return next(err); }
        res.send(elcontrato);
    });
};
