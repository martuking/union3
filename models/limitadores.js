var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LimitadoresSchema = new Schema({
	//responsable de la reparacion
	fecha_prueba : { type: Date, required: true },
	jefe_montaje: { type: Schema.Types.ObjectId, ref: 'Persona' },
	primer_ayudante_montaje: { type: Schema.Types.ObjectId, ref: 'Persona' },
	segundo_ayudante_montaje: { type: Schema.Types.ObjectId, ref: 'Persona' },

	//datos cliente
	empresas_id: { type: Schema.Types.ObjectId, ref: 'Clientes' },
	empresas_nombre: { type: String, required:true },
	obras_id: { type: Schema.Types.ObjectId, ref: 'Obras' },
	obra_nombre: { type: String, required:true },
	obra_ubicacion: { type: String, required:true },
	obra_contacto: { type: String, required:true },

	//informacion grua
	gruas_id: { type: Schema.Types.ObjectId, ref: 'Gruas'},
	gruas_marca: { type: String, required:true },
	gruas_modelo: { type: String, required:true },
	gruas_numero_serie: { type: String, required:true },

	//prueba de limitadores
	//limitador del momento funciona la elevacion y el carro
	peso1: { type: Number, required:true },
	//agregando peso2 no funciona la elevacion ni el carro
	peso2: { type: Number, required:true },
	//limitador de carrera de gancho
	//gancho se detiene a
	longitud1: { type: Number, required:true },
	//del suelo y a
	longitud2: { type: Number, required:true },
	//de la punta
	//limitador de carga maxima
	// cargando 
	peso3: { type: Number, required:true },
	// a
	longitud3: { type: Number, required:true },
	//funciona la elevacion y el carro, agregando
	peso4: { type: Number, required:true },
	//no funcionala elevacion ni el carro
	//limitador de recorrido el carro se detiene a 
	longitud4: { type: Number, required:true },
	//del pie y a
	longitud5: { type: Number, required:true },
	//de la punta el giro se detiene a los 
	giro1 : { type: Number, required:true },
	//y a los 
	giro2: { type: Number, required:true }
	//si se toma como 0° el norte
});

LimitadoresSchema.virtual('id').get(function(){
	return '/main/limitadores/' + this._id;
});

module.exports = mongoose.model('Limitadores', LimitadoresSchema);