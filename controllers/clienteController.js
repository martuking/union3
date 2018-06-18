var Cliente = require('../models/cliente');


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
        status: req.body.status,
        fechaRegistro: req.body.fechaRegistro,
        representanteLegal:[
            {
                nombre: req.body.representanteLegal.nombre,
                apellido: req.body.representanteLegal.apellido,
                rut: req.body.representanteLegal.rut
            }
        ],
        oficinas:[
            {
                direccion: req.body.oficinas.direccion,
                comuna: req.body.oficinas.comuna,
                telefonos:[
                    req.body.telefonos.telefono
                ]
            }
        ],
        personasContacto:[
            {
                nombre: req.body.personasContacto.nombre,
                apellido: req.body.personasContacto.apellido,
            }
        ]

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
        representanteLegal:[
            {
                nombre: req.body.representanteLegal.nombre,
                apellido: req.body.representanteLegal.apellido,
                rut: req.body.representanteLegal.rut
            }
        ],
        oficinas:[
            {
                direccion: req.body.oficinas.direccion,
                comuna: req.body.oficinas.comuna,
                telefonos:[
                    req.body.telefono.telefono
                ]
            }
        ],
        personasContacto:[
            {
                nombre: req.body.personasContacto.nombre,
                apellido: req.body.personasContacto.apellido,
            }
        ],
        _id:req.params.idCliente
    });
    Cliente.findByIdAndUpdate(req.params.id, cliente, function(err, elcliente){
        if (err) { return next(err); }
        res.send(elcliente);
    });
};
