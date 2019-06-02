var requestOne = new XMLHttpRequest()
var request = new XMLHttpRequest()
var posts = [];
var currUser = "";



getUser();

console.log(currUser);

request.open('GET', '/api/distributors/name/' + currUser, false)
request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)


    if (request.status >= 200 && request.status < 400) {
        var temparray = []
        data.forEach(distributor => {
                temparray.push([
                    '<h1>' + distributor.food_name.toString() + '</h1>' +
                    '<h2>' + distributor.ingredients.toString() + '</h2>' +
                    '<h2>' + distributor.name + '</h2>' +
                    '<h2>' + distributor.email + '</h2>' +
                    '<h2>' + distributor.phone + '</h2>' +
                    '<h2>' + distributor.rating + ' stars' + '</h2>' +
                    '<h2>' + distributor.cuisine + '</h2>' +
                    '<h2>' + distributor.portion_size + '</h2>' +
                    '<h2>' + distributor.allergens + '</h2>' +
                    '<h2>' + distributor.price + '</h2>' +
                    '</div>' +
                    '</div>'])
        })
    } else {
        console.log('error')
    }

    posts = [...temparray];
    console.log(temparray);
}

request.send()


function getUser() {
    requestOne.open('GET', '/getUser', false)
    requestOne.onload = function () {
    currUser = this.response;

    }
    requestOne.send();
}




//
//
// function foodTemplate(food) {
//     return `
//     <div class="food">
//     <img class="food-photo" src="${food.image}">
//     <h2 class="food-name">${food.title}</h2>
//     <h4 class="food-likes">${food.likes} liked this dish</h4>
//     </div>
//     `;
// }
// // retrieves the elements from the API and maps with foodTemplate function
document.getElementById("post").innerHTML = posts[0];

document.getElementById("post").innerHTML = `
<h1 class="app-title">${posts.length} Listing</h1>
${posts.join("")}`;