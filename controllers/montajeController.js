var Montaje = require('../models/montaje');

// Display list of all montajes
exports.montaje_list = function(req, res) {
    Montaje.find({},'obra fechaInstalacion').exec(function(err,list_montajes){
    	if(err){return next(err);}
    	res.render('montaje_list',{title: 'Listado de Montajes', montaje_list:list_montajes});
    })
};

// Display detail page for a specific montaje
exports.montaje_detail = function(req, res) {
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
        res.render('montaje_detail', { title: 'Montaje:', montaje: montajeBuscado } );
    });
};

// Display montaje create form on GET
exports.montaje_create_get = function(req, res) {
    res.render('montaje_form', { title: 'Agregar Montaje'}); 
};

// Handle montaje create on POST
exports.montaje_create_post = function(req, res) {
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
           res.redirect(montaje.id);
        });
};

// Display montaje delete form on GET
exports.montaje_delete_get = function(req, res) {
    Montaje.findById(req.params.id).exec(
        function(err, montajeBuscado){
            if (err) {return next(err);}
            if (montajeBuscado == null){
                res.redirect('/main/montaje');
            }
            res.render('montaje_delete', { title: 'Eliminar Montaje', montaje: montajeBuscado } );
        }   
    )
};

// Handle montaje delete on POST
exports.montaje_delete_post = function(req, res) {
    Montaje.findById(req.body.id).exec(
        function(err, results){
            if (err) {return next(err);}
            else {
                Montaje.findByIdAndRemove(req.body.montajeid, function eliminarMontaje(err){
                    if (err) { return next(err);}
                    res.redirect('/main/montajes')
                })
            }
        }
    )
};

// Display montaje update form on GET
exports.montaje_update_get = function(req, res) {
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
exports.montaje_update_post = function(req, res) {
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
        res.redirect(elmontaje.id)
    })
};