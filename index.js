const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const electron = require('electron');
const axios = require('axios');
const puppeteer = require('puppeteer')

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
        }
    ]);
}

function generateHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>${data.login}</h1>
            <img src="${data.avatar_url}">
            <h3>Location: ${data.location}</h3>
            <h3>Bio: ${data.bio}</h3>
        <h2>GitHub Stats!</h2>
            <h3>Profile: ${data.html_url}</h3>
            <p>Followers: ${data.followers}</p>
            <p>Following: ${data.following}</p>
            <p>Public Repos: ${data.public_repos}</p>
    </body>
    </html>`
}



async function init() {
    console.log("test");
    try {
        const answers = await promptUser();

        const {data} = await axios.get(`https://api.github.com/users/${answers.gitPro}`)

        const html = generateHTML(data);

        fs.writeFile("index.html", html, (err) => {
            if (err) throw err;
            console.log("wrote to index!")
        });

        // console.log("Profile Pic: " + data.avatar_url);
        // console.log("GitHub: " + data.html_url);
        // console.log("Location: " + data.location);
        // console.log("Username: " + data.login);
        // console.log("Bio: " + data.bio);
        // console.log("Following: " + data.following);
        // console.log("Followers: " + data.followers);
        // console.log("Public Repos: " + data.public_repos);
        // console.log(html);

        (async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
           
            await page.goto("file://C:/Users/dusti/desktop/dynamicPort/index.html");
            await page.pdf({path: 'portfolio.pdf', format: 'A4'});
            await browser.close();
          })();
       
    } catch(err) {
        console.log(err);
    }

    
}

init();

