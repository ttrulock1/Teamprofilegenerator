const Employee=require("../lib/employee.js")
const id=123
const name="Johanna Harris"
const email="jharris@gmail.com"
const type="Employee"

const emp=new Employee(id,name,email)

test("it creates an employee object?",()=> {
    expect(typeof(emp)).toBe("object")
})

test("it stores the ID?",()=> {
    expect(emp.getid()).toBe(id)
})

test("it stores the name?",()=> {
    expect(emp.getname()).toBe(name)
})

test("it stores the email?",()=> {
    expect(emp.getemail()).toBe(email)
})

test("it stores the employee type?",()=> {
    expect(emp.gettype()).toBe(type)
})