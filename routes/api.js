var express = require('express');
var router = express.Router();

// Require controller modules
var pruebaLimitadoresController = require('../controllers/pruebaLimitadoresController');
var montajeController = require('../controllers/montajeController');
var personaController = require('../controllers/personaController');
var reparacionController = require('../controllers/reparacionController');
var reporteController = require('../controllers/reporteController');
var revisionController = require('../controllers/revisionController');
var adquisicionControlller = require('../controllers/adquisicionController');
var clienteController = require('../controllers/clienteController');
var contratoController = require('../controllers/contratoController');
var gruaController = require('../controllers/gruaController');
var guiaDespachoController = require('../controllers/guiaDespachoController');
var obraController = require('../controllers/obraController');
var ofertaController = require('../controllers/ofertaController');
var ordenCompraController = require('../controllers/ordenCompraController');

var indexController = require('../helpers/index');

//ruta para el indice
router.get('/', indexController.index);

//rutas para pruebas de limitadores
router.get('/pruebaLimitadores/', pruebaLimitadoresController.pruebalimitadoresList);
router.get('/pruebaLimitadores/new', pruebaLimitadoresController.pruebaLimitadoresNew);
router.post('/pruebaLimitadores/create', pruebaLimitadoresController.pruebaLimitadoresPost);
router.get('/pruebaLimitadores/:id', pruebaLimitadoresController.pruebaLimitadoresDetail);
router.get('/pruebaLimitadores/:id/edit', pruebaLimitadoresController.pruebaLimitadiresEdit);
router.put('/pruebaLimitadores/:id',pruebaLimitadoresController.pruebaLimitadoresUpdate);
router.delete('/pruebaLimitadores/:id', pruebaLimitadoresController.pruebaLimitadoresDelete);

//rutas para montajes
router.get('/montajes/', montajeController.pruebalimitadoresList);
router.get('/montajes/new', montajeController.montajeNew);
router.post('/montajes/create', montajeController.montajePost);
router.get('/montajes/:id', montajeController.montajeDetail);
router.get('/montajes/:id/edit', montajeController.pruebaLimitadiresEdit);
router.put('/montajes/:id',montajeController.montajeUpdate);
router.delete('/montajes/:id', montajeController.montajeDelete);

//rutas para personas
router.get('/personas/', personaController.pruebalimitadoresList);
router.get('/personas/new', personaController.personaNew);
router.post('/personas/create', personaController.personaPost);
router.get('/personas/:id', personaController.personaDetail);
router.get('/personas/:id/edit', personaController.pruebaLimitadiresEdit);
router.put('/personas/:id',personaController.personaUpdate);
router.delete('/personas/:id', personaController.personaDelete);

//rutas para reparaciones
router.get('/reparaciones/', reparacionController.pruebalimitadoresList);
router.get('/reparaciones/new', reparacionController.reparacionNew);
router.post('/reparaciones/create', reparacionController.reparacionPost);
router.get('/reparaciones/:id', reparacionController.reparacionDetail);
router.get('/reparaciones/:id/edit', reparacionController.pruebaLimitadiresEdit);
router.put('/reparaciones/:id',reparacionController.reparacionUpdate);
router.delete('/reparaciones/:id', reparacionController.reparacionDelete);

//rutas para reportes
router.get('/reportes/', reporteController.pruebalimitadoresList);
router.get('/reportes/new', reporteController.reporteNew);
router.post('/reportes/create', reporteController.reportePost);
router.get('/reportes/:id', reporteController.reporteDetail);
router.get('/reportes/:id/edit', reporteController.pruebaLimitadiresEdit);
router.put('/reportes/:id',reporteController.reporteUpdate);
router.delete('/reportes/:id', reporteController.reporteDelete);

//rutas para revisiones
router.get('/revisiones/', revisionController.pruebalimitadoresList);
router.get('/revisiones/new', revisionController.revisionNew);
router.post('/revisiones/create', revisionController.revisionPost);
router.get('/revisiones/:id', revisionController.revisionDetail);
router.get('/revisiones/:id/edit', revisionController.pruebaLimitadiresEdit);
router.put('/revisiones/:id',revisionController.revisionUpdate);
router.delete('/revisiones/:id', revisionController.revisionDelete);

//rutas para adquisiciones
router.get('/adquisiciones/', adquisicionController.pruebalimitadoresList);
router.get('/adquisiciones/new', adquisicionController.adquisicionNew);
router.post('/adquisiciones/create', adquisicionController.adquisicionPost);
router.get('/adquisiciones/:id', adquisicionController.adquisicionDetail);
router.get('/adquisiciones/:id/edit', adquisicionController.pruebaLimitadiresEdit);
router.put('/adquisiciones/:id',adquisicionController.adquisicionUpdate);
router.delete('/adquisiciones/:id', adquisicionController.adquisicionDelete);

//rutas para clientes
router.get('/clientes/', clienteController.pruebalimitadoresList);
router.get('/clientes/new', clienteController.clienteNew);
router.post('/clientes/create', clienteController.clientePost);
router.get('/clientes/:id', clienteController.clienteDetail);
router.get('/clientes/:id/edit', clienteController.pruebaLimitadiresEdit);
router.put('/clientes/:id',clienteController.clienteUpdate);
router.delete('/clientes/:id', clienteController.clienteDelete);

//rutas para contratos
router.get('/contratos/', contratoController.pruebalimitadoresList);
router.get('/contratos/new', contratoController.contratoNew);
router.post('/contratos/create', contratoController.contratoPost);
router.get('/contratos/:id', contratoController.contratoDetail);
router.get('/contratos/:id/edit', contratoController.pruebaLimitadiresEdit);
router.put('/contratos/:id',contratoController.contratoUpdate);
router.delete('/contratos/:id', contratoController.contratoDelete);

//rutas para gruas
router.get('/gruas/', gruaController.pruebalimitadoresList);
router.get('/gruas/new', gruaController.gruaNew);
router.post('/gruas/create', gruaController.gruaPost);
router.get('/gruas/:id', gruaController.gruaDetail);
router.get('/gruas/:id/edit', gruaController.pruebaLimitadiresEdit);
router.put('/gruas/:id',gruaController.gruaUpdate);
router.delete('/gruas/:id', gruaController.gruaDelete);

//rutas para guias de despacho
router.get('/guiasDespacho/', guiaDespachoController.pruebalimitadoresList);
router.get('/guiasDespacho/new', guiaDespachoController.guiaDespachoNew);
router.post('/guiasDespacho/create', guiaDespachoController.guiaDespachoPost);
router.get('/guiasDespacho/:id', guiaDespachoController.guiaDespachoDetail);
router.get('/guiasDespacho/:id/edit', guiaDespachoController.pruebaLimitadiresEdit);
router.put('/guiasDespacho/:id',guiaDespachoController.guiaDespachoUpdate);
router.delete('/guiasDespacho/:id', guiaDespachoController.guiaDespachoDelete);

//rutas para obras
router.get('/obras/', obraController.pruebalimitadoresList);
router.get('/obras/new', obraController.obraNew);
router.post('/obras/create', obraController.obraPost);
router.get('/obras/:id', obraController.obraDetail);
router.get('/obras/:id/edit', obraController.pruebaLimitadiresEdit);
router.put('/obras/:id',obraController.obraUpdate);
router.delete('/obras/:id', obraController.obraDelete);

//rutas para ofertas
router.get('/ofertas/', ofertaController.pruebalimitadoresList);
router.get('/ofertas/new', ofertaController.ofertaNew);
router.post('/ofertas/create', ofertaController.ofertaPost);
router.get('/ofertas/:id', ofertaController.ofertaDetail);
router.get('/ofertas/:id/edit', ofertaController.pruebaLimitadiresEdit);
router.put('/ofertas/:id',ofertaController.ofertaUpdate);
router.delete('/ofertas/:id', ofertaController.ofertaDelete);

//rutas para ordenes de compra
router.get('/ordenesCompra/', ordenCompraController.pruebalimitadoresList);
router.get('/ordenesCompra/new', ordenCompraController.ordenCompraNew);
router.post('/ordenesCompra/create', ordenCompraController.ordenCompraPost);
router.get('/ordenesCompra/:id', ordenCompraController.ordenCompraDetail);
router.get('/ordenesCompra/:id/edit', ordenCompraController.pruebaLimitadiresEdit);
router.put('/ordenesCompra/:id',ordenCompraController.ordenCompraUpdate);
router.delete('/ordenesCompra/:id', ordenCompraController.ordenCompraDelete);

module.exports = router;