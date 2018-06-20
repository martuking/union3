var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pruebaLimitadoresSchema = new Schema({
	//responsable de la reparacion
	personas:[
		{
			id: { type: Schema.Types.ObjectId, ref: 'Persona' },
			detalle: {
				nombre: { type: String, required:true },
				apellido: { type: String, required:true },
				cargo: { type: String, required:true }
			}  
		}
	],
	//datos cliente
	cliente:{
		id: { type: Schema.Types.ObjectId, ref: 'Clientes' },
		nombre: { type: String, required:true }
	},
	//datos obra
	obra:{
		id: { type: Schema.Types.ObjectId, ref: 'Obras' },
		nombre: { type: String, required:true },
		direccion: { type: String, required:true }
	},
	//informacion persona de contacto
	personaContacto:{
		id: { type: Schema.Types.ObjectId, ref: 'PersonaForanea' },
		nombre: { type: String, required:true },
		apellido: { type: String, required:true },
		telefono: { type: String, required:true },
		cargo: { type: String, required:true }
	},
	//informacion grua
	grua:{
		id: { type: Schema.Types.ObjectId, ref: 'Gruas'},
		marca: { type: String, required:true },
		modelo: { type: String, required:true },
		numeroSerie: { type: String, required:true }
	},
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