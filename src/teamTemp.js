const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

const mainHtml = (Employee)=>{
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1 justify-content-center"><h1>My Team Profiles</h1></span>
          </nav>
     <div class='container'>
     ${htmlGener(Employee)}
     </div> 
        
    </body>
    </html>`;
};
const htmlGener=(Employee)=>{
  const managerTemp=(Manager)=>{
    
    return `        <div class="row  no-gutters">
    <div class="col-md-4">
      <img src="..." class="card-img" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Manager</h5>
        <p class="card-text"><span>Manager Name</span> = ${Manager.getName()} .</br><span>Manager ID</span> = ${Manager.getId()}.</br> <span>Manager Email</span> = ${Manager.getEmail()} .</br>Office Number = ${Manager.officeNumber}</p>
        
      </div>
    </div>
  </div>
</div>  `
};
  const engineerTemp=(Engineer)=>{
      return `<div class="row  no-gutters">
      <div class="col-md-4">
        <img src="..." class="card-img" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Manager</h5>
          <p class="card-text"><span>Engineer Name</span> = ${Engineer.getName()} .</br><span>Engineer ID</span> = ${Engineer.getId()}.</br> <span>Engineer Email</span> = ${Engineer.getEmail()} .</br>Engineer Github = ${Engineer.getGithub}</p>
          
        </div>
      </div>
    </div>
  </div> `;
  };
  const interntemp=(Intern)=>{
    return `<div class="row  no-gutters">
    <div class="col-md-4">
      <img src="..." class="card-img" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Manager</h5>
        <p class="card-text"><span>Intern Name</span> = ${Intern.getName()} .</br><span>Intern ID</span> = ${Intern.getId()}.</br> <span>Intern Email</span> = ${Intern.getEmail()} .</br>School = ${Intern.getSchool()}</p>
        
      </div>
    </div>
  </div>
</div> `;
}


const team=[];
team.push(Employee.filter(Employee=>Employee.getRole()==='Manager').map(Manager=>managerTemp(Manager)).join(''));
team.push(Employee.filter(Employee=>Employee.getRole()==='Engineer').map(Engineer=>engineerTemp(Engineer)).join(''));
team.push(Employee.filter(Employee=>Employee.getRole()==='Intern').map(Intern=>InternTemp(Intern)).join(''));
return team.join('');
};
module.exports = mainHtml;