var Oferta = require('../models/oferta');


exports.ofertaList = function(req, res) {
    Oferta.find({}).exec(function(err,ofertasList){
    	if(err){return next(err);}
    	res.send(ofertasList);
    })
};

exports.ofertaShow = function(req, res) {
    Oferta.findById(req.params.id)
    .populate('oferta')
    .exec(function(err, ofertaBuscada) {
        if (err) { return next(err); }
        if (ofertaBuscada == null) { // No results.
            var err = new Error('Oferta not found');
            err.status = 404;
            return next(err);
        }
        res.send(ofertaBuscada);
    });
};

exports.ofertaNew = function(req, res) {
    res.render('oferta_form', { title: 'Agregar Oferta'});
};

exports.ofertaCreate = function(req, res) {
    var oferta = new Oferta({
        
    });
    oferta.save(function (err) {
        if (err) { return next(err); }
           // Successful - redirect to new record.
           res.send(oferta);
        });
};

exports.ofertaDelete = function(req, res) {
    Oferta.findById(req.body.id).exec(
        function(err, results){
            if (err) {return next(err);}
            else {
                Oferta.findByIdAndRemove(req.body.ofertaid, function eleminarOferta(err){
                    if (err) { return next(err);}
                    res.send('se elimino ', req.body.id);
                })
            }
        }
    );
};

exports.ofertaEdit = function(req, res) {
    Oferta.findById(req.params.id)
    .populate('oferta')
    .exec(function(err, ofertaBuscada){
        if (err) { return next(err); }
        if (ofertaBuscada == null) { // No results.
            var err = new Error('Oferta not found');
            err.status = 404;
            return next(err);
        }
        res.render('oferta_form', { title: 'Actualizar Oferta', oferta:ofertaBuscada });
    }   
    );
};

exports.ofertaUpdate = function(req, res) {
    var oferta = new Oferta({
        
        _id:req.params.id
    });
    Oferta.findByIdAndUpdate(req.params.id, oferta, function(err, laoferta){
        if (err) { return next(err); }
        res.send(laoferta);
    });
};
