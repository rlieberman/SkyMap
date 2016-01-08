
var allCities = []; //array to hold all of the latitude and longitudes
var my_key = 'AIzaSyDzYZyqUA9AjEif5QDItyoUd4vu4OQKfGE'; 

var latitude;
var longitude;

var skyURLS = []; //empty array to hold all of the street view URLs



function setup() {

  noCanvas();

//Get the latitude and longitude of all the cities from the array
  for (var i = 0; i<cities_USA.length; i++) { //iterate through the list of cities
      var city = cities_USA[i].ll; //assign the lat long pair to a variable
      var pair = city.split(','); //for every pair of lat and long, make it into an array
      allCities.push(pair); //then push the mini array to the larger array of all cities
  }

  console.log(allCities[100]);


  //Make API Calls to Google Street View Image API using those pairs of latitude and longitude
  for (var j = 0; j<allCities.length; j++) {
    var latitude = allCities[j][0];
    var longitude = allCities[j][1];
    // console.log ("Latitude is: " + latitude);
    // console.log("Longitude is: " + longitude);
    var query_url = "http://maps.googleapis.com/maps/api/streetview?size=120x120&location=" + latitude + "," + longitude + "&fov=50&heading=220&pitch=100&sensor=false&key=" + my_key;
    skyURLS.push(query_url);
  }

  // console.log(skyURLS);


  //Display all of the images of the skies by calling createImg on all the urls
  for (var n = 0; n<skyURLS.length; n++) {
    createImg(skyURLS[n]);
    // loadImage(skyURLS[n], drawImage);
  }


}

// function drawImage(img) {
//   console.log(skyURLS);
//   image(img,0,0);
//   // console.log("Image " + n + "has loaded");
// }







 