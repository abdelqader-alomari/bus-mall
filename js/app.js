'use strict';

// gitElement from HTML and assign it to a variables.

let container = document.getElementById('one');
let leftElement = document.getElementById('left');
let middleElement = document.getElementById('middle');
let rightElement = document.getElementById('right');

// declare variable for images that side by side: left, middle, right
let leftIndex;
let middleIndex;
let rightIndex;

// declare variable for rounds and assign it to 25 rounds as in problem domain
let rounds = 25;

// declare variable of a counter for clicks and initialize (0)
let clicksCounter = 0;

// declare variables as arrays and initialize
let likesArr = [];
let namesArr = [];
let showsArr = [];
let checkArr = [];

// Create constructor function mainly for BusMall Objects
function BusMall(productName, source) {
  this.productName = productName;
  this.source = source;
  this.likes = 0;  // declare and initialize likes to 0... likes = clicks
  this.shown = 0;  // declare and initialize shown to 0... shown = views (even click or not click on img)
  BusMall.allImages.push(this); // push the values of constructor function with this to fill the array
}

// setup local storage
let clickedProducts = localStorage.getItem('Product');
if (clickedProducts) {
  let parsedProducts = JSON.parse(clickedProducts);  //parses a JSON string
  BusMall.allImages = parsedProducts;
} else {
  BusMall.allImages = [];
  // Create 20 BusMall Objects (ProductName, source)
  new BusMall('bag', 'img/bag.jpg');
  new BusMall('banana', 'img/banana.jpg');
  new BusMall('bathroom', 'img/bathroom.jpg');
  new BusMall('boots', 'img/boots.jpg');
  new BusMall('breakfast', 'img/breakfast.jpg');
  new BusMall('bubblegum', 'img/bubblegum.jpg');
  new BusMall('chair', 'img/chair.jpg');
  new BusMall('cthulhu', 'img/cthulhu.jpg');
  new BusMall('dog-duck', 'img/dog-duck.jpg');
  new BusMall('dragon', 'img/dragon.jpg');
  new BusMall('pen', 'img/pen.jpg');
  new BusMall('pet-sweep', 'img/pet-sweep.jpg');
  new BusMall('scissors', 'img/scissors.jpg');
  new BusMall('shark', 'img/shark.jpg');
  new BusMall('sweep', 'img/sweep.png');
  new BusMall('tauntaun', 'img/tauntaun.jpg');
  new BusMall('unicorn', 'img/unicorn.jpg');
  new BusMall('usb', 'img/usb.gif');
  new BusMall('water-can', 'img/water-can.jpg');
  new BusMall('wine-glass', 'img/wine-glass.jpg');
}

// display 3 randomly side by side images
function displayImages() {
  leftIndex = generateRandomIndex();
  middleIndex = generateRandomIndex();
  rightIndex = generateRandomIndex();

  // to validate that no repeat images in left,middle and right, also not repeated in direct next round.
  while (leftIndex === middleIndex || middleIndex === rightIndex || rightIndex === leftIndex || checkArr.includes(leftIndex) || checkArr.includes(middleIndex) || checkArr.includes(rightIndex)) {
    leftIndex = generateRandomIndex();
    rightIndex = generateRandomIndex();
    middleIndex = generateRandomIndex();
  }
  //console.log(checkArr)
  checkArr = [-1, -1, -1];  // only any value not null
  checkArr.push(leftIndex, middleIndex, rightIndex); // fill the array that run the function displayImages()

  // get element by src and fill it in array
  leftElement.src = BusMall.allImages[leftIndex].source;
  middleElement.src = BusMall.allImages[middleIndex].source;
  rightElement.src = BusMall.allImages[rightIndex].source;
  //console.log(leftIndex, rightIndex, middleIndex)

  // counter the number of shown/ views for images/products
  if (clicksCounter <= rounds) {

    BusMall.allImages[leftIndex].shown++;
    BusMall.allImages[middleIndex].shown++;
    BusMall.allImages[rightIndex].shown++;
  }
}
displayImages(); //show the images

// function that generate random images
function generateRandomIndex() {
  let randomIndex = Math.floor(Math.random() * BusMall.allImages.length);
  return randomIndex;
}

container.addEventListener('click', handleClick);
let btnEl;
// addEventListener to handle the click of button
function handleClick(event) {

  clicksCounter++;
  // counter for clicks
  if (rounds >= clicksCounter) {
    if (event.target.id === 'left') {
      BusMall.allImages[leftIndex].likes++;
    } else if (event.target.id === 'middle') {
      BusMall.allImages[middleIndex].likes++;
    } else if (event.target.id === 'right') {
      BusMall.allImages[rightIndex].likes++;
    } else {
      clicksCounter--;
      return
    }
    displayImages();
    // else = click on result button... to show results,chart, and save in local storage
  } else {
    btnEl = document.getElementById('result');
    btnEl.addEventListener('click', handleViewing); // show list of results contains likes and shown after click
    renderChart(); // display chart after click on result button
    container.removeEventListener('click', handleClick);
    let stringifiedProducts = JSON.stringify(BusMall.allImages); //  converts a object or value to a JSON string
    localStorage.setItem('Product', stringifiedProducts); // save results in local storage
  }
}
// function for views
function handleViewing() {
  gettingList();
  gettingChart();
  btnEl.removeEventListener('click', handleViewing);
}
// function to show results as list, for loop to fill the lists of values for all images with likes and shown.
function gettingList() {
  let ul = document.getElementById('List');
  for (let i = 0; i < BusMall.allImages.length; i++) {
    let li = document.createElement('li'); // create element "li"
    ul.appendChild(li); // put the created element as a child of the parent ul = (under ul tag)
    li.textContent = `${BusMall.allImages[i].productName} has ${BusMall.allImages[i].likes} likely to purchase, and ${BusMall.allImages[i].shown} shows`;
  }
  document.getElementById("result").disabled = true; // to disable result button after clicked (allow only one click)
}
// to display the data of : productName, likes, shown of array of images in the chart
function renderChart() {
  for (let i = 0; i < BusMall.allImages.length; i++) {
    likesArr.push(BusMall.allImages[i].likes);
    showsArr.push(BusMall.allImages[i].shown);
    namesArr.push(BusMall.allImages[i].productName);
  }
}
// the chart is in js/chart.js and connected together.