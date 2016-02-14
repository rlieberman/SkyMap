
//Loads cities from cities.json file, from https://github.com/deremer/Cities
//Uses this to do CSS for responsive photo grid https://css-tricks.com/seamless-responsive-photo-grid/
var rolloverText; //global var called rolloverText



function setup() { //using p5 to load the json file

  noCanvas();


  //create an empty div for the rollover text
  rolloverText = document.createElement('div');
  rolloverText.setAttribute("class", "rollover");   //add class rollover
  
  loadCities(); //call loadCities function

}

//STEPS
//load the cities.json file
//for every city in the cities.json file
//get the image from the image directory based on the city name
//display the image as a DOM element on the page
//pass it to the rolloverCity method to display the name of the city that the mouse is on

function loadCities() { //function to load the cities.json file

  loadJSON('cities.json', function(cities){ 
    for (var i = 0; i < cities.length; i++) {
      var cityName = cities[i].city;
      insertImage(cityName); //callback to insert the image for each city name
    }
  });
}


function insertImage(city) {

  var containerDiv = document.createElement('div');   //create a container div that will hold the image
  containerDiv.setAttribute('class', 'container'); //give it the class container

  //create the image from the folder of images
  var img = document.createElement('img'); //create an empty image element
  img.src = 'images/' + encodeURIComponent(city) + '.jpg'; //set the source to the cityname

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

      imgElt.setAttribute('class', 'imgFilter'); 


      //change the innerHTML and positioning of the rollover text
      rolloverText.innerHTML = cityName;

      containerDiv.appendChild(rolloverText); 
      rolloverText.style.position = "absolute";
      rolloverText.style.left = imgX;
      rolloverText.style.left = imgY;
  


   }

}





//FUNCTIONALITY TO ADD
//1. add rollovers
//2. fix positioning of the text within the boxes (maybe make the image element a parent of the p that goes inside it?)
//3. fix responsiveness of the grid

 