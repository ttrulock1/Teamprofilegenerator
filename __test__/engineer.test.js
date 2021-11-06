const Engineer=require("../lib/engineer.js")
const id=123
const name="Johanna Harris"
const email="jharris@gmail.com"
const github="github.com"
const type="Engineer"

const emp=new Engineer(id,name,email,github)

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

test("it stores Github?",()=> {
    expect(emp.getgithub()).toBe(github)
})

test("it stores the employee type?",()=> {
    expect(emp.gettype()).toBe(type)
})