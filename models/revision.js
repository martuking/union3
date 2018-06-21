var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RevisionSchema = new Schema({

	//revision e inspeccion
	fechaInspeccion: { type: Date, required: true },
	//datos de las personas que hicieron la revision
	personas:[{ type: Schema.Types.ObjectId, ref: 'Persona' }],
	//datos cliente	
	cliente:{ type: Schema.Types.ObjectId, ref: 'Cliente' },
	//datos obra
	obra:{ type: Schema.Types.ObjectId, ref: 'Obra' },
	//informacion persona de contacto
	personaContacto:{ type: Schema.Types.ObjectId, ref: 'PersonaForanea' },
	//informacion grua
	grua:{ type: Schema.Types.ObjectId, ref: 'Grua' },
	//datos revisiones anteriores
	revisionesAnteriores:[{ type: Schema.Types.ObjectId, ref: 'Revisione' }],
	//datos montaje 
	montaje:{type: Schema.Types.ObjectId, ref: 'Montaje' },
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
});

RevisionSchema.virtual('id').get(function(){
	return '/main/revision/' + this._id;
});





module.exports = mongoose.model('Revision', RevisionSchema);