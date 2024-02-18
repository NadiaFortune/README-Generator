const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const filename = 'UserREADME.md';


// array of questions for user
const questions = [
    {
        type:   "input",
        name:   "name of project",
        message:    "What is the name of your project?",
    },
    //"Table of Contents" title to go here in output doc
    {
        type:   "input",
        name:   "description",
        message: "Please provide a short description of your project.",
    },
    {
        type:   "input",
        name:   "installation",
        message:   "Please describe how to install your application.", 
    },
    {
        type:   "input",
        name:   "usage",
        message:    "Please describe how to use your application.",
    },
    {
        type:   "checkbox",
        name:   "license",
        message:    "Please select the licence you'd like to use for this project.",
        choices:    [
                        "Apache License 2.0", 
                        "MIT License", 
                        "General Public License", 
                        "Boost Software License", 
                        "Eclipse Public LIcense", 
                        "Creative Commons Zero 1.0",
                        "Other",
                    ]
    },
    {
        type:   "input",
        name:   "contributing",
        message:    "Please name any other contributors to this project. If none, put N/A.",
    },
    {
        type:   "input",
        name:   "tests",
        message:    "Please give details on any testing required. If none, put N/A.",
    },
    {
        type:   "input",
        name:   "github",
        message:    "What is your GitHub user name? (Please provide the profile link)",
    },
    {
        type:   "input",
        name:   "email",
        message:    "What is your email address?",
    },

];

// function to write README file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('Your README file has been created!');
        }
    });
}

//Promt user to answer questions
inquirer.prompt(questions)
    .then(answers => {
        const { filename, data } = answers;

writeToFile(filename, data);
    });






// // function to initialize program
function init() {
    }

// // function call to initialize program
init();
