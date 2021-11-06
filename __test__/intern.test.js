const Intern=require("../lib/intern.js")
const id=123
const name="Asia Mena"
const email="Amina@gmail.com"
const school="University of Georgia"
const type="Intern"

const emp=new Intern(id,name,email,school)

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

test("it stores the School?",()=> {
    expect(emp.getschool()).toBe(school)
})

test("it stores the employee type?",()=> {
    expect(emp.gettype()).toBe(type)
})