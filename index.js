// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


function generateReadMe({
    title, description, install, usage, contribution, test, license, gitHub, email}) {
    `# ${title} ${licenseBadge(license)}

    ## Description
    
    ${description}
    
    ## Table of Contents
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    
    ## Installation
    
    ${install}
    
    ## Usage
    
    ${usage}
    
    
    ## License
    
    ${licenseContent(license)}
    
    ## How to Contribute
    
    ${contribution}
    
    ## Tests
    
    ${test}
    
    ## Questions
    
    My GitHub: ${gitHub}
    
    Contact: ${email}`
}
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, (err) =>
      err ? console.log(err) : console.log(`Successfully created ${fileName}.md!`)
    );
}

function licenseContent(license) {
    if (license === 'MIT') {
        return ""
    }
}

function licenseBadge(license) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your README?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Input a description:',
        },
        {
            type: 'input',
            name: 'install',
            message: 'Input installation instructions:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Input useage information:',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Input contribution guidelines:',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Input testing instructions:',
        },
        {
            type: 'input',
            name: 'license',
            message: 'Choose __ as a license:',
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is your GitHub username?:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is your email?',
        },
      ])
      .then((answers) => {
        const readMeContent = generateReadMe(answers);
        writeToFile('README', readMeContent);
      })
}

// Function call to initialize app
init();
