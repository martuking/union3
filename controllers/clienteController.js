var Cliente = require('../models/cliente');

exports.clienteList = function(req, res) {
    Cliente.find({}).exec(function(err,clientesList){
    	if(err){return next(err);}
    	res.send(clientesList);
    })
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
        status: req.body.status,
        fechaRegistro: req.body.fechaRegistro,
        representanteLegal:[{
            nombre : req.body.nombre,
            apellido: req.body.apellido,
            rut: req.body.rut
        }],
        oficinas:[{
            direccion: req.body.direccion,
            comuna: req.body.comuna,
            telefonos:[req.body.telefono]
        }],
        personasContacto:[{
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            celular: req.body.celular,
            mail: req-body.mail,
            cargo: req.body.car
        }]
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
        status: req.body.status,
        fechaRegistro: req.body.fechaRegistro,
        representanteLegal:[{
            nombre : req.body.nombre,
            apellido: req.body.apellido,
            rut: req.body.rut
        }],
        oficinas:[{
            direccion: req.body.direccion,
            comuna: req.body.comuna,
            telefonos:[req.body.telefono]
        }],
        personasContacto:[{
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            celular: req.body.celular,
            mail: req-body.mail,
            cargo: req.body.car
        }],
        _id:req.params.id
    });
    Cliente.findByIdAndUpdate(req.params.id, cliente, function(err, elcliente){
        if (err) { return next(err); }
        res.send(elcliente);
    });
};
