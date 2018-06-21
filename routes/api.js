var express = require('express');
var router = express.Router();

// Require controller modules
var pruebaLimitadoresController = require('../controllers/pruebaLimitadoresController');
var montajeController = require('../controllers/montajeController');
var personaController = require('../controllers/personaController');
var reparacionController = require('../controllers/reparacionController');
var reporteController = require('../controllers/reporteController');
var revisionController = require('../controllers/revisionController');
var adquisicionController = require('../controllers/adquisicionController');
var clienteController = require('../controllers/clienteController');
var contratoController = require('../controllers/contratoController');
var gruaController = require('../controllers/gruaController');
var guiaDespachoController = require('../controllers/guiaDespachoController');
var obraController = require('../controllers/obraController');
var ofertaController = require('../controllers/ofertaController');
var ordenCompraController = require('../controllers/ordenCompraController');
var oficinaController = require('../controllers/oficinaController');
var personaForaneaController = require('../controllers/personaForaneaController');

//rutas para personas foraneas
router.get('/personaForaneas', personaForaneaController.personaForaneaList);
router.get('/personaForaneas/new', personaForaneaController.personaForaneaNew);
router.post('/personaForaneas/create', personaForaneaController.personaForaneaCreate);
router.get('/personaForaneas/:id', personaForaneaController.personaForaneaShow);
router.get('/personaForaneas/:id/edit', personaForaneaController.personaForaneaEdit);
router.put('/personaForaneas/:id',personaForaneaController.personaForaneaUpdate);
router.delete('/personaForaneas/:id', personaForaneaController.personaForaneaDelete);

//rutas para oficinas
router.get('/oficinas', oficinaController.oficinaList);
router.get('/oficinas/new', oficinaController.oficinaNew);
router.post('/oficinas/create', oficinaController.oficinaCreate);
router.get('/oficinas/:id', oficinaController.oficinaShow);
router.get('/oficinas/:id/edit', oficinaController.oficinaEdit);
router.put('/oficinas/:id',oficinaController.oficinaUpdate);
router.delete('/oficinas/:id', oficinaController.oficinaDelete);

//rutas para pruebas de limitadores
router.get('/pruebaLimitadores', pruebaLimitadoresController.pruebaLimitadoresList);
router.get('/pruebaLimitadores/new', pruebaLimitadoresController.pruebaLimitadoresNew);
router.post('/pruebaLimitadores/create', pruebaLimitadoresController.pruebaLimitadoresCreate);
router.get('/pruebaLimitadores/:id', pruebaLimitadoresController.pruebaLimitadoresShow);
router.get('/pruebaLimitadores/:id/edit', pruebaLimitadoresController.pruebaLimitadoresEdit);
router.put('/pruebaLimitadores/:id',pruebaLimitadoresController.pruebaLimitadoresUpdate);
router.delete('/pruebaLimitadores/:id', pruebaLimitadoresController.pruebaLimitadoresDelete);

//rutas para montajes
router.get('/montajes', montajeController.montajeList);
router.get('/montajes/new', montajeController.montajeNew);
router.post('/montajes/create', montajeController.montajeCreate);
router.get('/montajes/:id', montajeController.montajeShow);
router.get('/montajes/:id/edit', montajeController.montajeEdit);
router.put('/montajes/:id',montajeController.montajeUpdate);
router.delete('/montajes/:id', montajeController.montajeDelete);

//rutas para personas
router.get('/personas', personaController.personaList);
router.get('/personas/new', personaController.personaNew);
router.post('/personas/create', personaController.personaCreate);
router.get('/personas/:id', personaController.personaShow);
router.get('/personas/:id/edit', personaController.personaEdit);
router.put('/personas/:id',personaController.personaUpdate);
router.delete('/personas/:id', personaController.personaDelete);

//rutas para reparaciones
router.get('/reparaciones', reparacionController.reparacionList);
router.get('/reparaciones/new', reparacionController.reparacionNew);
router.post('/reparaciones/create', reparacionController.reparacionCreate);
router.get('/reparaciones/:id', reparacionController.reparacionShow);
router.get('/reparaciones/:id/edit', reparacionController.reparacionEdit);
router.put('/reparaciones/:id',reparacionController.reparacionUpdate);
router.delete('/reparaciones/:id', reparacionController.reparacionDelete);

//rutas para reportes
router.get('/reportes', reporteController.reporteList);
router.get('/reportes/new', reporteController.reporteNew);
router.post('/reportes/create', reporteController.reporteCreate);
router.get('/reportes/:id', reporteController.reporteShow);
router.get('/reportes/:id/edit', reporteController.reporteEdit);
router.put('/reportes/:id',reporteController.reporteUpdate);
router.delete('/reportes/:id', reporteController.reporteDelete);

//rutas para revisiones
router.get('/revisiones', revisionController.revisionList);
router.get('/revisiones/new', revisionController.revisionNew);
router.post('/revisiones/create', revisionController.revisionCreate);
router.get('/revisiones/:id', revisionController.revisionShow);
router.get('/revisiones/:id/edit', revisionController.revisionEdit);
router.put('/revisiones/:id',revisionController.revisionUpdate);
router.delete('/revisiones/:id', revisionController.revisionDelete);

//rutas para adquisiciones
router.get('/adquisiciones', adquisicionController.adquisicionList);
router.get('/adquisiciones/new', adquisicionController.adquisicionNew);
router.post('/adquisiciones/create', adquisicionController.adquisicionCreate);
router.get('/adquisiciones/:id', adquisicionController.adquisicionShow);
router.get('/adquisiciones/:id/edit', adquisicionController.adquisicionEdit);
router.put('/adquisiciones/:id',adquisicionController.adquisicionUpdate);
router.delete('/adquisiciones/:id', adquisicionController.adquisicionDelete);

//rutas para clientes
router.get('/clientes', clienteController.clienteList);
router.get('/clientes/new', clienteController.clienteNew);
router.post('/clientes/create', clienteController.clienteCreate);
router.get('/clientes/:id', clienteController.clienteShow);
router.get('/clientes/:id/edit', clienteController.clienteEdit);
router.put('/clientes/:id',clienteController.clienteUpdate);
router.delete('/clientes/:id', clienteController.clienteDelete);

//rutas para contratos
router.get('/contratos', contratoController.contratoList);
router.get('/contratos/new', contratoController.contratoNew);
router.post('/contratos/create', contratoController.contratoCreate);
router.get('/contratos/:id', contratoController.contratoShow);
router.get('/contratos/:id/edit', contratoController.contratoEdit);
router.put('/contratos/:id',contratoController.contratoUpdate);
router.delete('/contratos/:id', contratoController.contratoDelete);

//rutas para gruas
router.get('/gruas', gruaController.gruaList);
router.get('/gruas/new', gruaController.gruaNew);
router.post('/gruas/create', gruaController.gruaCreate);
router.get('/gruas/:id', gruaController.gruaShow);
router.get('/gruas/:id/edit', gruaController.gruaEdit);
router.put('/gruas/:id',gruaController.gruaUpdate);
router.delete('/gruas/:id', gruaController.gruaDelete);

//rutas para guias de despacho
router.get('/guiasDespacho', guiaDespachoController.guiaDespachoList);
router.get('/guiasDespacho/new', guiaDespachoController.guiaDespachoNew);
router.post('/guiasDespacho/create', guiaDespachoController.guiaDespachoCreate);
router.get('/guiasDespacho/:id', guiaDespachoController.guiaDespachoShow);
router.get('/guiasDespacho/:id/edit', guiaDespachoController.guiaDespachoEdit);
router.put('/guiasDespacho/:id',guiaDespachoController.guiaDespachoUpdate);
router.delete('/guiasDespacho/:id', guiaDespachoController.guiaDespachoDelete);

//rutas para obras
router.get('/obras', obraController.obraList);
router.get('/obras/new', obraController.obraNew);
router.post('/obras/create', obraController.obraCreate);
router.get('/obras/:id', obraController.obraShow);
router.get('/obras/:id/edit', obraController.obraEdit);
router.put('/obras/:id',obraController.obraUpdate);
router.delete('/obras/:id', obraController.obraDelete);

//rutas para ofertas
router.get('/ofertas', ofertaController.ofertaList);
router.get('/ofertas/new', ofertaController.ofertaNew);
router.post('/ofertas/create', ofertaController.ofertaCreate);
router.get('/ofertas/:id', ofertaController.ofertaShow);
router.get('/ofertas/:id/edit', ofertaController.ofertaEdit);
router.put('/ofertas/:id',ofertaController.ofertaUpdate);
router.delete('/ofertas/:id', ofertaController.ofertaDelete);

//rutas para ordenes de compra
router.get('/ordenesCompra', ordenCompraController.ordenCompraList);
router.get('/ordenesCompra/new', ordenCompraController.ordenCompraNew);
router.post('/ordenesCompra/create', ordenCompraController.ordenCompraCreate);
router.get('/ordenesCompra/:id', ordenCompraController.ordenCompraShow);
router.get('/ordenesCompra/:id/edit', ordenCompraController.ordenCompraEdit);
router.put('/ordenesCompra/:id',ordenCompraController.ordenCompraUpdate);
router.delete('/ordenesCompra/:id', ordenCompraController.ordenCompraDelete);

module.exports = router;