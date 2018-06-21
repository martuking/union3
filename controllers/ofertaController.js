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
        
        fechaCreacion: req.body.fechaCreacion,
        fechaCambioStatus: req.body.fechaCambioStatus,
        gruas:[
            {
                grua:{},
                itemsIncluidos: {
                    operadorPrecio: req.body.operadorPrecio,
                    horaExtraOperadorSemana: req.body.horaExtraOperadorSemana,
                    horaExtraOperadorFinSemana: req.body.horaExtraOperadorFinSemana,
                    montajeDesmontaje: req.body.montajeDesmontaje,
                    mantencionSantiago: req.body.mantencionSantiago,
                    visitaEmergencia: req.body.visitaEmergencia,
                    pieEmpotramiento: req.body.pieEmpotramiento,
                    cambioCable: req.body.cambioCable,
                    cargaDescargaCamiones: req.body.cargaDescargaCamiones,
                    arriendoJuegoPatasEmpotramiento: req.body.arriendoJuegoPatasEmpotramiento,
                    arriendoTramos: req.body.arriendoTramos,
                    telescopajeDestelescopaje: re.body.telescopajeDestelescopaje,
                    confeccionRiostra: req.body.confeccionRiostra,
                    arriendoAnilloArriostramiento: req.body.arriendoAnilloArriostramiento,
                    transporteAccesorios: req.body.transporteAccesorios,
                    revisionInicial: req.body.revisionInicial
                },
                itemsNoIncluidos: {
                    seguroDañosTerceros: req.body.seguroDañosTerceros,
                    permisosMunicipalesTransito: req.body.permisosMunicipalesTransito,
                    empalmeElectricoGrua: req.body.empalmeElectricoGrua,
                    obrasCivilesAnexas: req.body.obrasCivilesAnexas,
                    impuestosDiaFacturacion: req.body.impuestosDiaFacturacion,
                    reparacionesRepuestos: req.body.reparacionesRepuestos,
                    horasExtraOperador: req.body.horasExtraOperador,
                    gruaAuxMontajeDesmontaje: req.body.gruaAuxMontajeDesmontaje,
                    gruaAuxCargaDescargaBodega:  req.body.gruaAuxCargaDescargaBodega
                }
            }
        ]

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
        fechaCreacion: req.body.fechaCreacion,
        status: req.body.status,
        fechaCambioStatus: req.body.fechaCambioStatus,
        gruas:[
            {
                grua:{},
                itemsIncluidos: {
                    operadorPrecio: req.body.operadorPrecio,
                    horaExtraOperadorSemana: req.body.horaExtraOperadorSemana,
                    horaExtraOperadorFinSemana: req.body.horaExtraOperadorFinSemana,
                    montajeDesmontaje: req.body.montajeDesmontaje,
                    mantencionSantiago: req.body.mantencionSantiago,
                    visitaEmergencia: req.body.visitaEmergencia,
                    pieEmpotramiento: req.body.pieEmpotramiento,
                    cambioCable: req.body.cambioCable,
                    cargaDescargaCamiones: req.body.cargaDescargaCamiones,
                    arriendoJuegoPatasEmpotramiento: req.body.arriendoJuegoPatasEmpotramiento,
                    arriendoTramos: req.body.arriendoTramos,
                    telescopajeDestelescopaje: re.body.telescopajeDestelescopaje,
                    confeccionRiostra: req.body.confeccionRiostra,
                    arriendoAnilloArriostramiento: req.body.arriendoAnilloArriostramiento,
                    transporteAccesorios: req.body.transporteAccesorios,
                    revisionInicial: req.body.revisionInicial
                },
                itemsNoIncluidos: {
                    seguroDañosTerceros: req.body.seguroDañosTerceros,
                    permisosMunicipalesTransito: req.body.permisosMunicipalesTransito,
                    empalmeElectricoGrua: req.body.empalmeElectricoGrua,
                    obrasCivilesAnexas: req.body.obrasCivilesAnexas,
                    impuestosDiaFacturacion: req.body.impuestosDiaFacturacion,
                    reparacionesRepuestos: req.body.reparacionesRepuestos,
                    horasExtraOperador: req.body.horasExtraOperador,
                    gruaAuxMontajeDesmontaje: req.body.gruaAuxMontajeDesmontaje,
                    gruaAuxCargaDescargaBodega:  req.body.gruaAuxCargaDescargaBodega
                }
            }
        ],
        _id:req.params.id
    });
    Oferta.findByIdAndUpdate(req.params.id, oferta, function(err, laoferta){
        if (err) { return next(err); }
        res.send(laoferta);
    });
};
