export class Salary
{ 
  public  id:string;
  public  empid:string;
  public  salarydate:string;
  public   amount:string;
  public   salarymonth:string


constructor(id:string,empid:string,salarydate:string,amount:string, salarymonth:string){
   this.id=id,
    this.empid=empid,
    this.salarydate=salarydate,
    this .amount= amount,
    this.salarymonth=salarymonth;
    
    }
   
}
export interface Data {
     id:string;
    empid:string;
    salarydate:string;
     amount:string;
    salarymonth:string 
   
}  
