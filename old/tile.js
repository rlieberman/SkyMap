function Tile (latLongPair, city) {

  this.latLongPair = latLongPair; //pass the latitude and longitude in as a pair, in an array
  this.city = city;


  //function to display the tile as a DOM element
  this.drawTile = function() {
    createImg(this.imgUrl);
  }

  //function for rollover behavior, show the cityname
  this.showCity = function() {
    createP(this.city);
  }
  

}