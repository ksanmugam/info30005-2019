var request = new XMLHttpRequest()

var foodArray = [];

request.open('GET', 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients='+getQueryParameters(), false)
request.setRequestHeader("X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com");
request.setRequestHeader("X-RapidAPI-Key", "ab90f6be77msh0447acdc77eb420p18e99ejsndcb18549f8bb");
request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        var temparray = []
        var tempaddresses = []
        data.forEach(distributor => {

            foodArray.push(distributor);

        })
    } else {
        console.log('error')
    }

};

request.send()

console.log(foodArray);

// var savedPromise = getData();
// console.log(savedPromise);
// savedPromise.then
// (function(returnVals) {
//     console.log(returnVals);
// })
// console.log(savedPromise);

// unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=chicken")
//     .header("X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
//     .header("X-RapidAPI-Key", "ab90f6be77msh0447acdc77eb420p18e99ejsndcb18549f8bb")
//     .end(function (result) {
//         // var food = JSON.parse(result.body);
//         var foods = result.body;
//         var foodData = [];
//
//         for (var i = 0; i < foods.length; i++) {
//             var food = foods[i];
//             // console.log(food);
//             foodData.push(food);
//         }
//         console.log(foodData);
//
//         // console.log(result.status, result.headers, result.body);
//     });

// function getFood() {
//     var reply = document.getElementById("frecipes").value;
//     return reply;
// }

function getQueryParameters() {
    var query = window.location.href.split('?')[1];

    //query won't be set if ? isn't in the URL
    if(!query) {
        return { };
    }

    var params = query.split('&');

    for(var i = 0, len = params.length; i < len; i++) {
        var pair = params[i].split('=');
    }

    return pair[1];
}

// creates a div into the html for each item in the food elements retrieved
function foodTemplate(food) {
    return `
    <div class="food">
    <img class="food-photo" src="${food.image}">
    <h2 class="food-name">${food.title}</h2>
    <h4 class="food-likes">${food.likes} liked this dish</h4>
    </div>
    `;
}

// retrieves the elements from the API and maps with foodTemplate function
document.getElementById("testapp").innerHTML = `
<h1 class="app-title">Recipes (${foodArray.length} results)</h1>
${foodArray.map(foodTemplate).join("")}
<p class="footer">These ${foodArray.length} food were added recently. Check back soon for updates.</p>
`;