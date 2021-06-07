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
  namesArr.push(this.productName);
}

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
// leftElement.addEventListener('click',handleClick);
// middleElement.addEventListener('click',handleClick);
// rightElement.addEventListener('click',handleClick);
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
    container.removeEventListener('click', handleClick);
  }
}
function handleViewing() {
  gettingList();
  console.log(namesArr)
  gettingChart();
  btnEl.removeEventListener('click', handleViewing);
  console.log(likesArr);
  console.log(showsArr);
}

function gettingList() {
  let ul = document.getElementById('List');
  for (let i = 0; i < BusMall.allImages.length; i++) {
    likesArr.push(BusMall.allImages[i].likes);
    showsArr.push(BusMall.allImages[i].shown);
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${BusMall.allImages[i].productName} has ${BusMall.allImages[i].likes} likely to purchase, and ${BusMall.allImages[i].shown} shows`;
  }
  console.log(likesArr + 'test')
  document.getElementById("result").disabled = true;
}

function gettingChart() {
  console.log(BusMall.allImages)
console.log(namesArr+ 'Names');
  var ctx = document.getElementById('Chart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: namesArr,
      datasets: [{
        label: '# of Likes',
        data: likesArr,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      },{label: '# of shows',
      data: showsArr,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
