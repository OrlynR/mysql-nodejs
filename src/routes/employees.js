const { Router}=require('express');
const router= Router();
const mysqlConnection = require('../database')

router.get('/',(req,res) => {
    mysqlConnection.query('SELECT * FROM employees', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})

//para obtener un dato de la base de datos
router.get('/:id', (req,res)=> {
  const{ id } = req.params;
  mysqlConnection.query('SELECT * FROM employees WHERE id = ?', [id],(err,rows,fields)=>{
      if(!err){
          res.json(rows[0]);
      }else{
          console.log(err);
      }
  })
  console.log(id);
})

//insertar un dato en la base de datos
router.post ('/',(req,res) => {
    const { name,salary } = req.body;

    mysqlConnection.query('INSERT INTO employees (name, salary) VALUES (?,?)',[name,salary],(err,rows,fields) =>{
        if(!err){
            res.json({staus:'employeed saved'})
        }else{
            console.log(err);
        }
    });
  
})

// Listo este servicio
router.put('/:id',(req,res) => {
    //son los datos que quiero actualizar
    const {name,salary}= req.body;
    //El dato por el cual ejecuto la actualización
    const { id } = req.params;
      mysqlConnection.query('UPDATE employees SET name = ?, salary=? WHERE id = ?',[name,salary,id],(err,rows,fields) =>{
        if(!err){
            res.json({staus:'employeed updated'})
        }else{
            console.log(err);
        }
    });

})




module.exports = router;