var OrdenCompra = require('../models/ordenCompra');


exports.ordenCompraList = function(req, res) {
    OrdenCompra.find({}).exec(function(err,ordenComprasList){
    	if(err){return next(err);}
    	res.send(ordenComprasList);
    })
};

exports.ordenCompraShow = function(req, res) {
    OrdenCompra.findById(req.params.id)
    .populate('ordenCompra')
    .exec(function(err, ordenCompraBuscada) {
        if (err) { return next(err); }
        if (ordenCompraBuscada == null) { // No results.
            var err = new Error('OrdenCompra not found');
            err.status = 404;
            return next(err);
        }
        res.send(ordenCompraBuscada);
    });
};

exports.ordenCompraNew = function(req, res) {
    res.render('ordenCompra_form', { title: 'Agregar OrdenCompra'});
};

exports.ordenCompraCreate = function(req, res) {
    var ordenCompra = new OrdenCompra({
        fechaCreacion: { type: Date, required: true },
        fechaEntrega: { type: Date, required: true },
        gruas: [
            {
                grua: {},
                arriendo:{
                    gruaTelescopicaHoras: req.body.gruaTelescopicaHoras,
                    precioArriendoGruaTelescopica: req.body.precioArriendoGruaTelescopica,
                    arriendoGruaTorreMeses: req.body.arriendoGruaTorreMeses,
                    arriendoGruaTorreMesesPrecio: req.body.arriendoGruaTorreMesesPrecio,
                    desmontajeTorre: req.body.desmontajeTorre,
                    horasExtraGruaOperadorCantidad: req.body.horasExtraGruaOperadorCantidad,
                    horasExtraGruaOperadorPrecio: req.body.horasExtraGruaOperadorPrecio,
                    montajeTorre: req.body.montajeTorre,
                    operadorTorreMeses: req.body.operadorTorreMeses,
                    operadorTorrePrecio: req.body.operadorTorrePrecio,
                    recargoDiaNoHabilCantidad: req.body.recargoDiaNoHabilCantidad,
                    recargoDiaNoHabilPrecio: req.body.recargoDiaNoHabilPrecio,
                    viaticoMontajeDesmontajeCantidad: req.body.viaticoMontajeDesmontajeCantidad,
                    viaticoMontajeDesmontajePrecio: req.body.viaticoMontajeDesmontajePrecio,
                    viaticoOperadorMeses: req.body.viaticoOperadorMeses,
                    viaticoOperadorPrecio: req.body.viaticoOperadorPrecio
                }
            }
        ]
    });
    ordenCompra.save(function (err) {
        if (err) { return next(err); }
           // Successful - redirect to new record.
           res.send(ordenCompra);
        });
};

exports.ordenCompraDelete = function(req, res) {
    OrdenCompra.findById(req.body.id).exec(
        function(err, results){
            if (err) {return next(err);}
            else {
                OrdenCompra.findByIdAndRemove(req.body.ordenCompraid, function eleminarOrdenCompra(err){
                    if (err) { return next(err);}
                    res.send('se elimino ', req.body.id);
                })
            }
        }
    );
};

exports.ordenCompraEdit = function(req, res) {
    OrdenCompra.findById(req.params.id)
    .populate('ordenCompra')
    .exec(function(err, ordenCompraBuscada){
        if (err) { return next(err); }
        if (ordenCompraBuscada == null) { // No results.
            var err = new Error('OrdenCompra not found');
            err.status = 404;
            return next(err);
        }
        res.render('ordenCompra_form', { title: 'Actualizar OrdenCompra', ordenCompra:ordenCompraBuscada });
    }   
    );
};

exports.ordenCompraUpdate = function(req, res) {
    var ordenCompra = new OrdenCompra({
        fechaCreacion: { type: Date, required: true },
        fechaEntrega: { type: Date, required: true },
        gruas: [
            {
                grua: {},
                arriendo:{
                    gruaTelescopicaHoras: req.body.gruaTelescopicaHoras,
                    precioArriendoGruaTelescopica: req.body.precioArriendoGruaTelescopica,
                    arriendoGruaTorreMeses: req.body.arriendoGruaTorreMeses,
                    arriendoGruaTorreMesesPrecio: req.body.arriendoGruaTorreMesesPrecio,
                    desmontajeTorre: req.body.desmontajeTorre,
                    horasExtraGruaOperadorCantidad: req.body.horasExtraGruaOperadorCantidad,
                    horasExtraGruaOperadorPrecio: req.body.horasExtraGruaOperadorPrecio,
                    montajeTorre: req.body.montajeTorre,
                    operadorTorreMeses: req.body.operadorTorreMeses,
                    operadorTorrePrecio: req.body.operadorTorrePrecio,
                    recargoDiaNoHabilCantidad: req.body.recargoDiaNoHabilCantidad,
                    recargoDiaNoHabilPrecio: req.body.recargoDiaNoHabilPrecio,
                    viaticoMontajeDesmontajeCantidad: req.body.viaticoMontajeDesmontajeCantidad,
                    viaticoMontajeDesmontajePrecio: req.body.viaticoMontajeDesmontajePrecio,
                    viaticoOperadorMeses: req.body.viaticoOperadorMeses,
                    viaticoOperadorPrecio: req.body.viaticoOperadorPrecio
                }
            }
        ],
        _id:req.params.id
    });
    OrdenCompra.findByIdAndUpdate(req.params.id, ordenCompra, function(err, laordenCompra){
        if (err) { return next(err); }
        res.send(laordenCompra);
    });
};
