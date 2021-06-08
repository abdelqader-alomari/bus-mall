'use strict';

let container = document.getElementById('one');
let leftElement = document.getElementById('left');
let middleElement = document.getElementById('middle');
let rightElement = document.getElementById('right');

let leftIndex;
let middleIndex;
let rightIndex;

let rounds = 25;

let clicksCounter = 0;

let likesArr = [];
let namesArr = [];
let showsArr = [];
let checkArr = [];

function BusMall(productName, source) {
  this.productName = productName;
  this.source = source;
  this.likes = 0;
  this.shown = 0;
  BusMall.allImages.push(this);
}

let clickedProducts = localStorage.getItem('Product');
if (clickedProducts) {
  let parsedProducts = JSON.parse(clickedProducts);
  BusMall.allImages = parsedProducts;
}else{
BusMall.allImages = [];

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

function displayImages() {
  leftIndex = generateRandomIndex();
  middleIndex = generateRandomIndex();
  rightIndex = generateRandomIndex();
  // checkArr = []
  // if leftIndex === leftIndex[0]

  while (leftIndex === middleIndex || middleIndex === rightIndex || rightIndex === leftIndex || checkArr.includes(leftIndex) || checkArr.includes(middleIndex) || checkArr.includes(rightIndex)) {
    leftIndex = generateRandomIndex();
    rightIndex = generateRandomIndex();
    middleIndex = generateRandomIndex();
  }
  console.log(checkArr)
  checkArr=[-1,-1,-1];
  checkArr.push(leftIndex,middleIndex,rightIndex);

  leftElement.src = BusMall.allImages[leftIndex].source;
  middleElement.src = BusMall.allImages[middleIndex].source;
  rightElement.src = BusMall.allImages[rightIndex].source;
  console.log(leftIndex,rightIndex,middleIndex)

  if (clicksCounter <= rounds) {

    BusMall.allImages[leftIndex].shown++;
    BusMall.allImages[middleIndex].shown++;
    BusMall.allImages[rightIndex].shown++;
  }
}
displayImages();

function generateRandomIndex() {
  let randomIndex = Math.floor(Math.random() * BusMall.allImages.length);
  return randomIndex;
}

container.addEventListener('click', handleClick);
let btnEl;

function handleClick(event) {

  clicksCounter++;

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
  } else {
    btnEl = document.getElementById('result');
    btnEl.addEventListener('click', handleViewing);
    renderChart();
    container.removeEventListener('click', handleClick);
    let stringifiedProducts = JSON.stringify(BusMall.allImages);
    localStorage.setItem('Product', stringifiedProducts);
  }
}

function handleViewing() {
  gettingList();
  gettingChart();
  btnEl.removeEventListener('click', handleViewing);
}

function gettingList() {
  let ul = document.getElementById('List');
  for (let i = 0; i < BusMall.allImages.length; i++) {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${BusMall.allImages[i].productName} has ${BusMall.allImages[i].likes} likely to purchase, and ${BusMall.allImages[i].shown} shows`;
  }
  document.getElementById("result").disabled = true;
}

function renderChart() {
  for (let i = 0; i < BusMall.allImages.length; i++) {
    likesArr.push(BusMall.allImages[i].likes);
    showsArr.push(BusMall.allImages[i].shown);
    namesArr.push(BusMall.allImages[i].productName);
  }
}