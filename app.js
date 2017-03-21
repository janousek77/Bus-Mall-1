'use strict';

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');

var imgArr = [];
var currentImg = [];
var previousImg = [];

function img(name, source) {
  this.name = name;
  this.source = source;
  imgArr.push(this);
};

function random() {
  return Math.floor(Math.random() * imgArr.length);
};

function randomImg() {
  while(currentImg.length < 3) {
    var imgSelector = imgArr[random()];
    if(!currentImg.includes(imgSelector) && !previousImg.includes(imgSelector)) {
      currentImg.push(imgSelector);
    }
  }
  var firstImg = imgArr[currentImg[0]].source;
  var secondImg = imgArr[currentImg[1]].source;
  var thirdImg = imgArr[currentImg[2]].source;
  document.getElementById('img1').src = firstImg;
  document.getElementById('img2').src = secondImg;
  document.getElementById('img3').src = thirdImg;
};

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

randomImg();
// console.log(imgArr);
// for(var i = 0; i < 25; i++) {
//   imgArr[i].imgChoices();
// };
