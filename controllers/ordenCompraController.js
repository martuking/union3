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

exports.revisionNew = function(req, res) {
    res.render('ordenCompra_form', { title: 'Agregar OrdenCompra'});
};

exports.revisionCreate = function(req, res) {
    var ordenCompra = new OrdenCompra({
        
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

exports.revisionUpdate = function(req, res) {
    var ordenCompra = new OrdenCompra({
        
        _id:req.params.id
    });
    OrdenCompra.findByIdAndUpdate(req.params.id, ordenCompra, function(err, laordenCompra){
        if (err) { return next(err); }
        res.send(laordenCompra);
    });
};
