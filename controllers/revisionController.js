var Revision = require('../models/revision');

// Display list of all revisions
exports.revisionList = function(req, res) {
    Revision.find({},'obra fechaInspeccion').exec(function(err,revisionesList){
    	if(err){return next(err);}
    	res.send(revisionesList);
    })
};

// Display detail page for a specific revision
exports.revisionShow = function(req, res) {
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
        res.send(revisionBuscada);
    });
};

// Display revision create form on GET
exports.revisionNew = function(req, res) {
    res.render('revision_form', { title: 'Agregar Revision'});
};

// Handle revision create on POST
exports.revisionCreate = function(req, res) {
    var revision = new Revision({
        fechaInspeccion: req.body.fechaInspeccion,
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
           res.send(revision);
        });
};


// Handle revision delete on POST
exports.revisionDelete = function(req, res) {
    Revision.findById(req.body.id).exec(
        function(err, results){
            if (err) {return next(err);}
            else {
                Revision.findByIdAndRemove(req.body.revisionid, function eleminarRevision(err){
                    if (err) { return next(err);}
                    res.send('se elimino ', req.body.id);
                })
            }
        }
    );
};

// Display revision update form on GET
exports.revisionEdit = function(req, res) {
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
exports.revisionUpdate = function(req, res) {
    var revision = new Revision({
        fechaInspeccion: req.body.fechaInspeccion,
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
        res.send(larevision);
    });
};