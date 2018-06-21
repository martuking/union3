var GuiaDespacho = require('../models/guiaDespacho');


exports.guiaDespachoList = function(req, res) {
    GuiaDespacho.find({}).exec(function(err,guiaDespachosList){
    	if(err){return next(err);}
    	res.send(guiaDespachosList);
    })
};

exports.guiaDespachoShow = function(req, res) {
    GuiaDespacho.findById(req.params.id)
    .populate('guiaDespacho')
    .exec(function(err, guiaDespachoBuscada) {
        if (err) { return next(err); }
        if (guiaDespachoBuscada == null) { // No results.
            var err = new Error('GuiaDespacho not found');
            err.status = 404;
            return next(err);
        }
        res.send(guiaDespachoBuscada);
    });
};

exports.guiaDespachoNew = function(req, res) {
    res.render('guiaDespacho_form', { title: 'Agregar GuiaDespacho'});
};

exports.guiaDespachoCreate = function(req, res) {
    var guiaDespacho = new GuiaDespacho({
        tipoTraslado : req.body.tipoTraslado,
        fecha: req.body.fecha,
        items:[
            {
                descripcion:req.body.descripcion,
                cantidad: req.body.cantidad
            }
        ]
    });
    guiaDespacho.save(function (err) {
        if (err) { return next(err); }
           // Successful - redirect to new record.
           res.send(guiaDespacho);
        });
};

exports.guiaDespachoDelete = function(req, res) {
    GuiaDespacho.findById(req.body.id).exec(
        function(err, results){
            if (err) {return next(err);}
            else {
                GuiaDespacho.findByIdAndRemove(req.body.guiaDespachoid, function eleminarGuiaDespacho(err){
                    if (err) { return next(err);}
                    res.send('se elimino ', req.body.id);
                })
            }
        }
    );
};

exports.guiaDespachoEdit = function(req, res) {
    GuiaDespacho.findById(req.params.id)
    .populate('guiaDespacho')
    .exec(function(err, guiaDespachoBuscada){
        if (err) { return next(err); }
        if (guiaDespachoBuscada == null) { // No results.
            var err = new Error('GuiaDespacho not found');
            err.status = 404;
            return next(err);
        }
        res.render('guiaDespacho_form', { title: 'Actualizar GuiaDespacho', guiaDespacho:guiaDespachoBuscada });
    }   
    );
};

exports.guiaDespachoUpdate = function(req, res) {
    var guiaDespacho = new GuiaDespacho({
        tipoTraslado : req.body.tipoTraslado,
        fecha: req.body.fecha,
        items:[
            {
                descripcion:req.body.descripcion,
                cantidad: req.body.cantidad
            }
        ],
        _id:req.params.id
    });
    GuiaDespacho.findByIdAndUpdate(req.params.id, guiaDespacho, function(err, laguiaDespacho){
        if (err) { return next(err); }
        res.send(laguiaDespacho);
    });
};
