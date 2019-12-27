// Require fs
const fs = require("fs");
// Require Inquirer
const inquirer = require("inquirer");
// Require Axios
const axios = require("axios");

createPage = (data, color) =>{
return (`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <title>Document</title>
</head>
<body style="background-color:${color}">
    <div class="banner">
    <div class="avatar">
    <img src="${data.avatar_url}" id='avatarImg'/>
    </div>
        <h2>
            Hi!
        </h2>
        <h4>My name is ${data.login}</h4>
        <h5>Currently @ Trilogy Education Services</h5>
        <a href="https://www.google.com/maps/place/${data.location}"><span class="location_link">${data.location}</span></a>
        <a href="${data.html_url}"><span class="github_link">Github</span></a>
        <a href="${data.blog}"><span class="linkedin_link">Blog</span></a>

    </div>
    
    <h3>I build things</h3>

    <div class="cards">
        <div class="row">
            <div class="col-md-5">
                <h2>Public Repos</h2>
                <h2>${data.public_repos}</h2>
            </div>
            <div class="col-md-5">
                <h2>followers</h2>
                <h2>${data.followers}</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md-5">
                <h2>following</h2>
                <h2>${data.following}</h2>
            </div>
            <div class="col-md-5">
                <h2>stars</h2>
                <h2>100</h2>
            </div>
        </div>
    </div>
</body>
</html>`)
}

// Prompt User for questions:
inquirer.prompt([
    {
        type: "input",
        name: "color",
        message: "What is your favorite color?"
    },{
        type: "input",
        name: "githubUn",
        message: "What is your GitHub username?"
    }
]).then(function({ githubUn, color }) {
    const queryUrl = `https://api.github.com/users/${githubUn}`
    axios.get(queryUrl).then(function(res) {
        fs.writeFile("githubun.html", createPage(res.data, color), function(err) {
            if (err) {
              throw err;
            }
        console.log(res.data);
        console.log(queryUrl);
        return res.data;
    })
    });
})