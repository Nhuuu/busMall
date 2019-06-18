'use strict';

/*
Select three random photos from the image directory and display them side-by-side-by-side.

Receive clicks on those displayed images
- Track those clicks for each image. 
- Track how many times each image is displayed, for statistical purposes.

Upon receiving a click, three new non-duplicating random images need to be displayed. 
  - no duplicates
  - nor images that we displayed immediately before.

**You'll probably find it useful to create a property that contains a text string you can use as an ID in HTML.

After 25 selections have been made, turn off the event listeners 

Display a list of the products with votes received with each list item looking like "3 votes for the Banana Slicer".

*/

// Globals
var imageSection = document.getElementById('images');
var leftImage = document.getElementById('left_image');
var middleImage = document.getElementById('middle_image');
var rightImage = document.getElementById('right_image');

// can't click after 25
var totalClicks = 25;

var ProductImage = function(name, imgSrc, id){
  this.name = name;
  this.url = imgSrc;
  this.timesShown = 0;
  this.clicks = 0;
  // this.id = id;

  ProductImage.allImages.push(this);
}

ProductImage.allImages = [];

// Instantiate all image objects

new ProductImage('bag', './img/bag.jpg');
new ProductImage('banana', './img/banana.jpg');
new ProductImage('bathroom', './img/bathroom.jpg');
new ProductImage('boots', './img/boots.jpg');
new ProductImage('breakfast', './img/breakfast.jpg');
new ProductImage('bubblegum', './img/bubblegum.jpg');
new ProductImage('chair', './img/chair.jpg');
new ProductImage('cthulu', './img/cthulu.jpg');
new ProductImage('dog-duck', './img/dog-duck.jpg');
new ProductImage('dragon', './img/dragon.jpg');
new ProductImage('pen', './img/pen.jpg');
new ProductImage('pet-sweep', './img/pet-sweep.jpg');
new ProductImage('scissors', './img/scissors.jpg');
new ProductImage('shark', './img/shark.jpg');
new ProductImage('sweep', './img/sweep.png');
new ProductImage('tauntaun', './img/tauntaun.jpg');
new ProductImage('unicorn', './img/unicorn.jpg');
new ProductImage('usb', './img/usb.gif');
new ProductImage('water-can', './img/water-can.jpg');
new ProductImage('wine-glass', './img/wine-glass.jpg');


var renderProductImages = function (leftIndex, middleIndex, rightIndex){
  leftImage.src = 
}