var unirest = require('unirest');

unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=chicken")
    .header("X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", "ab90f6be77msh0447acdc77eb420p18e99ejsndcb18549f8bb")
    .end(function (result) {
        console.log(result.status, result.headers, result.body);
    });

//
// const app = document.getElementById('root')
//
// const logo = document.createElement('img')
// logo.src = 'public/resources/logo.png'
//
// const container = document.createElement('div')
// container.setAttribute('class', 'container')
//
// app.appendChild(logo)
// app.appendChild(container)
