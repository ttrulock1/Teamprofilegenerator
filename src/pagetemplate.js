module.exports=function (team){
    var html=`
        <!DOCTYPE html>
    <html>
     <head>
      <title>The team</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style> 
      
body {
    margin:0;
    text-align:center;
    background-color:tan;
}
header {
    background-color:navy;
    color:white;
    padding:20px;
    margin-bottom:50px;
}
div {
    display:inline-block;
    vertical-align:top;
    padding:10px;
    border-radius:10px;
}
.Manager{
    background-color:lightsteelblue;
}
.Engineer{
    background-color:skyblue;
}
.Intern{
    background-color:lightblue;
}

      </style>
    </head>
    <body>
    <header>
    <h1> the team </h1>

    </header>
   
    `;
    for(let emp of team){
        html+=`
        <div class="${emp.gettype()}">
        <h3>${emp.gettype()}</h3>
        <h2>${emp.getname()}</h2>
        <p>id: ${emp.getid()}</p>
        <p>email: ${emp.getemail()}</p>`;
        if(emp.gettype()==="Manager"){
            html+=`
            <p>office number: ${emp.getofficenumber()}</p>`;
        }
    else if(emp.gettype()==="Engineer"){
        html+=`
        <p>github: ${emp.getgithub()}</p>`;
    }
    else if(emp.gettype()==="Intern"){
        html+=`
        <p>school: ${emp.getschool()}</p>`;
    }
        html+=`
        </div>
        `;
    }
    html+=`

    </body>
    </html>
    `;
    return html;
}