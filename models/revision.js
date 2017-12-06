var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RevisionSchema = new Schema({

	//revision e inspeccion
	fechaInspeccion: { type: Date, required: true },
	encargadoMantencion: { type: Schema.Types.ObjectId, ref: 'Persona' },
	ayudanteMantencion: { type: Schema.Types.ObjectId, ref: 'Persona' },
	gruero: { type: Schema.Types.ObjectId, ref: 'Persona' },

	//datos cliente	
	empresa: { type: String, required:true },
	obra: { type: String, required:true },
	direccion: { type: String, required:true },
	profesionalObra: { type: String, required:true },

	//informacion grua
	marca: { type: String, required:true },
	tipo: { type: String, required:true },
	modelo: { type: String, required:true },
	numero: { type: String, required:true },

	//datos montajes y revisiones anteriores
	fechaMontaje: { type: Date, required: true },
	numeroMontaje: {type: Schema.Types.ObjectId, ref: 'Montaje' },
	fechaUltimaMantencion: { type: Date, required: true },
	ultimaRevision: { type: Schema.Types.ObjectId, ref: 'Revision' },

	//operaciones a realizar
	//engrase
	soportePunto: { type: String, required:true },
	topeGancho: { type: String, required:true },
	coronaRodillos: { type: String, required:true },
	dentadoExterior: { type: String, required:true },

	//revision de cables
	sentidoEnrrolladoCorrecto: { type: String, required:true },
	revisionRodamientosPoleas: { type: String, required:true },
	poleasBienAlineadas: { type: String, required:true },
	poleasApoyoBuenEstado: { type: String, required:true },

	//estado de clables de elevacion
	cableBuenEstado: { type: String, required:true },
	oxidacion: { type: String, required:true },
	alambresRotos: { type: String, required:true },
	alambresDesgastados: { type: String, required:true },
	alambresFlojos: { type: String, required:true },
	cordonesDesequilibrados: { type: String, required:true },
	distorcionMalosTramos: { type: String, required:true },

	//estructura
	fisurasTorreta: { type: String, required:true },
	fisurasTirantes: { type: String, required:true },
	fisurasFlechas: { type: String, required:true },

	//motores de reduccion
	revisionContatores: { type: String, required:true },
	repacionContactores: { type: String, required:true },
	tornillosBorneAmarillo: { type: String, required:true },

	//seguridad
	limitadoresCarga: { type: String, required:true },
	limitadoresRecorrido: { type: String, required:true },
	vientosArrostramineto: { type: String, required:true },
	tomaTierra: { type: String, required:true },
	verticalidadHorizontalidad: { type: String, required:true },

	//traslacion
	topesVia: { type: String, required:true },
	pinzasAmarreCarriles: { type: String, required:true },
	nivelesVias: { type: String, required:true },

	//revisiones trimestrales
	cableElevacion: { type: String, required:true },
	cableCarro: { type: String, required:true },

	//estructura
	aprietePasadores: { type: String, required:true },
	aprieteTornillos: { type: String, required:true },
	aprieteEjes: { type: String, required:true },

	//mecanismos
	pinonAtaqueCorona: { type: String, required:true },
	galetsCorona: { type: String, required:true },
	motorElevacion: { type: String, required:true },
	polinesCarro: { type: String, required:true },

	//seguridad
	cargaEnPunta: { type: String, required:true },
	capachos: { type: String, required:true }







module.exports = mongoose.model('Revision', RevisionSchema);