const express = require('express')
var cors = require('cors')
const app = express()
const db = require('./db')
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
 
// parse application/json
app.use(bodyParser.json())
 
app.post('/addemp', function (req, res) {
   db.addEmps(req.body).then((data)=>{
         res.json(data)
      }).catch(err=>{
         res.status(400).json({'msg':err})
      });
 })

 app.post('/add-salary', function (req, res) {
   db.addSalary(req.body).then((data)=>{
         res.json(data)
      }).catch(err=>{
         res.status(400).json({'msg':err})
      });
 })


app.post('/update-emp', function (req, res) {
   db.updateEmps(req.body).then((data)=>{
      res.json(data)
   }).catch(err=>{
      res.status(400).json({'msg':err})
   });
})


app.get('/get-all-emp', function (req, res) {
   db.getEmps().then(data=>{
    //    console.log(data);
       res.json(data)
   })
})

app.get('/get-designation', function (req, res) {
   db.getDesignation().then(data=>{
    //    console.log(data);
       res.json(data)
   })
})


app.get('/get-all-salary', function (req, res) {
   db.getsalary().then(data=>{
    //    console.log(data);
       res.json(data)
   })
})

app.post('/deleteemp', function (req, res) {
   db.deleteEmp(req.body).then((data)=>{
      res.json(data)
   }).catch(err=>{
      res.status(400).json({'msg':err})
   });
})

app.post('/emp-login', function (req, res) {
    db.empLogin(req.body).then(data=>{
         data = data[0]
         if(data !== undefined){
            data.accessToken='test'
            data.refreshToken='refresh-test'
            data.roles=["ADMIN"]
            res.json(data)
         }else{
            res.status(400).json({error:'invalid user'})
         }
    });
 })


 app.post('/emp-salary-from', function (req, res) {
   db.deleteEmp(req.body).then((data)=>{
      res.json(data)
   }).catch(err=>{
      res.status(400).json({'msg':err})
   });
})
 
app.post('/emp-salary-dashboard', function (req, res) {
   db.salaryFrom(req.body).then((data)=>{
      res.json(data)
   }).catch(err=>{
      res.status(400).json({'msg':err})
   });
})
 
 
app.listen(3000)