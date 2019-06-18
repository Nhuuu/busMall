'use strict';

/*

Display a list of the products with votes received with each list item looking like "3 votes for the Banana Slicer".

*/

// Globals
var imageSection = document.getElementById('images');
var leftImage = document.getElementById('left_image');
var middleImage = document.getElementById('middle_image');
var rightImage = document.getElementById('right_image');

var totalClicks = 25;

var leftProductOnPage = null;
var middleProductOnPage = null;
var rightProductOnPage = null;

var ProductImage = function(name, imgSrc, id){
  this.name = name;
  this.url = imgSrc;
  this.timesShown = 0;
  this.clicks = 0;
  this.id = id;

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
new ProductImage('cthulhu', './img/cthulhu.jpg');
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


var renderProductImages = function(leftIndex, middleIndex, rightIndex){
  leftImage.src = ProductImage.allImages[leftIndex].url;
  middleImage.src = ProductImage.allImages[middleIndex].url;
  rightImage.src = ProductImage.allImages[rightIndex].url;
};

var displayProductImages = function(){
  var leftIndex = Math.round(Math.random() * ProductImage.allImages.length);

  do {
    var middleIndex = Math.round(Math.random() * ProductImage.allImages.length);
  } while (middleIndex === leftIndex);

  do {
    var rightIndex = Math.round(Math.random() * ProductImage.allImages.length);
  } while (rightIndex === middleIndex || rightIndex === leftIndex);
  console.log(ProductImage.allImages[leftIndex].name, ProductImage.allImages[middleIndex].name,ProductImage.allImages[rightIndex].name);
  leftProductOnPage = ProductImage.allImages[leftIndex];
  middleProductOnPage = ProductImage.allImages[middleIndex];
  rightProductOnPage = ProductImage.allImages[rightIndex];

  renderProductImages(leftIndex, middleIndex, rightIndex);
};


// - Track those clicks for each image. 
// - Track how many times each image is displayed, for statistical purposes.

// Upon receiving a click, three new non-duplicating random images need to be displayed. 
//   - no duplicates
//   - nor images that we displayed immediately before.


var handleClicks = function(e){
  if(totalClicks < 25){
    var clickedProduct = e.target;
    var id = clickedProduct.id;
    if(id === 'left_image' || id === 'middle_image' || id === ' right_image'){
      if(id === 'left_image'){
        leftProductOnPage.clicks++;
      }
      if(id === 'middle_image'){
        middleProductOnPage.clicks++;
      }
      if(id === 'right_image'){
        rightProductOnPage.clicks++;
      }
      leftProductOnPage.timesShown++;
      middleProductOnPage.timesShown++;
      rightProductOnPage.timesShown++;
    }
    console.log(e.target.id);
  };
  totalClicks++;
  console.log(totalClicks);
  if(totalClicks === 25){
    imageSection.removeEventListener('click', handleClicks);
  }
};

imageSection.addEventListener('click', handleClicks);


displayProductImages();