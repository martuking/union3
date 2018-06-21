var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pruebaLimitadoresSchema = new Schema({
	//responsables de la reparacion
	personas:[{ type: Schema.Types.ObjectId, ref: 'Persona' }],
	//datos cliente
	cliente:{ type: Schema.Types.ObjectId, ref: 'Cliente'},
	//datos obra
	obra:{ type: Schema.Types.ObjectId, ref: 'Obra' },
	//informacion persona de contacto
	personaContacto:{ type: Schema.Types.ObjectId, ref: 'PersonaForanea' },
	//informacion grua
	grua:{ type: Schema.Types.ObjectId, ref: 'Gruas' },
	
	fechaPrueba : { type: Date, required: true },
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

pruebaLimitadoresSchema.virtual('id').get(function(){
	return '/api/pruebaLimitadores/' + this._id;
});

module.exports = mongoose.model('pruebaLimitadores', pruebaLimitadoresSchema);