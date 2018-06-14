var Montaje = require('../models/montaje');

// MontajesList
exports.montajeList = function(req, res) {
    Montaje.find({},'obra fechaInstalacion').exec(function(err,montajesList){
    	if(err){return next(err);}
        res.send(montajesList);
    })
};

// MontajeShow
exports.montajeShow = function(req, res) {
    Montaje.findById(req.params.id)
    .populate('montaje')
    .exec(function(err, montajeBuscado) {
        if (err) { return next(err); }
        if (montajeBuscado == null) { // No results.
            var err = new Error('Montaje not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render
        res.send(montajeBuscado);
    });
};

// MontajeNew
exports.montajeNew = function(req, res) {
    res.render('montaje_form', { title: 'Agregar Montaje'}); 
};

// MontajeCreate
exports.montajeCreate = function(req, res) {
    var montaje = new Montaje(
        {
            fechaInstalacion: req.body.fechaInstalacion,
            profesionalCargo: req.body.profesionalCargo,
            jefeMontaje: req.body.jefeMontaje,
            primerAyudanteMontaje: req.body.primerAyudanteMontaje,
            segundoAyudanteMontaje: req.body.segundoAyudanteMontaje,
            empresa: req.body.empresa,
            obra: req.body.obra,
            direccion: req.body.direccion,
            profesionalObra: req.body.profesionalObra,
            marca: req.body.marca,
            tipo: req.body.tipo,
            modelo: req.body.modelo,
            numero: req.body.numero,
            areaTrabajo: req.body.areaTrabajo,
            fundaciones: req.body.fundaciones,
            lastresYcontrapesos: req.body.lastresYcontrapesos,
            instalacionesElectricas: req.body.instalacionesElectricas,
            eLibreMinAncho: req.body.eLibreMinAncho,
            eLibreMinAltura: req.body.eLibreMinAltura,
            distTendidoElec: req.body.distTendidoElec,
            tension: req.body.tension,
            distanciaEntreGruas: req.body.distanciaEntreGruas,
            alturaMontajeUt: req.body.alturaMontajeUt,
            alturaMontajefinal: req.body.alturaMontajefinal,
            longitudPluma: req.body.longitudPluma,
            longitudContraPluma: req.body.longitudContraPluma,
            contrapesoPluma: req.body.contrapesoPluma,
            lastresBasales: req.body.lastresBasales,
            pArroTramo: req.body.pArroTramo,
            pArroAlt: req.body.pArroAlt,
            pArroCumplir: req.body.pArroCumplir,
            sArroTramo: req.body.sArroTramo,
            sArroAlt: req.body.sArroAlt,
            sArroCumplir: req.body.sArroCumplir,
            tArroTramo: req.body.tArroTramo,
            tArroAlt: req.body.tArroAlt,
            tArroCumplir: req.body.tArroCumplir
        }   
    )
    montaje.save(function (err) {
        if (err) { return next(err); }
           // Successful - redirect to new record.
           res.send(montaje);
        });
};

// MontajeDelete
exports.montajeDelete = function(req, res) {
    Montaje.findById(req.body.id).exec(
        function(err, results){
            if (err) {return next(err);}
            else {
                Montaje.findByIdAndRemove(req.body.montajeid, function eliminarMontaje(err){
                    if (err) { return next(err);}
                    res.send("eliminado montaje ", req.body.id);
                })
            }
        }
    )
};

// Display montaje update form on GET
exports.montajeEdit = function(req, res) {
    Montaje.findById(req.params.id)
    .populate('montaje')
    .exec(function(err, montajeBuscado){
        if (err) { return next(err); }
        if (montajeBuscado == null) { // No results.
            var err = new Error('Montaje not found');
            err.status = 404;
            return next(err);
        }
        res.render('montaje_form', { title: 'Actualizar Montaje', montajes:montajeBuscado });
    }   
    );
};

// Handle montaje update on POST
exports.montajeUpdate = function(req, res) {
    var montaje = new Montaje(
        {
            fechaInstalacion: req.body.fechaInstalacion,
            profesionalCargo: req.body.profesionalCargo,
            jefeMontaje: req.body.jefeMontaje,
            primerAyudanteMontaje: req.body.primerAyudanteMontaje,
            segundoAyudanteMontaje: req.body.segundoAyudanteMontaje,
            empresa: req.body.empresa,
            obra: req.body.obra,
            direccion: req.body.direccion,
            profesionalObra: req.body.profesionalObra,
            marca: req.body.marca,
            tipo: req.body.tipo,
            modelo: req.body.modelo,
            numero: req.body.numero,
            areaTrabajo: req.body.areaTrabajo,
            fundaciones: req.body.fundaciones,
            lastresYcontrapesos: req.body.lastresYcontrapesos,
            instalacionesElectricas: req.body.instalacionesElectricas,
            eLibreMinAncho: req.body.eLibreMinAncho,
            eLibreMinAltura: req.body.eLibreMinAltura,
            distTendidoElec: req.body.distTendidoElec,
            tension: req.body.tension,
            distanciaEntreGruas: req.body.distanciaEntreGruas,
            alturaMontajeUt: req.body.alturaMontajeUt,
            alturaMontajefinal: req.body.alturaMontajefinal,
            longitudPluma: req.body.longitudPluma,
            longitudContraPluma: req.body.longitudContraPluma,
            contrapesoPluma: req.body.contrapesoPluma,
            lastresBasales: req.body.lastresBasales,
            pArroTramo: req.body.pArroTramo,
            pArroAlt: req.body.pArroAlt,
            pArroCumplir: req.body.pArroCumplir,
            sArroTramo: req.body.sArroTramo,
            sArroAlt: req.body.sArroAlt,
            sArroCumplir: req.body.sArroCumplir,
            tArroTramo: req.body.tArroTramo,
            tArroAlt: req.body.tArroAlt,
            tArroCumplir: req.body.tArroCumplir,
            _id:req.params.id
        }   
    );
    Montaje.findByIdAndUpdate(req.params.id, montaje, function(err, elmontaje){
        if (err) { return next(err); }
        res.send(elmontaje);
    })
};