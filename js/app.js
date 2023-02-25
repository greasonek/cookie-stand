'use strict';

// // window into the DOM vvv
// let sectionElem = document.getElementById('Seattle');
// console.log(sectionElem);
let sectionElem = document.getElementById('cookies-sales');
let allStoreSales = [];
// // global variables vvv
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomCustCount(min, max){
  return Math.floor(Math.random() * (max - min +1) + min);
}

function StoreLocation (name, min, max, avgCookieSales, custPerHour, cookiePerHour, total){

  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookieSales = avgCookieSales;
  this.custPerHour = custPerHour;
  this.cookiePerHour = cookiePerHour;
  this.total = total;

  allStoreSales.push(this);
}

let seattle = new StoreLocation ('Seattle', 23, 65, 6.3, [], [], 0);
let tokyo = new StoreLocation ('Tokyo', 3, 4, 1.2, [], [], 0);
let dubai = new StoreLocation ('Dubai', 11, 28, 3.7, [], [], 0);
let paris = new StoreLocation ('Paris', 20, 28, 2.3, [], [], 0);
let lima = new StoreLocation ('Lima', 2, 16, 4.6, [], [], 0);


// seattle.randomCustCount();

// StoreLocation.prototype.randomCustCount = function() {
//   for (let i = 0; i < hours.length; i++){
//     let randomHourlyCust = randomCustCount(this.min, this.max);
//     this.custPerHour.push(randomHourlyCust);
//     // this.custPerHour = randomCustCount(23, 65);
//   }
// };
StoreLocation.prototype.custCount = function(){
  for (let i = 0; i < hours.length; i++){
    let randomHourlyCust = randomCustCount(this.min, this.max);
    this.custPerHour.push(randomHourlyCust);
  }
};

StoreLocation.prototype.cookieCount = function(){
  for (let i = 0; i < hours.length; i++){
    let hourlyCookies = Math.ceil(this.custPerHour[i] * this.avgCookieSales);
    this.cookiePerHour.push(hourlyCookies);
  }
  this.calculateTotal();
};

StoreLocation.prototype.calculateTotal = function(){
  console.log(this.cookiePerHour);
  for(let i = 0; i < this.cookiePerHour.length; i++){
    this.total += this.cookiePerHour[i];
  }
};
console.log(seattle.custCount());
console.log(seattle.cookieCount());
console.log(seattle);

console.log(tokyo.custCount());
console.log(tokyo.cookieCount());
console.log(tokyo);

console.log(dubai.custCount());
console.log(dubai.cookieCount());
console.log(dubai);

console.log(paris.custCount());
console.log(paris.cookieCount());
console.log(paris);

console.log(lima.custCount());
console.log(lima.cookieCount());
console.log(lima);

StoreLocation.prototype.render = function(){
  let articleElem = document.createElement('article');
  sectionElem.appendChild(articleElem);

  let h6Elem = document.createElement('h6');
  h6Elem.textContent = this.StoreLocation;
  articleElem.appendChild(h6Elem);

  let ulElem = document.createElement('ul');
  h6Elem.appendChild(ulElem);

  for(let i = 0; i < hours.length; i++) {
    let liElem = document.createElement('li');
    liElem.textContent = `${hours[i]}: ${this.cookiePerHour[i]} cookies`;
    ulElem.appendChild(liElem);
  }
  let liElem2 = document.createElement('li');
  ulElem.appendChild(liElem2);
  liElem2.textContent = `Total: ${this.total}`;
};

// StoreLocation.prototype.randomCookieCount = function() {
//   this.cookiePerHour = this.randomCookieCount[i];
// };

// let seattleList = document.getElementById('seattleList');

// let seattle = {
//   storeLocation: 'Seattle',
//   min: 23,
//   max: 65,
//   avgCookieSales: 6.3,
//   custPerHour: [],
//   cookiePerHour: [],
//   total: 0,
//   custCount: function() {
//     for (let i = 0; i < hours.length; i++){
//       let randomHourlyCust = randomCustCount(this.min, this.max);
//       this.custPerHour.push(randomHourlyCust);
//     }
//   },
//   cookieCount: function() {
//     this.custCount();
//     for (let i = 0; i < hours.length; i++){
//       // let randomCookiePerCust = randomCookieCount();
//       let hourlyCookies = Math.ceil(this.custPerHour[i] * this.avgCookieSales);
//       this.cookiePerHour.push(hourlyCookies);
//     }
//     this.calculateTotal ();
//   },

//   calculateTotal: function() {
//     console.log(this.cookiePerHour);
//     for(let i = 0; i < this.cookiePerHour.length; i++){
//       this.total += this.cookiePerHour[i];
//     }
//   },

// render: function(){
//   this.cookieCount();
//   console.log('render function called');
//   let articleElem = document.createElement('article');
//   sectionElem.appendChild(articleElem);

//   let h6Elem = document.createElement('h6');
//   h6Elem.textContent = this.storeLocation;
//   articleElem.appendChild(h6Elem);

//   let ulElem = document.createElement('ul');
//   h6Elem.appendChild(ulElem);

//   for(let i = 0; i < hours.length; i++) {
//     let liElem = document.createElement('li');
//     liElem.textContent = `${hours[i]}: ${this.cookiePerHour[i]} cookies`;
//     seattleList.appendChild(liElem);
//   }
//   let liElem2 = document.createElement('li');
//   ulElem.appendChild(liElem2);
//   liElem2.textContent = `Total: ${this.total}`;
// };

// // seattle.custCount();
// // console.log(seattle.custPerHour);


// let sectionElemTwo = document.getElementById('Tokyo');
// console.log(sectionElemTwo);

// let tokyoList = document.getElementById('tokyoList');

// let tokyo = {
//   storeLocation: 'Tokyo',
//   min: 3,
//   max: 24,
//   avgCookieSales: 1.2,
//   custPerHour: [],
//   cookiePerHour: [],
//   total: 0,
//   custCount: function () {
//     for (let i = 0; i < hours.length; i++){
//       let randomHourlyCust = randomCustCount(this.min, this.max);
//       this.custPerHour.push(randomHourlyCust);
//     }
//   },

//   cookieCount: function () {
//     this.custCount();
//     for (let i = 0; i < hours.length; i++) {
//       let hourlyCookies = Math.ceil(this.custPerHour[i] * this.avgCookieSales);
//       this.cookiePerHour.push(hourlyCookies);
//     }
//     this.calculateTotal ();
//   },

//   calculateTotal: function() {
//     console.log(this.cookiePerHour);
//     for(let i = 0; i < this.cookiePerHour.length; i++){
//       this.total += this.cookiePerHour[i];
//     }
//   },

//   render: function(){
//     this.cookieCount();
//     console.log('render function called');

//     let articleElem = document.createElement('article');
//     sectionElemTwo.appendChild(articleElem);

//     let h6Elem = document.createElement('h6');
//     h6Elem.textContent = this.storeLocation;
//     articleElem.appendChild(h6Elem);

//     let ulElem = document.createElement('ul');
//     h6Elem.appendChild(ulElem);
//     for(let i = 0; i < hours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiePerHour[i]} cookies`;
//       tokyoList.appendChild(liElem);
//     }
//     let liElem2 = document.createElement('li');
//     ulElem.appendChild(liElem2);
//     liElem2.textContent = `Total: ${this.total}`;
//   }
// };


// let sectionElemThree = document.getElementById('Dubai');
// console.log(sectionElemThree);

// let dubaiList = document.getElementById('dubaiList');

// let dubai = {
//   storeLocation: 'Dubai',
//   min: 11,
//   max: 28,
//   avgCookieSales: 3.7,
//   custPerHour: [],
//   cookiePerHour: [],
//   total: 0,
//   custCount: function () {
//     for (let i = 0; i < hours.length; i++){
//       let randomHourlyCust = randomCustCount(this.min, this.max);
//       this.custPerHour.push(randomHourlyCust);
//     }
//   },

//   cookieCount: function () {
//     this.custCount();
//     for (let i = 0; i < hours.length; i++) {
//       let hourlyCookies = Math.ceil(this.custPerHour[i] * this.avgCookieSales);
//       this.cookiePerHour.push(hourlyCookies);
//     }
//     this.calculateTotal ();
//   },

//   calculateTotal: function() {
//     console.log(this.cookiePerHour);
//     for(let i = 0; i < this.cookiePerHour.length; i++){
//       this.total += this.cookiePerHour[i];
//     }
//   },

//   render: function(){
//     this.cookieCount();
//     console.log('render function called');

//     let articleElem = document.createElement('article');
//     sectionElemThree.appendChild(articleElem);

//     let h6Elem = document.createElement('h6');
//     h6Elem.textContent = this.storeLocation;
//     articleElem.appendChild(h6Elem);

//     let ulElem = document.createElement('ul');
//     h6Elem.appendChild(ulElem);
//     for(let i = 0; i < hours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiePerHour[i]} cookies`;
//       dubaiList.appendChild(liElem);
//     }
//     let liElem2 = document.createElement('li');
//     ulElem.appendChild(liElem2);
//     liElem2.textContent = `Total: ${this.total}`;
//   }
// };

// let sectionElemFour = document.getElementById('Paris');
// console.log(sectionElemFour);

// let parisList = document.getElementById('parisList');

// let paris = {
//   storeLocation: 'Paris',
//   min: 20,
//   max: 38,
//   avgCookieSales: 2.3,
//   custPerHour: [],
//   cookiePerHour: [],
//   total: 0,
//   custCount: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomHourlyCust = randomCustCount(this.min, this.max);
//       this.custPerHour.push(randomHourlyCust);
//     }
//   },

//   cookieCount: function () {
//     this.custCount();
//     for (let i = 0; i < hours.length; i++) {
//       let hourlyCookies = Math.ceil(this.custPerHour[i] * this.avgCookieSales);
//       this.cookiePerHour.push(hourlyCookies);
//     }
//     this.calculateTotal();
//   },

//   calculateTotal: function() {
//     console.log(this.cookiePerHour);
//     for(let i = 0; i < this.cookiePerHour.length; i++){
//       this.total += this.cookiePerHour[i];
//     }
//   },

//   render: function() {
//     this.cookieCount();
//     console.log('render function called');

//     let articleElem = document.createElement('article');
//     sectionElemFour.appendChild(articleElem);

//     let h6Elem = document.createElement('h6');
//     h6Elem.textContent = this.storeLocation;
//     articleElem.appendChild(h6Elem);

//     let ulElem = document.createElement('ul');
//     h6Elem.appendChild(ulElem);
//     for (let i = 0; i < hours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiePerHour[i]} cookies`;
//       parisList.appendChild(liElem);
//     }
//     let liElem2 = document.createElement('li');
//     ulElem.appendChild(liElem2);
//     liElem2.textContent = `Total: ${this.total}`;

//   }
// };

// let sectionElemFive = document.getElementById('Lima');
// console.log(sectionElemFive);

// let limaList = document.getElementById('limaList');

// let lima = {
//   storeLocation: 'Lima',
//   min: 2,
//   max: 16,
//   avgCookieSales: 4.6,
//   custPerHour: [],
//   cookiePerHour: [],
//   total: 0,
//   custCount: function() {
//     for (let i = 0; i < hours.length; i++){
//       let randomHourlyCust = randomCustCount(this.min, this.max);
//       this.custPerHour.push(randomHourlyCust);
//     }
//   },
//   cookieCount: function () {
//     this.custCount();
//     for (let i = 0; i < hours.length; i++) {
//       let hourlyCookies = Math.ceil(this.custPerHour[i] * this.avgCookieSales);
//       this.cookiePerHour.push(hourlyCookies);
//     }
//     this.calculateTotal();
//   },
//   calculateTotal: function() {
//     console.log(this.cookiePerHour);
//     for(let i = 0; i < this.cookiePerHour.length; i++){
//       this.total += this.cookiePerHour[i];
//     }
//   },

//   render: function (){
//     this.cookieCount();
//     console.log('render function called');

//     let articleElem = document.createElement('article');
//     sectionElemFive.appendChild(articleElem);

//     let h6Elem = document.createElement('h6');
//     h6Elem.textContent = this.storeLocation;
//     articleElem.appendChild(h6Elem);

//     let ulElem = document.createElement('ul');
//     h6Elem.appendChild(ulElem);
//     for (let i = 0; i < hours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = ` ${hours[i]}: ${this.cookiePerHour[i]} cookies`;
//       limaList.appendChild(liElem);
//     }
//     let liElem2 = document.createElement('li');
//     ulElem.appendChild(liElem2);
//     liElem2.textContent = `Total: ${this.total}`;
//   }

// };

// console.log(seattle.cookiePerHour);
// console.log(seattle.custPerHour);
// console.log(seattle.total);
// seattle.render();

// console.log(tokyo.cookiePerHour);
// console.log(tokyo.custPerHour);
// console.log(tokyo.total);
// tokyo.render();

// console.log(dubai.cookiePerHour);
// console.log(dubai.custPerHour);
// console.log(dubai.total);
// dubai.render();

// console.log(paris.cookiePerHour);
// console.log(paris.custPerHour);
// console.log(paris.total);
// paris.render();

// console.log(lima.cookiePerHour);
// console.log(lima.custPerHour);
// console.log(lima.total);
// lima.render();
