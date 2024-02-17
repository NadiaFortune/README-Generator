const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type:   "input",
        name:   "name of project",
        message:    "What is the name of your project?",
    }
    {
        type:   "input",
        name:   "description",
        message: "Please provide a short description of your project.",
    }
    {
        type:   "input",
        name:   "table of contents",
        message:    "Please note the Table of Contents.",
    }
    {
        type:   "input",
        name:   "installation",
        message:   "Please describe how to install your application.", 
    }
    {
        type:   "input",
        name:   "usage",
        message:    "Please describe how to use your application."
    }

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.)
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
