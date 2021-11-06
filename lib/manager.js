const Employee= require("./employee.js")
class Manager extends Employee{
    constructor(id,name,email,officenumber){
        super(id,name,email)
        this.officenumber=officenumber
        this.type="Manager"
    }
    getofficenumber(){
        return this.officenumber
    }
}
module.exports=Manager