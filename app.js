'use strict';

// Globals
var imageSection = document.getElementById('allImages');
var leftImage = document.getElementById('left_image');
var middleImage = document.getElementById('middle_image');
var rightImage = document.getElementById('right_image');

var clickCount = 0;
var maxClicks = 25;

var ProductImage = function(name, imgSrc){
  this.name = name;
  this.url = imgSrc;
  this.clicks = 0;
  this.timesShown = 0;
  ProductImage.allImages.push(this);
};

ProductImage.allImages = [];
ProductImage.previousImages = [];

// Instantiate all image objects
var buildProducts = function(){

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
};

var pickNonRepeating = function(currentPicks){
  var index, product;
  do{
    index = getRandomIntInclusive(0, ProductImage.allImages.length - 1);
    product = ProductImage.allImages[index];
  } while (ProductImage.previousImages.includes(product) || currentPicks.includes(product));
  return product;
};

var renderProductImages = function(){
  var currentPicks = [];
  var leftProduct = pickNonRepeating(currentPicks);
  currentPicks.push(leftProduct);
  var middleProduct = pickNonRepeating(currentPicks);
  currentPicks.push(middleProduct);
  var rightProduct = pickNonRepeating(currentPicks);
  currentPicks.push(rightProduct);

  leftImage.src = leftProduct.url;
  middleImage.src = middleProduct.url;
  rightImage.src = rightProduct.url;
  ProductImage.previousImages = currentPicks;
};

var handleClicks = function(e){
  clickCount++;
  if(e.target.id === 'left_image'){
    ProductImage.previousImages[0].clicks++;

  }
  if(e.target.id === 'middle_image'){
    ProductImage.previousImages[1].clicks++;
  }
  if(e.target.id === 'right_image'){
    ProductImage.previousImages[2].clicks++;
  }
  for (var i = 0; i < ProductImage.previousImages.length; i++){
    ProductImage.previousImages[i].timesShown++;
  }
  if(clickCount < maxClicks){
    renderProductImages();
  } else {
    imageSection.removeEventListener('click', handleClicks);
  }
  for(i = 0; i < ProductImage.allImages.length; i++){
    var liEl = document.getElementById(ProductImage.allImages[i].name);
    liEl.textContent = ProductImage.allImages[i].clicks + ' for the ' + ProductImage.allImages[i].name;
  }
};


var initPage = function(){
  buildProducts();
  renderProductImages();

  imageSection.addEventListener('click', handleClicks);
};

initPage();
