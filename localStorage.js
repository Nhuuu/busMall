'use strict';


function saveToLocalStorage() {

  for(var i = 0; i < ProductImage.allImages.length; i++){
    var p = Math.floor((ProductImage.allImages[i].clicks / ProductImage.allImages[i].timesShown) * 100);
    productNames.push(ProductImage.allImages[i].name);
    percents.push(p);
    productClicks.push(ProductImage.allImages[i].clicks);
    productTimesShown.push(ProductImage.allImages[i].timesShown);

  }
  localStorage.setItem('percents', JSON.stringify(percents));
  localStorage.setItem('productNames', JSON.stringify(productNames));
  localStorage.setItem('productClicks', JSON.stringify(productClicks));
  localStorage.setItem('productTimesShown', JSON.stringify(productTimesShown));
}