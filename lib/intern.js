const Employee= require("./employee.js")
class Intern extends Employee{
    constructor(id,name,email,school){
        super(id,name,email)
        this.school=school
        this.type="Intern"
    }
    getschool(){
        return this.school
    }
}
module.exports=Intern