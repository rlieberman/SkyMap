
//Loads cities from cities.json file, from https://github.com/deremer/Cities
var rolloverText; //global var cityText



function setup() {

  noCanvas();

  //STEPS
  //load the cities.json file
  //for every city in the cities.json file
  //get the image from the image directory based on the city name
  //display the image as a DOM element on the page
  //pass it to the rolloverCity method to display the name of the city that the mouse is on

  rolloverText = createDiv(' '); //create one P instead of multiple so you can only have one showing at a time, no need for mouseOut
  
  loadCities();

}

//function to load the cities.json file
function loadCities() {

  loadJSON('cities.json', function(cities){
    for (var i = 0; i < cities.length; i ++) {
      // console.log(cities[i]); //cities[i] is an object for each city
      var cityName = cities[i].city;
      insertImage(cityName);
    }
  });
}

function insertImage(city) {

  //create a container div that will hold the image
  var containerDiv = document.createElement('div');
  containerDiv.setAttribute('class', 'container'); //give it the class container

  //create the image
  var img = document.createElement('img'); //create an empty image element
  img.src = 'images/' + encodeURIComponent(city) + '.jpg';

  //once the image has loaded
  img.addEventListener('load', function(){ 

    containerDiv.appendChild(img); //append the image to the container div 
    document.body.appendChild(containerDiv); //append container to the body of the page

  });
  
  rolloverCity(img, city, containerDiv); //pass the image and the city to rollover city function

}


//function to show the city name when you rollover it
function rolloverCity (imgElt, cityName, containerDiv) {

   imgElt.addEventListener('mouseover', showCityName); //when you mouseOver the image element ,show the city name

   function showCityName(){

      var imgX = imgElt.offsetLeft;
      var imgY = imgElt.offsetTop;
      console.log(imgX, imgY, cityName);

      // var overlayDiv = document.createElement('div'); //create a div that will be a dark overlay
      // overlayDiv.setAttribute('class', 'overlay'); 

      // //POSITIONING NOT WORKING
      // overlayDiv.style.left(imgX); 
      // overlayDiv.style.top(imgY); 


     

      //change the innerHTML and positioning of the rollover text

      rolloverText.html(cityName);
      rolloverText.position(imgX, imgY);
      containerDiv.appendChild(rolloverText); //NOT WORKING
      
   

   }

}





//FUNCTIONALITY TO ADD
//1. add rollovers
//2. fix positioning of the text within the boxes (maybe make the image element a parent of the p that goes inside it?)
//3. fix responsiveness of the grid

 