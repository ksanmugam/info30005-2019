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
                    '<h2>' + distributor.food_name.toString() + '</h2>' +
                    '<h4>' + distributor.ingredients.toString() + '</h4>' +
                    '<h4>' + distributor.name + '</h4>' +
                    '<h4>' + distributor.email + '</h4>' +
                    '<h4>' + distributor.phone + '</h4>' +
                    '<h4>' + distributor.rating + ' stars' + '</h4>' +
                    '<h4>' + distributor.cuisine + '</h4>' +
                    '<h4>' + distributor.portion_size + '</h4>' +
                    '<h4>' + distributor.allergens + '</h4>' +
                    '<h4>' + distributor.price + '</h4>' +
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