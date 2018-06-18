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

exports.revisionNew = function(req, res) {
    res.render('grua_form', { title: 'Agregar Grua'});
};

exports.revisionCreate = function(req, res) {
    var grua = new Grua({
        
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

exports.revisionUpdate = function(req, res) {
    var grua = new Grua({
        
        _id:req.params.id
    });
    Grua.findByIdAndUpdate(req.params.id, grua, function(err, lagrua){
        if (err) { return next(err); }
        res.send(lagrua);
    });
};
