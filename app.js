'use strict';

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
//these variable get the img elements from index.html
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');

var imgArr = [];
var previousImg = [];
var nameArr = [];
var dataArr = [];
var totalClicks = 0;
//this constuctor function creates objects out of the following variables
function img(name, itemPath) {
  this.name = name;
  this.itemPath = itemPath;
  this.itemClick = 0;
  this.itemShown = 0;
  imgArr.push(this);
  nameArr.push(name);
};

//these variables create new objects through the function constructor
var bag = new img('bag', 'assets/bag.jpg');
var banana = new img('banana', 'assets/banana.jpg');
var bathroom = new img('bathroom', 'assets/bathroom.jpg');
var boots = new img('boots', 'assets/boots.jpg');
var breakfast = new img('breakfast', 'assets/breakfast.jpg');
var bubblegum = new img('bubblegum', 'assets/bubblegum.jpg');
var chair = new img('chair', 'assets/chair.jpg');
var cthulhu = new img('cthulhu', 'assets/cthulhu.jpg');
var dogDuck = new img('dog-duck', 'assets/dog-duck.jpg');
var dragon = new img('dragon', 'assets/dragon.jpg');
var pen = new img('pen', 'assets/pen.jpg');
var petSweep = new img('pet-sweep', 'assets/pet-sweep.jpg');
var scissors = new img('scissors', 'assets/scissors.jpg');
var shark = new img('shark', 'assets/shark.jpg');
var sweep = new img('sweep', 'assets/sweep.png');
var tauntaun = new img('tauntaun', 'assets/tauntaun.jpg');
var unicorn = new img('unicorn', 'assets/unicorn.jpg');
var usb = new img('usb', 'assets/usb.gif');
var waterCan = new img('water-can', 'assets/water-can.jpg');
var wineGlass = new img('wine-glass', 'assets/wine-glass.jpg');
//the random() function generates a random number to bue used in the randomImg() function
function random() {
  return Math.floor(Math.random() * imgArr.length);
};
//randomImg() uses our random number to generate 3 images on the page
function randomImg() {
  var currentImg = [];
  while(currentImg.length < 3) { //this hile loop continues until 3 unique images are placed into the currentImg array
    var imgSelector = random();
    if(!currentImg.includes(imgSelector) && !previousImg.includes(
    imgSelector)) {
      currentImg.push(imgSelector);
    }
  }
  //this section places the random images from currentImg array onto the HTML page
  var firstImg = imgArr[currentImg[0]];
  var secondImg = imgArr[currentImg[1]];
  var thirdImg = imgArr[currentImg[2]];
  img1.src = firstImg.itemPath;
  img2.src = secondImg.itemPath;
  img3.src = thirdImg.itemPath;
  img1.alt = currentImg[0];
  img2.alt = currentImg[1];
  img3.alt = currentImg[2];
  previousImg = currentImg;
  firstImg.itemShown++;
  secondImg.itemShown++;
  thirdImg.itemShown++;
};

randomImg();

//newImages() is an event listener function that allows the user to click on 1 image, when an image is clicked it pushes that image into selectedImgs array and runs randomImg() function until the attempts reaches the set amount
function newImages() {
  if(totalClicks < 24) {
    randomImg();
    totalClicks++;
    var itemIndx = this.alt;
    imgArr[itemIndx].itemClick++;
  }
  else {
    img1.removeEventListener('click', newImages);
    img2.removeEventListener('click', newImages);
    img3.removeEventListener('click', newImages);
    main.removeChild(img1);
    main.removeChild(img2);
    main.removeChild(img3);
    imgClicks();
  }
};

img1.addEventListener('click', newImages);
img2.addEventListener('click', newImages);
img3.addEventListener('click', newImages);

function imgClicks() {
  // var content = document.getElementsByTagName('main')[0];
  // var ul = document.createElement('ul');
  // content.appendChild(ul);
  for(var i = 0; i < imgArr.length; i++) {
    var dataList = imgArr[i].itemClick;
    dataArr.push(dataList);
  }
  var data = {
    labels: nameArr,
    datasets: [{
      label: '# of Votes',
      data: dataArr,
      backgroundColor: 'red',
    }]
  };
  var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: data,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });

};
