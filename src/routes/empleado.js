const { json } = require("express");
const express=require("express");
const Empleado=require("../models/Empleado");

const router=express.Router();

//Metodo para obtener el listado de Empleados
router.get("/empleado",(req,res)=>{
    Empleado.find().select({_id:0,emple_codigo:1,emple_nombre:1,emple_apellido:1,emple_puesto:1,emple_funcion:1,emple_fechaContratacion:1,emple_salario:1})
    .then((data)=>{
        res.json(data)
    })
    .catch((error)=>res.send(error));
})

//Metodo para obtener un Empleado en especifico
router.get("/empleado/:emple_nombre",(req,res)=>{
    const{ emple_nombre }=req.params;

    Empleado.find({emple_nombre:emple_nombre}).select({_id:0})
    .then((data)=>{
        res.json(data);
    })
    .catch((error)=>res.send(error));
})


//Metodo para Actualizar un EMpleado especifico
router.put("/empleado/:emple_nombre",async (req,res)=>{
    const { emple_nombre }=req.params;
    nuevoEmpleado = req.body;

    Empleado.updateOne({emple_nombre:emple_nombre},
        {$set: {emple_nombre:nuevoEmpleado.emple_nombre}})
    .then((data)=>{res.json(data)})
    .catch((error)=>res.send(error));
})


//Borrando Empleado por codigo
router.delete("/empleado/:emple_codigo",(req,res)=>{
    const { emple_codigo }=req.params;

    Empleado.deleteOne({emple_codigo:emple_codigo})
    .then((data)=>res.json(data))
    .catch((error)=>res.send(error));
})


//Crear Nuevo Empleado
router.post("/crear_empleado",(req,res)=>{
    const nuevoEmpleado = Empleados(req.body);

       nuevoEmpleado.save()
        .then((data)=>{
            console.log(data);
            res.json(data);
        })
        .catch((error)=>{
            console.error(error);
            res.json(error);
        })
});

module.exports = router;
