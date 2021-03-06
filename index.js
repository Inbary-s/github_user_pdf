// Require fs
const fs = require("fs");
// Require Inquirer
const inquirer = require("inquirer");
// Require Axios
const axios = require("axios");
// Require HTML/PDF
const pdf = require("html-pdf");
const awesome = require("@fortawesome/fontawesome-free")
var starCount1;

function setStarcount(starCount) {
    starCount1 = starCount;
}

createPage = (data, color, starCount1) => {
    return (`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel = "stylesheet" href = "assets/reset.css">  
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
    <link href="https://fonts.googleapis.com/css?family=Darker+Grotesque&display=swap" rel="stylesheet">
  
    <title>GitHub User Profile PDF</title>
    <style>
    body{
        font-family: 'Darker Grotesque', sans-serif;
        align-content: center;
        color: white;
    }
    .avatar img{
        border-radius: 100px;
        width: 200px;
        height: 200px;
        border: solid 12px rgb(255, 255, 255);
        -webkit-box-shadow: -12px 12px 12px 0px rgba(255,255,255,0.36), -6px 6px 6px 0px rgba(255, 255, 255, 0.603);
    -moz-box-shadow: -12px 12px 12px 0px rgba(255,255,255,0.36), -6px 6px 6px 0px rgba(255, 255, 255, 0.603);
    box-shadow: -12px 12px 12px 0px rgba(255,255,255,0.36), -6px 6px 6px 0px rgba(255, 255, 255, 0.603);
        position: absolute;
        z-index: 2;
        left: 20%;
    }
    .container {
        /* background-color: rgba(255, 255, 255, 0.5); */
        /* padding: 50px; */
        margin-top: 50px;
        border-radius: 15px;
        /* position: relative; */
        top: 100px;
        z-index: 0;
    }
    .textContainer {
        background-color: rgba(255, 255, 255, 0.5);
        padding: 40px;
        /* margin-bottom: 20px; */
        border-radius: 15px;
        position: relative;
        top: 100px;
        z-index: 0;
    }
    .cardContainer {
        position: relative;
        top: 100px;
        padding: 10px;
        margin: 20px;
        align-items: center;
        width: 100%;
    }
    .card{
        background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%);
        margin: 20px;
        padding: 40px;
        height: 150px;
        width: 200px;
        border-radius: 15px;
        border: none;
    }
    .cards {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        align-content: center;
        }
    .pub { grid-area: 1 / 1 / 2 / 2; }
    .followers { grid-area: 1 / 2 / 2 / 3; }
    .following { grid-area: 2 / 1 / 3 / 3; }
    .star { grid-area: 2 / 2 / 3 / 3; }
    a {
        color: white;
        margin: 5%;
    }
    i{
        padding-right: 5px;
    }
    h2 {
        font-weight: 600;
        padding-top: 50px;
    }
    h4{
        font-weight: 600;
        color: currentColor;
    }
    span{width: 100%;
        text-align: center;}  
    </style>
</head>
<body style="background-color:${color}">
    <div class="container justify-content-center">
        <div class="avatar justify-content-center">
            <img src="${data.avatar_url}" id='avatarImg'/>
        </div>
        <div class="container textContainer row justify-content-center">
            <span>
                <h2 style="color:${color}">Hi!</h2>
                <h3>My name is ${data.name}</h3>
                <h5>Currently @ ${data.company}</h5>
                <a href="https://www.google.com/maps/place/${data.location}"><i class="fas fa-location-arrow"></i><span class="location_link"> ${data.location}</span></a>
                <a href="${data.html_url}"><span class="github_link"><i class="fab fa-github-alt"></i> Github</span></a>
                <a href="${data.blog}"><span class="linkedin_link"><i class="fas fa-rss"></i> Blog</span></a>
                <h5>${data.bio}</h5>
            </span>
        </div>
    </div>  
    <div class="cardContainer">
        <div class="cards">
            <div class="row justify-content-center">
                <div class="col card pub">
                    <h4 style="color:${color}">Public Repos</h4>
                    <h5 style="color:${color}">${data.public_repos}</h5>
                </div>
                <div class="col card followers">
                    <h4 style="color:${color}">Followers</h4>
                    <h5 style="color:${color}">${data.followers}</h5>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col card following">
                    <h4 style="color:${color}">Following</h4>
                    <h5 style="color:${color}">${data.following}</h5>
                </div>
                <div class="col card star">
                    <h4 style="color:${color}">Stars</h4>
                    <h5 style="color:${color}">${data.starCount}</h5>
                </div>
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
    }, {
        type: "input",
        name: "githubUn",
        message: "What is your GitHub username?"
    }
]).then(function ({ githubUn, color }) {
    const queryUrl = `https://api.github.com/users/${githubUn}`
    const queryUrlStar = `https://api.github.com/users/${githubUn}/starred`
    axios.get(queryUrlStar).then(function (res1) {
        let starCount = res1.data.length;
        axios.get(queryUrl).then(function (res) {
            res.data.starCount = starCount;
            fs.writeFileSync(res.data.login + ".html", createPage(res.data, (color === "white") ? "black" : color));
            const options = { format: 'Letter', timeout: 30000 };
            const filename = "./" + res.data.login;
            const html = fs.readFileSync(filename + ".html", "utf8");
            pdf.create(html, options).toFile(filename + ".pdf", function (err, res) {
                if (err) return console.log(err);
                console.log("Success!!! Here is your file, make sure to check the HTML version as well!  " + res.filename);
            });
        })
    });
});



