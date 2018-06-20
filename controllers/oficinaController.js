var Oficina = require('../models/oficina');


exports.oficinaList = function(req, res) {
    Oficina.find({}).exec(function(err,oficinasList){
    	if(err){return next(err);}
    	res.send(oficinasList);
    })
};

exports.oficinaShow = function(req, res) {
    Oficina.findById(req.params.id)
    .populate('oficina')
    .exec(function(err, oficinaBuscada) {
        if (err) { return next(err); }
        if (oficinaBuscada == null) { // No results.
            var err = new Error('Oficina not found');
            err.status = 404;
            return next(err);
        }
        res.send(oficinaBuscada);
    });
};

exports.oficinaNew = function(req, res) {
    res.render('oficina_form', { title: 'Agregar Oficina'});
};

exports.oficinaCreate = function(req, res) {
    
    var oficina = new Oficina({
        direccion: req.body.direccion,
        comuna: req.body.comuna,
        telefono: req.body.telefono   
    });
    oficina.save(function (err) {
        if (err) { return next(err); }
           // Successful - redirect to new record.
           res.send(oficina);
        });
};

exports.oficinaDelete = function(req, res) {
    Oficina.findById(req.body.id).exec(
        function(err, results){
            if (err) {return next(err);}
            else {
                Oficina.findByIdAndRemove(req.body.oficinaid, function eleminarOficina(err){
                    if (err) { return next(err);}
                    res.send('se elimino ', req.body.id);
                })
            }
        }
    );
};

exports.oficinaEdit = function(req, res) {
    Oficina.findById(req.params.id)
    .populate('oficina')
    .exec(function(err, oficinaBuscada){
        if (err) { return next(err); }
        if (oficinaBuscada == null) { // No results.
            var err = new Error('Oficina not found');
            err.status = 404;
            return next(err);
        }
        res.render('oficina_form', { title: 'Actualizar Oficina', oficina:oficinaBuscada });
    }   
    );
};

exports.oficinaUpdate = function(req, res) {
    var oficina = new Oficina({
        direccion: req.body.direccion,
        comuna: req.body.comuna,
        telefono: req.body.telefono,
        _id:req.params.id
    });
    Oficina.findByIdAndUpdate(req.params.id, oficina, function(err, laoficina){
        if (err) { return next(err); }
        res.send(laoficina);
    });
};
