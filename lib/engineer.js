const Employee= require("./employee.js")
class Engineer extends Employee{
    constructor(id,name,email,github){
        super(id,name,email)
        this.github=github
        this.type="Engineer"
    }
    getgithub(){
        return this.github
    }
}
module.exports=Engineer