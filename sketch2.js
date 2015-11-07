
var tiles = []; //array to hold all of our tile objects

var my_key = 'AIzaSyDzYZyqUA9AjEif5QDItyoUd4vu4OQKfGE'; 



function setup() {
  noCanvas();

  //Get the latitude and longitude + city name of all the cities from the array, then make a tile object for each
  for (var i = 0; i<cities_USA.length; i++) { //iterate through the list of cities

      //assign the lat long pair to a variable
      var ll = cities_USA[i].ll; 
      var pair = ll.split(','); //for every pair of lat and long, make it into an array

      //assign the city name to a variable
      var cityName = cities_USA[i].city; 

      //create a new tile object and push it to the array of tiles
      var t = new Tile(pair, cityName);
      tiles.push(t);
      
  }


  //Make API Calls to Google Street View Image API using those pairs of latitude and longitude
  for (var j = 0; j<tiles.length; j++) {
    var latitude = tiles[j].latLongPair[0];;
    var longitude = tiles[j].latLongPair[1];;
    // console.log ("Latitude of " + tiles[j].city + " is: " + latitude);
    // console.log("Longitude of " + tiles[j].city + " is: " + longitude);
    var query_url = "http://maps.googleapis.com/maps/api/streetview?size=120x120&location=" + latitude + "," + longitude + "&fov=50&heading=220&pitch=100&sensor=false&key=" + my_key;
    tiles[j].imgUrl = query_url; //assign each query URL to the imageUrl property in the object
  }

console.log(tiles);

  //Display all of the images of the skies by calling createImg on all the urls
  for (var n = 0; n<tiles.length; n++) {
    // createImg(tiles[n].imgUrl);
    tiles[n].drawTile();
  
  }

}

// function mouseOver() {

// }


// STEPS
// 1. write a constructor function for each tile that has
//   - latitude
//   - longitude
//   - name of city
//   - url to image
//   - width of image
//   - height of image
// 2. create an array "tiles" that will hold all of our tile objects once we make them
// 3. first, iterate through the data array and get the lat, long and city / state name for every 




 