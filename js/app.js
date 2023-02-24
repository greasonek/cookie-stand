'use strict';

let sectionElem = document.getElementById('Seattle');
console.log(sectionElem);

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomCustCount(min, max){
  return Math.floor(Math.random() * (max - min +1) + min);
}

let seattleList = document.getElementById('seattleList');

let seattle = {
  storeLocation: 'Seattle',
  min: 23,
  max: 65,
  avgCookieSales: 6.3,
  custPerHour: [],
  cookiePerHour: [],
  custCount: function() {
    for (let i = 0; i < hours.length; i++){
      let randomHourlyCust = randomCustCount(this.min, this.max);
      this.custPerHour.push(randomHourlyCust);
    }
  },
  cookieCount: function() {
    this.custCount();
    for (let i = 0; i < hours.length; i++){
      // let randomCookiePerCust = randomCookieCount();
      let hourlyCookies = Math.ceil(this.custPerHour[i] * this.avgCookieSales);
      this.cookiePerHour.push(hourlyCookies);
    }
  },

  render: function(){
    this.cookieCount();
    console.log('render function called');
    let articleElem = document.createElement('article');
    sectionElem.appendChild(articleElem);

    let h6Elem = document.createElement('h6');
    h6Elem.textContent = this.storeLocation;
    articleElem.appendChild(h6Elem);

    let ulElem = document.createElement('ul');
    h6Elem.appendChild(ulElem);
    for(let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiePerHour[i]} cookies`;
      seattleList.appendChild(liElem);
    }
  }
};
// seattle.custCount();
// console.log(seattle.custPerHour);


let sectionElemTwo = document.getElementById('Tokyo');
console.log(sectionElemTwo);

let tokyoList = document.getElementById('tokyoList');

let tokyo = {
  storeLocation: 'Tokyo',
  min: 3,
  max: 24,
  avgCookieSales: 1.2,
  custPerHour: [],
  cookiePerHour: [],
  custCount: function () {
    for (let i = 0; i < hours.length; i++){
      let randomHourlyCust = randomCustCount(this.min, this.max);
      this.custPerHour.push(randomHourlyCust);
    }
  },

  cookieCount: function () {
    this.custCount();
    for (let i = 0; i < hours.length; i++) {
      let hourlyCookies = Math.ceil(this.custPerHour[i] * this.avgCookieSales);
      this.cookiePerHour.push(hourlyCookies);
    }
  },

  render: function(){
    this.cookieCount();
    console.log('render function called');

    let articleElem = document.createElement('article');
    sectionElemTwo.appendChild(articleElem);

    let h6Elem = document.createElement('h6');
    h6Elem.textContent = this.storeLocation;
    articleElem.appendChild(h6Elem);

    let ulElem = document.createElement('ul');
    h6Elem.appendChild(ulElem);
    for(let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiePerHour[i]} cookies`;
      tokyoList.appendChild(liElem);
    }
  }
};


let sectionElemThree = document.getElementById('Dubai');
console.log(sectionElemThree);

let dubaiList = document.getElementById('dubaiList');

let dubai = {
  storeLocation: 'Dubai',
  min: 11,
  max: 28,
  avgCookieSales: 3.7,
  custPerHour: [],
  cookiePerHour: [],
  custCount: function () {
    for (let i = 0; i < hours.length; i++){
      let randomHourlyCust = randomCustCount(this.min, this.max);
      this.custPerHour.push(randomHourlyCust);
    }
  },

  cookieCount: function () {
    this.custCount();
    for (let i = 0; i < hours.length; i++) {
      let hourlyCookies = Math.ceil(this.custPerHour[i] * this.avgCookieSales);
      this.cookiePerHour.push(hourlyCookies);
    }
  },

  render: function(){
    this.cookieCount();
    console.log('render function called');

    let articleElem = document.createElement('article');
    sectionElemThree.appendChild(articleElem);

    let h6Elem = document.createElement('h6');
    h6Elem.textContent = this.storeLocation;
    articleElem.appendChild(h6Elem);

    let ulElem = document.createElement('ul');
    h6Elem.appendChild(ulElem);
    for(let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiePerHour[i]} cookies`;
      dubaiList.appendChild(liElem);
    }
  }
};

let sectionElemFour = document.getElementById('Paris');
console.log(sectionElemFour);

let parisList = document.getElementById('parisList');

let paris = {
  storeLocation: 'Paris',
  min: 20,
  max: 38,
  avgCookieSales: 2.3,
  custPerHour: [],
  cookiePerHour: [],
  custCount: function () {
    for (let i = 0; i < hours.length; i++) {
      let randomHourlyCust = randomCustCount(this.min, this.max);
      this.custPerHour.push(randomHourlyCust);
    }
  },

  cookieCount: function () {
    this.custCount();
    for (let i = 0; i < hours.length; i++) {
      let hourlyCookies = Math.ceil(this.custPerHour[i] * this.avgCookieSales);
      this.cookiePerHour.push(hourlyCookies);
    }
  },

  render: function() {
    this.cookieCount();
    console.log('render function called');

    let articleElem = document.createElement('article');
    sectionElemFour.appendChild(articleElem);

    let h6Elem = document.createElement('h6');
    h6Elem.textContent = this.storeLocation;
    articleElem.appendChild(h6Elem);

    let ulElem = document.createElement('ul');
    h6Elem.appendChild(ulElem);
    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiePerHour[i]} cookies`;
      parisList.appendChild(liElem);
    }
  }
  
};


let sectionElemFive = document.getElementById('Lima');
console.log(sectionElemFive);

let limaList = document.getElementById('limaList');

let lima = {
  storeLocation: 'Lima',
  min: 2,
  max: 16,
  avgCookieSales: 4.6,
  custPerHour: [],
  cookiePerHour: [],
  custCount: function() {
    for (let i = 0; i < hours.length; i++){
      let randomHourlyCust = randomCustCount(this.min, this.max);
      this.custPerHour.push(randomHourlyCust);
    }  
  },
  cookieCount: function () {
    this.custCount();
    for (let i = 0; i < hours.length; i++) {
      let hourlyCookies = Math.ceil(this.custPerHour[i] * this.avgCookieSales);
      this.cookiePerHour.push(hourlyCookies);
    }
  },

  render: function (){
    this.cookieCount();
    console.log('render function called');

    let articleElem = document.createElement('article');
    sectionElemFive.appendChild(articleElem);

    let h6Elem = document.createElement('h6');
    h6Elem.textContent = this.storeLocation;
    articleElem.appendChild(h6Elem);

    let ulElem = document.createElement('ul');
    h6Elem.appendChild(ulElem);
    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = ` ${hours[i]}: ${this.cookiePerHour[i]} cookies`;
      limaList.appendChild(liElem);
    }
  }

};

console.log(seattle.cookiePerHour);
console.log(seattle.custPerHour);
seattle.render();

console.log(tokyo.cookiePerHour);
console.log(tokyo.custPerHour);
tokyo.render();

console.log(dubai.cookiePerHour);
console.log(dubai.custPerHour);
dubai.render();

console.log(paris.cookiePerHour);
console.log(paris.custPerHour);
paris.render();

console.log(lima.cookiePerHour);
console.log(lima.custPerHour);
lima.render();
