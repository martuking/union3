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
router.get('/montaje/', montajeController.pruebalimitadoresList);
router.get('/montaje/new', montajeController.montajeNew);
router.post('/montaje/create', montajeController.montajePost);
router.get('/montaje/:id', montajeController.montajeDetail);
router.get('/montaje/:id/edit', montajeController.pruebaLimitadiresEdit);
router.put('/montaje/:id',montajeController.montajeUpdate);
router.delete('/montaje/:id', montajeController.montajeDelete);

//rutas para personas
router.get('/persona/', personaController.pruebalimitadoresList);
router.get('/persona/new', personaController.personaNew);
router.post('/persona/create', personaController.personaPost);
router.get('/persona/:id', personaController.personaDetail);
router.get('/persona/:id/edit', personaController.pruebaLimitadiresEdit);
router.put('/persona/:id',personaController.personaUpdate);
router.delete('/persona/:id', personaController.personaDelete);

//rutas para reparaciones
router.get('/reparacion/', reparacionController.pruebalimitadoresList);
router.get('/reparacion/new', reparacionController.reparacionNew);
router.post('/reparacion/create', reparacionController.reparacionPost);
router.get('/reparacion/:id', reparacionController.reparacionDetail);
router.get('/reparacion/:id/edit', reparacionController.pruebaLimitadiresEdit);
router.put('/reparacion/:id',reparacionController.reparacionUpdate);
router.delete('/reparacion/:id', reparacionController.reparacionDelete);

//rutas para reportes
router.get('/reporte/', reporteController.pruebalimitadoresList);
router.get('/reporte/new', reporteController.reporteNew);
router.post('/reporte/create', reporteController.reportePost);
router.get('/reporte/:id', reporteController.reporteDetail);
router.get('/reporte/:id/edit', reporteController.pruebaLimitadiresEdit);
router.put('/reporte/:id',reporteController.reporteUpdate);
router.delete('/reporte/:id', reporteController.reporteDelete);

//rutas para revisiones
router.get('/revision/', revisionController.pruebalimitadoresList);
router.get('/revision/new', revisionController.revisionNew);
router.post('/revision/create', revisionController.revisionPost);
router.get('/revision/:id', revisionController.revisionDetail);
router.get('/revision/:id/edit', revisionController.pruebaLimitadiresEdit);
router.put('/revision/:id',revisionController.revisionUpdate);
router.delete('/revision/:id', revisionController.revisionDelete);

//rutas para adquisiciones
router.get('/adquisicion/', adquisicionController.pruebalimitadoresList);
router.get('/adquisicion/new', adquisicionController.adquisicionNew);
router.post('/adquisicion/create', adquisicionController.adquisicionPost);
router.get('/adquisicion/:id', adquisicionController.adquisicionDetail);
router.get('/adquisicion/:id/edit', adquisicionController.pruebaLimitadiresEdit);
router.put('/adquisicion/:id',adquisicionController.adquisicionUpdate);
router.delete('/adquisicion/:id', adquisicionController.adquisicionDelete);

//rutas para clientes
router.get('/cliente/', clienteController.pruebalimitadoresList);
router.get('/cliente/new', clienteController.clienteNew);
router.post('/cliente/create', clienteController.clientePost);
router.get('/cliente/:id', clienteController.clienteDetail);
router.get('/cliente/:id/edit', clienteController.pruebaLimitadiresEdit);
router.put('/cliente/:id',clienteController.clienteUpdate);
router.delete('/cliente/:id', clienteController.clienteDelete);

//rutas para contratos
router.get('/contrato/', contratoController.pruebalimitadoresList);
router.get('/contrato/new', contratoController.contratoNew);
router.post('/contrato/create', contratoController.contratoPost);
router.get('/contrato/:id', contratoController.contratoDetail);
router.get('/contrato/:id/edit', contratoController.pruebaLimitadiresEdit);
router.put('/contrato/:id',contratoController.contratoUpdate);
router.delete('/contrato/:id', contratoController.contratoDelete);

//rutas para gruas
router.get('/grua/', gruaController.pruebalimitadoresList);
router.get('/grua/new', gruaController.gruaNew);
router.post('/grua/create', gruaController.gruaPost);
router.get('/grua/:id', gruaController.gruaDetail);
router.get('/grua/:id/edit', gruaController.pruebaLimitadiresEdit);
router.put('/grua/:id',gruaController.gruaUpdate);
router.delete('/grua/:id', gruaController.gruaDelete);

//rutas para guias de despacho
router.get('/guiaDespacho/', guiaDespachoController.pruebalimitadoresList);
router.get('/guiaDespacho/new', guiaDespachoController.guiaDespachoNew);
router.post('/guiaDespacho/create', guiaDespachoController.guiaDespachoPost);
router.get('/guiaDespacho/:id', guiaDespachoController.guiaDespachoDetail);
router.get('/guiaDespacho/:id/edit', guiaDespachoController.pruebaLimitadiresEdit);
router.put('/guiaDespacho/:id',guiaDespachoController.guiaDespachoUpdate);
router.delete('/guiaDespacho/:id', guiaDespachoController.guiaDespachoDelete);

//rutas para obras
router.get('/obra/', obraController.pruebalimitadoresList);
router.get('/obra/new', obraController.obraNew);
router.post('/obra/create', obraController.obraPost);
router.get('/obra/:id', obraController.obraDetail);
router.get('/obra/:id/edit', obraController.pruebaLimitadiresEdit);
router.put('/obra/:id',obraController.obraUpdate);
router.delete('/obra/:id', obraController.obraDelete);

//rutas para ofertas
router.get('/oferta/', ofertaController.pruebalimitadoresList);
router.get('/oferta/new', ofertaController.ofertaNew);
router.post('/oferta/create', ofertaController.ofertaPost);
router.get('/oferta/:id', ofertaController.ofertaDetail);
router.get('/oferta/:id/edit', ofertaController.pruebaLimitadiresEdit);
router.put('/oferta/:id',ofertaController.ofertaUpdate);
router.delete('/oferta/:id', ofertaController.ofertaDelete);

//rutas para ordenes de compra
router.get('/ordenCompra/', ordenCompraController.pruebalimitadoresList);
router.get('/ordenCompra/new', ordenCompraController.ordenCompraNew);
router.post('/ordenCompra/create', ordenCompraController.ordenCompraPost);
router.get('/ordenCompra/:id', ordenCompraController.ordenCompraDetail);
router.get('/ordenCompra/:id/edit', ordenCompraController.pruebaLimitadiresEdit);
router.put('/ordenCompra/:id',ordenCompraController.ordenCompraUpdate);
router.delete('/ordenCompra/:id', ordenCompraController.ordenCompraDelete);

module.exports = router;