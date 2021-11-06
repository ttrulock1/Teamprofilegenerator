const inquirer = require("inquirer");
const fs=require("fs");
const generatehtml= require("./src/pagetemplate.js");
const Manager= require("./lib/manager.js");
const Intern= require("./lib/intern.js");
const Engineer= require("./lib/engineer.js");
const { constants } = require("buffer");
const empquestions=[
    {message:"ID?",
    name: "id",
    },
    {message:"Name?",
    name:"name"},
    {message:"Email",
    name:"email"}
];

var team=[];

start();

function start(){
    console.log("Welcome to Team Generator.");
    mainmenu();
}
async function mainmenu(){
    const res=await inquirer.prompt({
        message:"What would you like to do?",
        name:"action",
        type:"list",
        choices:[
            "add manager","add engineer","add intern", "finish"
        ]
    });
    switch(res.action){
        case "add manager": return addmanager();
        case "add engineer": return addengineer();
        case "add intern": return addintern();
        case "finish": return finish();
    }

}
async function addmanager(){
    const res=await inquirer.prompt([...empquestions,{
        message:"office number?",
        name:"officenumber",
    }]);
    const emp= new Manager(res.id,res.name,res.email,res.officenumber);
    team.push(emp);
    console.log("manager added.");
    mainmenu();
}

async function addengineer(){
    const res=await inquirer.prompt([...empquestions,{
        message:"github?",
        name:"github",
    }]);
    const emp= new Engineer(res.id,res.name,res.email,res.github);
    team.push(emp);

    console.log("engineer added.");
    mainmenu();

}
async function addintern(){
    const res=await inquirer.prompt([...empquestions,{
        message:"School?",
        name:"school",
    }]);
    const emp= new Intern (res.id,res.name,res.email,res.school);
    team.push(emp);
    console.log("intern added.");
    mainmenu();
}
function finish(){
    const filepath="./dist/team.html";
    const data= generatehtml(team);
    fs.writeFileSync(filepath,data);
    console.log("Thanks for using the app.");
    process.exit();
}