'use strict';

/*
Select three random photos from the image directory and display them side-by-side-by-side.

Receive clicks on those displayed images

Track those clicks for each image. 

Track how many times each image is displayed, for statistical purposes.

Upon receiving a click, three new non-duplicating random images need to be displayed. 

  - no duplicates
  - nor images that we displayed immediately before.

Constructor function that creates an object associated with each image, and has (at a minimum) properties for the name of the image (to be used for display purposes), its filepath, the number of times it has been shown, and the number of times it has been clicked. 

You'll probably find it useful to create a property that contains a text string you can use as an ID in HTML.

After 25 selections have been made, turn off the event listeners 

Display a list of the products with votes received with each list item looking like "3 votes for the Banana Slicer".

*/
