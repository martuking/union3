var Revision = require('../models/revision');

// Display list of all revisions
exports.revision_list = function(req, res) {
    Revision.find({},'obra fechaInspeccion').exec(function(err,list_revisiones){
    	if(err){return next(err);}
    	res.render('revision_list',{title: 'Listado de Revisiones', revision_list:list_revisiones});
    })
};

// Display detail page for a specific revision
exports.revision_detail = function(req, res) {
    Revision.findById(req.params.id)
    .populate('revision')
    .exec(function(err, revisionBuscada) {
        if (err) { return next(err); }
        if (revisionBuscada == null) { // No results.
            var err = new Error('Revision not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render
        res.render('revision_detail', { title: 'Revision:', revision: revisionBuscada } );
    });
};

// Display revision create form on GET
exports.revision_create_get = function(req, res) {
    res.render('revision_form', { title: 'Agregar Revision'});
};

// Handle revision create on POST
exports.revision_create_post = function(req, res) {
    var revision = new Revision({
        fechaInspeccion: req.body.fechaInspeccion,
        encargadoMantencion: req.body.encargadoMantencion,
        ayudanteMantencion: req.body.ayudanteMantencion,
        gruero: req.body.gruero,
        empresa: req.body.empresa,
        obra: req.body.obra,
        direccion: req.body.direccion,
        profesionalObra: req.body.profesionalObra,
        marca: req.body.marca,
        tipo: req.body.tipo,
        modelo: req.body.modelo,
        numero: req.body.numero,
        fechaMontaje: req.body.fechaMontaje,
        numeroMontaje: req.body.numeroMontaje,
        fechaUltimaMantencion: req.body.fechaUltimaMantencion,
        ultimaRevision: req.body.ultimaRevision,
        soportePunto: req.body.soportePunto,
        topeGancho: req.body.topeGancho,
        coronaRodillos: req.body.coronaRodillos,
        dentadoExterior: req.body.dentadoExterior,
        sentidoEnrrolladoCorrecto: req.body.sentidoEnrrolladoCorrecto,
        revisionRodamientosPoleas: req.body.revisionRodamientosPoleas,
        poleasBienAlineadas: req.body.poleasBienAlineadas,
        poleasApoyoBuenEstado: req.body.poleasApoyoBuenEstado,
        cableBuenEstado: req.body.cableBuenEstado,
        oxidacion: req.body.oxidacion,
        alambresRotos: req.body.alambresRotos,
        alambresDesgastados: req.body.alambresDesgastados,
        alambresFlojos: req.body.alambresFlojos,
        cordonesDesequilibrados: req.body.cordonesDesequilibrados,
        distorcionMalosTramos: req.body.distorcionMalosTramos,
        fisurasTorreta: req.body.fisurasTorreta,
        fisurasTirantes: req.body.fisurasTirantes,
        fisurasFlechas: req.body.fisurasFlechas,
        revisionContatores: req.body.revisionContatores,
        tornillosBorneAmarillo: req.body.tornillosBorneAmarillo,
        limitadoresCarga: req.body.limitadoresCarga,
        limitadoresRecorrido: req.body.limitadoresRecorrido,
        vientosArrostramineto: req.body.vientosArrostramineto,
        tomaTierra: req.body.tomaTierra,
        verticalidadHorizontalidad: req.body.verticalidadHorizontalidad,
        topesVia: req.body.topesVia,
        pinzasAmarreCarriles: req.body.pinzasAmarreCarriles,
        nivelesVias: req.body.nivelesVias,
        cableElevacion: req.body.cableElevacion,
        cableCarro: req.body.cableCarro,
        aprietePasadores: req.body.aprietePasadores,
        aprieteEjes: req.body.aprieteEjes,
        pinonAtaqueCorona: req.body.pinonAtaqueCorona,
        galetsCorona: req.body.galetsCorona,
        motorElevacion: req.body.motorElevacion,
        polinesCarro: req.body.polinesCarro,
        cargaEnPunta: req.body.cargaEnPunta,
        capachos: req.body.capachos
    });
    revision.save(function (err) {
        if (err) { return next(err); }
           // Successful - redirect to new record.
           res.redirect(revision.id);
        });
};

// Display revision delete form on GET
exports.revision_delete_get = function(req, res) {
    Revision.findById(req.params.id).exec(
        function(err, revisionBuscada){
            if (err) {return next(err);}
            if (revisionBuscada == null){
                res.redirect('/main/revisiones');
            }
            res.render('revision_delete', { title: 'Eliminar Revision', revision: revisionBuscada } );
        }   
    );
};

// Handle revision delete on POST
exports.revision_delete_post = function(req, res) {
    Revision.findById(req.body.id).exec(
        function(err, results){
            if (err) {return next(err);}
            else {
                Revision.findByIdAndRemove(req.body.revisionid, function eleminarRevision(err){
                    if (err) { return next(err);}
                    res.redirect('/main/revisiones')
                })
            }
        }
    );
};

// Display revision update form on GET
exports.revision_update_get = function(req, res) {
    Revision.findById(req.params.id)
    .populate('revision')
    .exec(function(err, revisionBuscada){
        if (err) { return next(err); }
        if (revisionBuscada == null) { // No results.
            var err = new Error('Revision not found');
            err.status = 404;
            return next(err);
        }
        res.render('revision_form', { title: 'Actualizar Revision', revision:revisionBuscada });
    }   
    );
};

// Handle revision update on POST
exports.revision_update_post = function(req, res) {
    var revision = new Revision({
        fechaInspeccion: req.body.fechaInspeccion,
        encargadoMantencion: req.body.encargadoMantencion,
        ayudanteMantencion: req.body.ayudanteMantencion,
        gruero: req.body.gruero,
        empresa: req.body.empresa,
        obra: req.body.obra,
        direccion: req.body.direccion,
        profesionalObra: req.body.profesionalObra,
        marca: req.body.marca,
        tipo: req.body.tipo,
        modelo: req.body.modelo,
        numero: req.body.numero,
        fechaMontaje: req.body.fechaMontaje,
        numeroMontaje: req.body.numeroMontaje,
        fechaUltimaMantencion: req.body.fechaUltimaMantencion,
        ultimaRevision: req.body.ultimaRevision,
        soportePunto: req.body.soportePunto,
        topeGancho: req.body.topeGancho,
        coronaRodillos: req.body.coronaRodillos,
        dentadoExterior: req.body.dentadoExterior,
        sentidoEnrrolladoCorrecto: req.body.sentidoEnrrolladoCorrecto,
        revisionRodamientosPoleas: req.body.revisionRodamientosPoleas,
        poleasBienAlineadas: req.body.poleasBienAlineadas,
        poleasApoyoBuenEstado: req.body.poleasApoyoBuenEstado,
        cableBuenEstado: req.body.cableBuenEstado,
        oxidacion: req.body.oxidacion,
        alambresRotos: req.body.alambresRotos,
        alambresDesgastados: req.body.alambresDesgastados,
        alambresFlojos: req.body.alambresFlojos,
        cordonesDesequilibrados: req.body.cordonesDesequilibrados,
        distorcionMalosTramos: req.body.distorcionMalosTramos,
        fisurasTorreta: req.body.fisurasTorreta,
        fisurasTirantes: req.body.fisurasTirantes,
        fisurasFlechas: req.body.fisurasFlechas,
        revisionContatores: req.body.revisionContatores,
        tornillosBorneAmarillo: req.body.tornillosBorneAmarillo,
        limitadoresCarga: req.body.limitadoresCarga,
        limitadoresRecorrido: req.body.limitadoresRecorrido,
        vientosArrostramineto: req.body.vientosArrostramineto,
        tomaTierra: req.body.tomaTierra,
        verticalidadHorizontalidad: req.body.verticalidadHorizontalidad,
        topesVia: req.body.topesVia,
        pinzasAmarreCarriles: req.body.pinzasAmarreCarriles,
        nivelesVias: req.body.nivelesVias,
        cableElevacion: req.body.cableElevacion,
        cableCarro: req.body.cableCarro,
        aprietePasadores: req.body.aprietePasadores,
        aprieteEjes: req.body.aprieteEjes,
        pinonAtaqueCorona: req.body.pinonAtaqueCorona,
        galetsCorona: req.body.galetsCorona,
        motorElevacion: req.body.motorElevacion,
        polinesCarro: req.body.polinesCarro,
        cargaEnPunta: req.body.cargaEnPunta,
        capachos: req.body.capachos,
        _id:req.params.id
    });
    Revision.findByIdAndUpdate(req.params.id, revision, function(err, larevision){
        if (err) { return next(err); }
        res.redirect(larevision.id);
    });
};