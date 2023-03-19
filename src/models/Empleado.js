const mongoose=require("mongoose");

const empleadoSchema = mongoose.Schema({
    emple_codigo: {
        type: String,
        required: true
    },
    emple_nombre: {
        type: String,
        required: true
    },
    emple_apellido: {
        type: String,
        required: false
    },
    emple_puesto: {
        type: String,
        required: false
    },
    emple_funcion: {
        type: String,
        required: false
    },
    emple_fechaContratacion: {
        type: String,
        required: false
    },
    emple_salario: {
        type: String,
        required: false
    }
});

//conexion a la collection empleado a MONGO DB
module.exports=mongoose.model('empleado',empleadoSchema);
