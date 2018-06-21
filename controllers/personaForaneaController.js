var PersonaForanea = require('../models/personaForanea');


exports.personaForaneaList = function(req, res) {
    PersonaForanea.find({}).exec(function(err,personaForaneasList){
    	if(err){return next(err);}
    	res.send(personaForaneasList);
    })
};

exports.personaForaneaShow = function(req, res) {
    PersonaForanea.findById(req.params.id)
    .populate('personaForanea')
    .exec(function(err, personaForaneaBuscada) {
        if (err) { return next(err); }
        if (personaForaneaBuscada == null) { // No results.
            var err = new Error('PersonaForanea not found');
            err.status = 404;
            return next(err);
        }
        res.send(personaForaneaBuscada);
    });
};

exports.personaForaneaNew = function(req, res) {
    res.render('personaForanea_form', { title: 'Agregar PersonaForanea'});
};

exports.personaForaneaCreate = function(req, res) {
    
    var personaForanea = new PersonaForanea({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        rut: req.body.rut,
        cargo: req.body.cargo,
        mail: req.body.mail,
        celular: req.body.celular
    });
    personaForanea.save(function (err) {
        if (err) { return next(err); }
           // Successful - redirect to new record.
           res.send(personaForanea);
        });
};

exports.personaForaneaDelete = function(req, res) {
    PersonaForanea.findById(req.body.id).exec(
        function(err, results){
            if (err) {return next(err);}
            else {
                PersonaForanea.findByIdAndRemove(req.body.personaForaneaid, function eleminarPersonaForanea(err){
                    if (err) { return next(err);}
                    res.send('se elimino ', req.body.id);
                })
            }
        }
    );
};

exports.personaForaneaEdit = function(req, res) {
    PersonaForanea.findById(req.params.id)
    .populate('personaForanea')
    .exec(function(err, personaForaneaBuscada){
        if (err) { return next(err); }
        if (personaForaneaBuscada == null) { // No results.
            var err = new Error('PersonaForanea not found');
            err.status = 404;
            return next(err);
        }
        res.render('personaForanea_form', { title: 'Actualizar PersonaForanea', personaForanea:personaForaneaBuscada });
    }   
    );
};

exports.personaForaneaUpdate = function(req, res) {
    var personaForanea = new PersonaForanea({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        rut: req.body.rut,
        cargo: req.body.cargo,
        mail: req.body.mail,
        celular: req.body.celular,
        _id:req.params.id
    });
    PersonaForanea.findByIdAndUpdate(req.params.id, personaForanea, function(err, lapersonaForanea){
        if (err) { return next(err); }
        res.send(lapersonaForanea);
    });
};
