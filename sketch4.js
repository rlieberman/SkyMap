
var imgElts = []; //array to hold all of the image elements in case i want to do something with them
var my_key = 'AIzaSyDzYZyqUA9AjEif5QDItyoUd4vu4OQKfGE'; 
var cityText; //global var cityText


function setup() {

  noCanvas();

  cityText = createP(' '); //create one P instead of multiple so you can only have one showing at a time, no need for mouseOut

//Get the latitude and longitude of all the cities from the array
  for (var i = 0; i<cities_USA.length; i++) { //iterate through the list of cities

      var cityName = cities_USA[i].city; //assign the city name to a variable
      var pair = cities_USA[i].ll.split(','); //for every pair of lat and long, make it into an array
      var latitude = pair[0]; //in that array, latitude is 0
      var longitude = pair[1]; //longitude is 1

      //for every city
      //1.construct a query URL using the latitude and longitude
      var query_url = "http://maps.googleapis.com/maps/api/streetview?size=120x120&location=" + latitude + "," + longitude + "&fov=50&heading=220&pitch=100&sensor=false&key=" + my_key;
      
      
      //2. check to see if an image exists for that particular latitude and longitude by querying another API
      var check_url = "http://maps.google.com/cbk?output=json&hl=en&ll=" + latitude + "," + longitude + "&radius=50&cb_client=maps_sv&v=4"
      var json_check = loadJSON(check_url, gotData, 'jsonp'); //load the json file and log the object to the console


      //NEXT: check if the object is empty -- write a function to check if the object is empty
      //IF THE OBJECT IS NOT EMPTY (maybe use hasOwnProperty), then load the image DOM element


      //3. create an image DOM element from that query URL
      var img = createImg(query_url); //variable img is a DOM element from that query URL

      //4. pushing it to array of image elements -- not sure why we need this, also unshit vs push?
      imgElts.unshift(img); 

      //5. passing the DOM element and the cityName to rolloverCity function
      rolloverCity(img, cityName); 

      
  
  }
}


function gotData (data) {
  console.log(data);
  console.log(jQuery.isEmptyObject(data));
}


//function to show the city name when you rollover it
function rolloverCity (imgElt, cityName) {

   imgElt.mouseOver(showCityName); //when you mouseOver the image element ,show the city name

   function showCityName(){
      console.log(cityName);
    
      var imgX = imgElt.elt.x;
      var imgY = imgElt.elt.y;
      cityText.html(cityName);
      cityText.position(imgX+20,imgY+20);
   

   }

}





//FUNCTIONALITY TO ADD
//1. add rollovers
//2. remove the photos from inside and that have the "sorry no image" on them
  // - can do this by: checking file size, checking average color, accessing some other data which tells me if the image exists or not
//3. fix positioning of the text within the boxes (maybe make the image element a parent of the p that goes inside it?)


 