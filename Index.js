const fs = require('fs');
const inquirer = require('inquirer');
const employee = require('./lib/Employee');
const Manager=require('./lib/Manager')
const Intern = require('./lib/Intern');
const team =[];
const mainHtml=require('./src/teamTemp')

const questions={ managerLIst :[{
    type: 'text',
    name: 'name',
    message: 'What is the manager name?',
    validate:(nameInput)=>{
        if(nameInput){return true}else{
            console.log('Plz!! Can you enter your name?');
        }
    }
  },
  {
    type: 'text',
    name: 'id',
    message: 'What is the manager id?',
    validate:(idInput)=>{
        if(idInput){return true}else{
            console.log('Plz!! Can you enter your id?');
        }
    }
  },
  {
    type: 'text',
    name: 'email',
    message: 'What is the manager email address?',
    validate:(emailInput)=>{
        if(emailInput){return true}else{
            console.log('Plz!! Can you enter your email address?');
        }
    }
  },
  {
    type: 'text',
    name: 'officeNumber',
    message: 'What is the manager office number?',
    validate:(officeNumberInput)=>{
        if(officeNumberInput){return true}else{
            console.log('Plz!! Can you enter your office number?');
        }
    }
  }
 ],


 engineerList :[{
    type: 'text',
    name: 'name',
    message: 'What is the engineer name?',
    validate:(nameInput)=>{
        if(nameInput){return true}else{
            console.log('Plz!! Can you enter the engineer name?');
        }
    }
  },{
    type: 'text',
    name: 'id',
    message: 'What is the engineer id?',
    validate:(idInput)=>{
        if(idInput){return true}else{
            console.log('Plz!! Can you enter the engineer id?');
        }
    }
  },{
    type: 'text',
    name: 'email',
    message: 'What is the engineer email address?',
    validate:(emailInput)=>{
        if(emailInput){return true}else{
            console.log('Plz!! Can you enter the enginner email address?');
        }
    }
  },{
    type: 'text',
    name: 'git',
    message: 'What is the enginner github user name?',
    validate:(gitInput)=>{
        if(gitInput){return true}else{
            console.log('Plz!! Can you enter the engineer github user name?');
        }
    }
  }],


  InternList :[{
    type: 'text',
    name: 'name',
    message: 'What is the intern name?',
    validate:(nameInput)=>{
        if(nameInput){return true}else{
            console.log('Plz!! Can you enter the intern name?');
        }
    }
  },
  {
    type: 'text',
    name: 'id',
    message: 'What is the intern id?',
    validate:(idInput)=>{
        if(idInput){return true}else{
            console.log('Plz!! Can you enter the intern id?');
        }
    }
  },
  {
    type: 'text',
    name: 'email',
    message: 'What is the intern email address?',
    validate:(emailInput)=>{
        if(emailInput){return true}else{
            console.log('Plz!! Can you enter the intern email address?');
        }
    }
  },
  {
    type: 'text',
    name: 'school',
    message: 'What is the  intern school?',
    validate:(schoolInput)=>{
        if(schoolInput){return true}else{
            console.log('Plz!! Can you enter the  intern school?');
        }
    }
  }],
choiceQuestion:[{
    type: 'action',
    name: 'choices',
    message: ['engineer','intern','finish building'],
    validate:(choicesInput)=>{
        if(choicesInput){return true}else{
            console.log('Plz!! Can you enter one of the following choices?');
        }
    }

}]};

  const addEmployee =()=>{
    inquirer
    .prompt(questions.managerLIst)
    .then(answers =>{
        const addManager= new Manager(answers.name,answers.id,answers.email,answers.officeNumber);
        team.push(addManager);
        fs.appendFile('MyTeam.html',mainHtml,function(err){if(err)throw err;})
        
    }).catch(error => {
        if(error.isTtyError) {
            console.log('something wents wrong')
        } else {
            
            choiceOption();
          
        }
      });

  }

  const choiceOption =()=>{
    inquirer
    .prompt(questions.choiceQuestion)
    .then(answers =>{
      switch(answers.choices)
      {
          case 'intern':
          addIntern();
          break;

          case 'engineer':
          addEnginner();
          break;

          case 'finish':
          saveHtmlFile();
    
          break;
      }
        
        

    }).catch(error => {
        if(error.isTtyError) {
            console.log('something wents wrong')
        } else {
            addEnginner();
          
        }
      });

  };
  const addIntern =()=>{
    inquirer
    .prompt(questions.InternList)
    .then(answers =>{
    const addNewIntern = new Intern(answers.name, answers.id, answers.email,answers.school);
    team.push(addNewIntern);
        
    }).catch(error => {
        if(error.isTtyError) {
            console.log('something wents wrong')
        } else {
            saveHtmlFile();
            console.log('Saved Intern')
            choiceOption();
          
        }
      });
  }
  const addEnginner =()=>{
    inquirer
    .prompt(questions.engineerList)
    .then(answers =>{
    const addNewEngineer = new Engineer(answers.name, answers.id, answers.email,answers.git);
    team.push(addNewEngineer);
    
    }).catch(error => {
        if(error.isTtyError) {
            console.log('something wents wrong')
        } else {
            choiceOption();
            
          
        }
      });
}
  const saveHtmlFile =()=>{
      fs.writeFile('myTeam.html',mainHtml,function(err){
          if (err) throw err;
          console.log('YOUR TEAM PROFILE BEEN SAVED')
      }).catch(error => {
        if(error.isTtyError) {
            console.log('something wents wrong')
        } else {
            
          
        }
      });
}
  addEmployee();