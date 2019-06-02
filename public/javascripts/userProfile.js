var requestOne = new XMLHttpRequest()
var request = new XMLHttpRequest()
var requestTwo = new XMLHttpRequest()
var posts = [];
var post_IDs = [];
var currUser = "";



getUser();


//Gets all the posts of the current user and the IDs of each
request.open('GET', '/api/distributors/name/' + currUser, false)
request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)


    if (request.status >= 200 && request.status < 400) {
        var temparray = []
        var temp_IDs = []
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

                temp_IDs.push(distributor._id);
        })
    } else {
        console.log('error')
    }

    posts = [...temparray];
    console.log(temparray);
    post_IDs = [...temp_IDs];
    console.log(temp_IDs);
}

request.send()

//Gets current user
function getUser() {
    requestOne.open('GET', '/getUser', false)
    requestOne.onload = function () {
    currUser = this.response;

    }
    requestOne.send();
}

//Deletes one distributor listing of current user
function deleteOldestPost() {
    requestTwo.open('DELETE', '/distributors/id/' + post_IDs.pop().toString(), false)
    requestOne.onload = function () {
    }
    requestTwo.send();
}



document.getElementById("post").innerHTML = posts[0];

document.getElementById("post").innerHTML = `
<h1 class="app-title">${posts.length} Listing</h1>
${posts.join("")}`;