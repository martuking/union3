var Cliente = require('../models/cliente');
var Oficina = require('../models/oficina');
var PersonaForeanea = require('../models/personaForanea');


exports.clienteList = function(req, res) {
    Cliente.find({}).exec(function(err,clientesList){
    	if(err){return next(err);}
    	res.send(clientesList);
    });
};

exports.clienteShow = function(req, res) {
    Cliente.findById(req.params.id)
    .populate('cliente')
    .exec(function(err, clienteBuscado) {
        if (err) { return next(err); }
        if (clienteBuscado == null) {
            var err = new Error('Cliente not found');
            err.status = 404;
            return next(err);
        }
        res.send(clienteBuscado);
    });
};

exports.clienteNew = function(req, res) {
    res.render('cliente_form', { title: 'Agregar Cliente'});
};

exports.clienteCreate = function(req, res) {
    var cliente = new Cliente({
        nombre: req.body.nombre,
        rut: req.body.rut,
        giro: req.body.giro,
        fechaRegistro: req.body.fechaRegistro,
    });
    cliente.save(function (err) {
        if (err) { return next(err); }
           res.send(cliente);
        });
};

exports.clienteDelete = function(req, res) {
    Cliente.findById(req.body.id).exec(
        function(err, results){
            if (err) {return next(err);}
            else {
                Cliente.findByIdAndRemove(req.body.clienteid, function eleminarCliente(err){
                    if (err) { return next(err);}
                    res.send('se elimino ', req.body.id);
                })
            }
        }
    );
};

exports.clienteEdit = function(req, res) {
    Cliente.findById(req.params.id)
    .populate('cliente')
    .exec(function(err, clienteBuscado){
        if (err) { return next(err); }
        if (clienteBuscado == null) {
            var err = new Error('Cliente not found');
            err.status = 404;
            return next(err);
        }
        res.render('cliente_form', { title: 'Actualizar Cliente', cliente:clienteBuscado });
    }   
    );
};

exports.clienteUpdate = function(req, res) {
    var cliente = new Cliente({
        nombre: req.body.nombre,
        rut: req.body.rut,
        giro: req.body.giro,
        fechaRegistro: req.body.fechaRegistro,
        status: req.body.status,
        _id:req.params.idCliente
    });
    Cliente.findByIdAndUpdate(req.params.id, cliente, function(err, elcliente){
        if (err) { return next(err); }
        res.send(elcliente);
    });
};

exports.clienteOficinaCreate = function(req, res, next){
    Cliente.findById(req.params.id)
    .populate('cliente')
    .exec(function(err, clienteBuscado) {
        if (err) { return next(err); }
        if (clienteBuscado == null) {
            var err = new Error('Cliente not found');
            err.status = 404;
            return next(err);
        }
        oficina = new Oficina(req.body);
        oficina.cliente = clienteBuscado._id;
        oficina.save(function(err){
            if(err){ return next(err) };
        });
        clienteBuscado.oficinas.push(oficina);
        clienteBuscado.save(function(err){
            if(err){ return next(err) };
        });
        res.send(clienteBuscado.oficinas);
    });
};

exports.clientePersonaForaneaCreate = function(req, res, next){
    Cliente.findById(req.params.id)
    .populate('cliente')
    .exec(function(err, clienteBuscado) {
        if (err) { return next(err); }
        if (clienteBuscado == null) {
            var err = new Error('Cliente not found');
            err.status = 404;
            return next(err);
        }
        personaForanea = new PersonaForeanea(req.body);
        personaForanea.cliente = clienteBuscado._id;
        personaForanea.save(function(err){
            if(err){ return next(err) };
        });
        clienteBuscado.personasCliente.push(personaForanea);
        clienteBuscado.save(function(err){
            if(err){ return next(err) };
        });
        res.send(clienteBuscado.personasCliente);
    });
};