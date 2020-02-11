const fs = require('fs');
const until = require('util');
const inquirer = require('inquirer');
const electron = require('electron');
const axios = require('axios');

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "gitPro",
            message: "What is your GitHub account?"
        },
        {
            type: "input",
            name: "color",
            message: "What is your favorite color?"
        },
        {
            type: "input",
            name: "gitPro",
            message: "What city do you live in?"
        }
    ]);
}

function generateHTML(answers, data) {
    return `
    `
}

async function init() {
    console.log("test");
    try {
        const answers = await promptUser();

        const {data} = await axios.get(`https://api.github.com/users/${answers.gitPro}/repos?per_page=100`)


        const html = generateHTML(answers, data);

        await writeFileAsync("index.html", html);
        console.log("wrote an html file");
    } catch(err) {
        console.log(err);
    }
}

init();