const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
// array of questions for user
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
      default: "Project Title",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("A valid project title is required.");
        }
        return true;
      },
    },
    {
      type: "input",
      message: "Write a description of your project.",
      name: "description",
      default: "Project Description",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("A valid project description is required.");
        }
        return true;
      },
    },
    {
      type: "input",
      message:
        "If applicable, describe the steps required to install your project for the Installation section.",
      name: "installation",
    },
    {
      type: "input",
      message: "Describe the installation process if any: ",
      name: "usage",
    },
    {
      type: "input",
      message: "Who are the contributors of this projects?",
      name: "contributing",
    },
    {
      type: "input",
      message: "Is there a test included? If so please list: ",
      name: "tests",
    },
    {
      type: "list",
      message: "Choose a license for your project.",
      choices: [
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Mozilla Public License 2.0",
        "Apache License 2.0",
        "MIT License",
        "Boost Software License 1.0",
        "The Unlicense",
      ],
      name: "license",
    },
    {
      type: "input",
      message: "What is your GitHub username? (No @ needed)",
      name: "username",
      default: "connietran-dev",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("A valid GitHub username is required.");
        }
        return true;
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email: ",
    },
  ]);
};

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
