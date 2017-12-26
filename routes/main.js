var express = require('express');
var router = express.Router();

// Require controller modules
var limitadores_controller = require('../controllers/limitadoresController');
var montaje_controller = require('../controllers/montajeController');
var persona_controller = require('../controllers/personaController');
var reparacion_controller = require('../controllers/reparacionController');
var reporte_controller = require('../controllers/reporteController');
var revision_controller = require('../controllers/revisionController');
var index_controller = require('../helpers/index')

/// LIMITADORES ROUTES ///

/* GET home page. */
router.get('/', index_controller.index);

/* GET request for creating a limitadores. NOTE This must come before routes that display limitadores (uses id) */
router.get('/limitadores/create', limitadores_controller.limitadores_create_get);

/* POST request for creating limitadores. */
router.post('/limitadores/create', limitadores_controller.limitadores_create_post);

/* GET request to delete limitadores. */
router.get('/limitadores/:id/delete', limitadores_controller.limitadores_delete_get);

// POST request to delete limitadores
router.post('/limitadores/:id/delete', limitadores_controller.limitadores_delete_post);

/* GET request to update limitadores. */
router.get('/limitadores/:id/update', limitadores_controller.limitadores_update_get);

// POST request to update limitadores
router.post('/limitadores/:id/update', limitadores_controller.limitadores_update_post);

/* GET request for one limitadores. */
router.get('/limitadores/:id', limitadores_controller.limitadores_detail);

/* GET request for list of all limitadores items. */
router.get('/limitadores', limitadores_controller.limitadores_list);

/// MONTAJE ROUTES ///

/* GET request for creating a montaje. NOTE This must come before routes that display montaje (uses id) */
router.get('/montaje/create', montaje_controller.montaje_create_get);

/* POST request for creating montaje. */
router.post('/montaje/create', montaje_controller.montaje_create_post);

/* GET request to delete montaje. */
router.get('/montaje/:id/delete', montaje_controller.montaje_delete_get);

// POST request to delete montaje
router.post('/montaje/:id/delete', montaje_controller.montaje_delete_post);

/* GET request to update montaje. */
router.get('/montaje/:id/update', montaje_controller.montaje_update_get);

// POST request to update montaje
router.post('/montaje/:id/update', montaje_controller.montaje_update_post);

/* GET request for one montaje. */
router.get('/montaje/:id', montaje_controller.montaje_detail);

/* GET request for list of all montaje items. */
router.get('/montajes', montaje_controller.montaje_list);

// PERSONA ROUTES ///

/* GET request for creating a persona. NOTE This must come before routes that display persona (uses id) */
router.get('/persona/create', persona_controller.persona_create_get);

/* POST request for creating persona. */
router.post('/persona/create', persona_controller.persona_create_post);

/* GET request to delete persona. */
router.get('/persona/:id/delete', persona_controller.persona_delete_get);

// POST request to delete persona
router.post('/persona/:id/delete', persona_controller.persona_delete_post);

/* GET request to update persona. */
router.get('/persona/:id/update', persona_controller.persona_update_get);

// POST request to update persona
router.post('/persona/:id/update', persona_controller.persona_update_post);

/* GET request for one persona. */
router.get('/persona/:id', persona_controller.persona_detail);

/* GET request for list of all persona items. */
router.get('/personas', persona_controller.persona_list);

// REPARACION ROUTES ///

/* GET request for creating a reparacion. NOTE This must come before routes that display reparacion (uses id) */
router.get('/reparacion/create', reparacion_controller.reparacion_create_get);

/* POST request for creating reparacion. */
router.post('/reparacion/create', reparacion_controller.reparacion_create_post);

/* GET request to delete reparacion. */
router.get('/reparacion/:id/delete', reparacion_controller.reparacion_delete_get);

// POST request to delete reparacion
router.post('/reparacion/:id/delete', reparacion_controller.reparacion_delete_post);

/* GET request to update reparacion. */
router.get('/reparacion/:id/update', reparacion_controller.reparacion_update_get);

// POST request to update reparacion
router.post('/reparacion/:id/update', reparacion_controller.reparacion_update_post);

/* GET request for one reparacion. */
router.get('/reparacion/:id', reparacion_controller.reparacion_detail);

/* GET request for list of all reparacion items. */
router.get('/reparaciones', reparacion_controller.reparacion_list);

// REPORTE ROUTES ///

/* GET request for creating a reporte. NOTE This must come before routes that display reporte (uses id) */
router.get('/reporte/create', reporte_controller.reporte_create_get);

/* POST request for creating reporte. */
router.post('/reporte/create', reporte_controller.reporte_create_post);

/* GET request to delete reporte. */
router.get('/reporte/:id/delete', reporte_controller.reporte_delete_get);

// POST request to delete reporte
router.post('/reporte/:id/delete', reporte_controller.reporte_delete_post);

/* GET request to update reporte. */
router.get('/reporte/:id/update', reporte_controller.reporte_update_get);

// POST request to update reporte
router.post('/reporte/:id/update', reporte_controller.reporte_update_post);

/* GET request for one reporte. */
router.get('/reporte/:id', reporte_controller.reporte_detail);

/* GET request for list of all reporte items. */
router.get('/reportes', reporte_controller.reporte_list);

// REVISION ROUTES ///

/* GET request for creating a revision. NOTE This must come before routes that display revision (uses id) */
router.get('/revision/create', revision_controller.revision_create_get);

/* POST request for creating revision. */
router.post('/revision/create', revision_controller.revision_create_post);

/* GET request to delete revision. */
router.get('/revision/:id/delete', revision_controller.revision_delete_get);

// POST request to delete revision
router.post('/revision/:id/delete', revision_controller.revision_delete_post);

/* GET request to update revision. */
router.get('/revision/:id/update', revision_controller.revision_update_get);

// POST request to update revision
router.post('/revision/:id/update', revision_controller.revision_update_post);

/* GET request for one revision. */
router.get('/revision/:id', revision_controller.revision_detail);

/* GET request for list of all revision items. */
router.get('/revisiones', revision_controller.revision_list);


module.exports = router;