'use strict';

let leftElement = document.getElementById('left');
let middleElement = document.getElementById('middle');
let rightElement = document.getElementById('right');

let leftIndex; 
let middleIndex;
let rightIndex;



let rounds = 25;


let clicksCounter = 0;


function BusMall(productName,source){
  this.productName = productName;
  this.source = source;
  this.likes = 0;
  this.shown = 0;
  BusMall.allImages.push(this);
}

BusMall.allImages = [];


new BusMall('bag','img/bag.jpg');
new BusMall('banana','img/banana.jpg');
new BusMall('bathroom','img/bathroom.jpg');
new BusMall('boots','img/boots.jpg');
new BusMall('breakfast','img/breakfast.jpg');
new BusMall('bubblegum','img/bubblegum.jpg');
new BusMall('chair','img/chair.jpg');
new BusMall('cthulhu','img/cthulhu.jpg');
new BusMall('dog-duck','img/dog-duck.jpg');
new BusMall('dragon','img/dragon.jpg');
new BusMall('pen','img/pen.jpg');
new BusMall('pet-sweep','img/pet-sweep.jpg');
new BusMall('scissors','img/scissors.jpg');
new BusMall('shark','img/shark.jpg');
new BusMall('sweep','img/sweep.png');
new BusMall('tauntaun','img/tauntaun.jpg');
new BusMall('unicorn','img/unicorn.jpg');
new BusMall('usb','img/usb.gif');
new BusMall('water-can','img/water-can.jpg');
new BusMall('wine-glass','img/wine-glass.jpg');


function displayImages(){
  leftIndex = generateRandomIndex(); 
  middleIndex = generateRandomIndex();
  rightIndex = generateRandomIndex(); 
  console.log(leftIndex);
  console.log(middleIndex);
  console.log(rightIndex);

  while(leftIndex === middleIndex || middleIndex === rightIndex || rightIndex === leftIndex){
    leftIndex = generateRandomIndex(); 
    rightIndex = generateRandomIndex();
  }

  leftElement.src = BusMall.allImages[leftIndex].source;
  middleElement.src = BusMall.allImages[middleIndex].source;
  rightElement.src = BusMall.allImages[rightIndex].source;

    if (clicksCounter <= rounds) {

    BusMall.allImages[leftIndex].shown++;
    BusMall.allImages[middleIndex].shown++;
    BusMall.allImages[rightIndex].shown++;
  }
  console.log(BusMall.allImages[middleIndex].shown);


}
displayImages();


function generateRandomIndex(){
  let randomIndex = Math.floor(Math.random() * BusMall.allImages.length);
  return randomIndex;

                
}


leftElement.addEventListener('click',handleClick);
middleElement.addEventListener('click',handleClick);
rightElement.addEventListener('click',handleClick);

function handleClick(event){
    clicksCounter++;

    console.log(event.target.id);
    if(rounds >= clicksCounter){
        if(event.target.id === 'left'){
          BusMall.allImages[leftIndex].likes++;
        }else if(event.target.id ==='middle'){
            BusMall.allImages[middleIndex].likes++;
        }else if(event.target.id ==='right'){
            BusMall.allImages[rightIndex].likes++;
        }
        displayImages();
    }else{
      console.log(BusMall.allImages);
    gettingList();
    leftElement.removeEventListener('click',handleClick);
    middleElement.removeEventListener('click',handleClick);
    rightElement.removeEventListener('click',handleClick);
    }

  }
function gettingList(){
  let ul = document.getElementById('List');
  for(let i = 0 ; i <BusMall.allImages.length; i++ ){
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${BusMall.allImages[i].productName} has ${BusMall.allImages[i].likes} likely to purchase, and ${BusMall.allImages[i].shown} shows`;
  }

}

// var button = document.getElementById("result");
// button.addEventListener("click", onClick);

// function onClick() {
//   console.log("Clicked");
//   button.removeEventListener("click", onClick);
//   button.textContent = li.textContent = `${BusMall.allImages[i].productName} has ${BusMall.allImages[i].likes} likely to purchase, and ${BusMall.allImages[i].shown} shows`;
// }