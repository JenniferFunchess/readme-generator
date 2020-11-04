const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");

const writeFileAsync = util.promisify(fs.writeFile);

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
      message: "Please describe the steps required to install your project:",
      name: "installation",
    },
    {
      type: "input",
      message:
        "Provide instructions and examples of your project in use for the Usage section. ",
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
        "No License",
      ],
      name: "license",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
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
// function writeToFile(fileName, data) {}

// function to initialize program
const init = async () => {
  console.log("hi");
  try {
    const answers = await questions();

    const md = generateMarkdown(answers);

    await writeFileAsync("Readme.md", md);

    console.log("Successfully wrote to index.html");
  } catch (err) {
    console.log(err);
  }
};

// function call to initialize program
init();
