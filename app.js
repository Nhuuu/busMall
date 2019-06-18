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
    makeBusChart();
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

function makeBusChart(){
  var busChartCanvas = document.getElementById('busResults');

  var percents = [];
  var productNames = [];

  for(var i = 0; i < ProductImage.allImages.length; i++){
    var p = Math.floor((ProductImage.allImages[i].clicks / ProductImage.allImages[i].timesShown) * 100);
    productNames.push(ProductImage.allImages[i].name);
    percents.push(p);
  }

  var chartData = {
    labels: productNames,
    datasets: [{
      label: '% of Clicks per Times Shown',
      data: percents,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1.2,
    }]
  };

  var busChartObject = {
    type: 'bar',
    data : chartData,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  };

  new Chart(busChartCanvas, busChartObject);
}
