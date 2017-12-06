var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LimitadoresSchema = new Schema({
	//responsable de la reparacion
	fechaPrueba : { type: Date, required: true },
	profesionalObra: { type: String, required:true },
	jefeMontaje: { type: Schema.Types.ObjectId, ref: 'Persona' },
	primerAyudanteMontaje: { type: Schema.Types.ObjectId, ref: 'Persona' },
	segundoAyudanteMontaje: { type: Schema.Types.ObjectId, ref: 'Persona' },

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
	peso3: { type: String, required:true },
	// a
	longitud3: { type: String, required:true },
	//funciona la elevacion y el carro, agregando
	peso4: { type: String, required:true },
	//no funcionala elevacion ni el carro
	//limitador de recorrido el carro se detiene a 
	longitud4: { type: String, required:true },
	


	



module.exports = mongoose.model('Limitadores', LimitadoresSchema);