 var request = new XMLHttpRequest()
 var gmapdata = [];
 var gmapaddresses = [];

request.open('GET', '/api/distributors', false)
request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        var temparray = []
        var tempaddresses = []
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

            tempaddresses.push(distributor.address);
        })
    } else {
        console.log('error')
    }

    gmapdata = [...temparray];
    gmapaddresses = [...tempaddresses];
}

request.send()


 function initMap() {
     var infowindow = new google.maps.InfoWindow();

     var map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: -37.8136, lng: 144.9631},
         zoom: 15,
         mapTypeControl: false,
         streetViewControl: false,
         fullscreenControl: false,
     });

     var foodicon = {
         url: 'https://www.pngrepo.com/png/251521/170/food-pin.png',
         scaledSize: new google.maps.Size(60, 60), // scaled size
         origin: new google.maps.Point(0,0), // origin
         anchor: new google.maps.Point(30, 60) // anchor
     };

     var coordinates = [{}];
     var geocoder = new google.maps.Geocoder();
     var bounds = new google.maps.LatLngBounds();



     function findLatLang(address, geocoder, mainMap) {
         return new Promise(function(resolve, reject) {
             geocoder.geocode({
                 'address': address
             }, function(results, status) {
                 if (status === 'OK') {
                     resolve([results[0].geometry.location.lat(), results[0].geometry.location.lng()]);
                 } else {
                     reject(new Error('Couldnt\'t find the location ' + address));
                 }
             })
         })
     }

     function getPoints(geocoder, map) {
         let combined = []
         let locationData = [];
         for (let i = 0; i < gmapaddresses.length; i++) {
             locationData.push(findLatLang(gmapaddresses[i], geocoder, map))
         }
         return locationData // array of promises
     }


     function placeMarker( loc ) {
         var latLng = new google.maps.LatLng( loc[1], loc[2]);
         var marker = new google.maps.Marker({
             position : latLng,
             map      : map,
             icon     : foodicon
         });
         google.maps.event.addListener(marker, 'click', function(){
             infowindow.close(); // Close previously opened infowindow
             infowindow.setContent( "<div id='infowindow'>"+ loc[0]);
             infowindow.open(map, marker);
         });
         bounds.extend(marker.getPosition());
         map.fitBounds(bounds);

         marker.addListener('click', function() {
             map.setZoom(15);
             map.setCenter(marker.getPosition());
         });
     }

     var locations = getPoints(geocoder, map)

     Promise.all(locations)
         .then(function(returnVals) {
             var combined = []
              for (let j = 0; j < gmapdata.length; j++) {
                    combined.push([gmapdata[j], returnVals[j][0], returnVals[j][1]]);
             }
             for(var i=0; i<gmapdata.length; i++) {
                 placeMarker(combined[i]);
             }
         });





 }












