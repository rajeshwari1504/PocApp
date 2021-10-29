var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "pocapp"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports.getEmps = () =>{
    //select query
    return new Promise((res,rej)=>{
        var sql = "select * from employee";
        con.query(sql, function (err, result) {
            console.log(result)
          if (err) throw err;
          res(result);
        });
    })

}



module.exports.getDesignation = () =>{
  //select query
  return new Promise((res,rej)=>{
      var sql = "select * from designation";
      con.query(sql, function (err, result) {
          console.log(result)
        if (err) throw err;
        res(result);
      });
  })

}

module.exports.getsalary= () =>{
  //select query
  return new Promise((res,rej)=>{
      var sql = "select * from  salary";
      con.query(sql, function (err, result) {
          console.log(result)
        if (err) throw err;
        res(result);
      });
  })

}
// module.exports.getSalaryData = () =>{
//   //select query
//   return new Promise((res,rej)=>{
//       var sql = "select  * from salarydata ";
//       con.query(sql, function (err, result) {
//           console.log(result)
//         if (err) throw err;
//         res(result);
//       });
//   })

// }

module.exports.empLogin = (emp) =>{
  //select query
  return new Promise((res,rej)=>{
      var sql = `select * from employee where id=${emp.id} and password="${emp.password}"`;
      console.log(sql)
      con.query(sql, function (err, result) {
          console.log(result)
        if (err) throw err;
        res(result);
      });
  })

}

module.exports.addEmps = (emp) =>{
    return new Promise((res,rej)=>{
        var sql = `INSERT INTO employee (name,joiningdate, designation,password) VALUES ('${emp.name}','${emp.joiningdate}', '${emp.designation}','${emp.password}')`;
         con.query(sql, function (err, result) {
          console.log(result)
        if (err) throw err;
        console.log("1 record inserted");
        res(result);
      });
    })
}

module.exports.addSalary = (emp) =>{
  return new Promise((res,rej)=>{
      var sql = `INSERT INTO salary (empid,salarydate,amount,salarymonth) VALUES ('${emp.empid}','${emp.salarydate}', '${emp.amount}','${emp.salarymonth}')`;
       con.query(sql, function (err, result) {
        console.log(result)
      if (err) throw err;
      console.log("1 record inserted");
      res(result);
    });

  })

}

module.exports.updateEmps = (emp) =>{
  console.log('updateempinput',emp)
  return new Promise((res,rej)=>{
    if(emp.id){
      var sql = `UPDATE employee set name='${emp.name}',joiningdate='${emp.joiningdate}',designation='${emp.designation}',password='${emp.password}' where id=${emp.id}`;
     console.log(sql)
      con.query(sql, function (err, result) {
          console.log(result)
        if (err) throw err;
        console.log("1 record inserted");
        res(result);
      });
    }else{
      rej();
    }
  })
}

module.exports.salaryFrom = (emp) =>{
  return new Promise((res,rej)=>{
    if(emp.id){
    var sql = `select * from salary where empid="${emp.id}"`;
    console.log(sql)
    con.query(sql, function (err, result) {
      console.log(result)
    if (err) throw err;
    console.log("1 record inserted");
    res(result);
  });
}else{
  rej();
}
})
}
module.exports.deleteEmp = (emp) =>{
  return new Promise((res,rej)=>{
    if(emp.id){
    var sql = `delete from employee where id="${emp.id}"`;
    con.query(sql, function (err, result) {
      console.log(result)
    if (err) throw err;
    console.log("1 record inserted");
    res(result);
  });
}else{
  rej();
}
})
}
