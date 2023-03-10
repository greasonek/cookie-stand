'use strict';

// // window into the DOM vvv
let sectionElem = document.getElementById('cookies-sales');
let allStoreSales = [];

let newStoreForm = document.getElementById('new-store');

// // global variables vvv
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomCustCount(min, max){
  return Math.floor(Math.random() * (max - min +1) + min);
}

function StoreLocation (name, min, max, avgCookieSales, custPerHour, cookiePerHour){

  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookieSales = avgCookieSales;
  this.custPerHour = custPerHour;
  this.cookiePerHour = cookiePerHour;

  allStoreSales.push(this);
}

let seattle = new StoreLocation ('Seattle', 23, 65, 6.3, [], []);
let tokyo = new StoreLocation ('Tokyo', 3, 4, 1.2, [], []);
let dubai = new StoreLocation ('Dubai', 11, 28, 3.7, [], []);
let paris = new StoreLocation ('Paris', 20, 28, 2.3, [], []);
let lima = new StoreLocation ('Lima', 2, 16, 4.6, [], []);

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
};

StoreLocation.prototype.calculateTotal = function(){
  this.total = 0;
  for(let i = 0; i < this.cookiePerHour.length; i++){
    this.total += this.cookiePerHour[i];
  }
};

let tableElem = document.createElement('table');
sectionElem.appendChild(tableElem);

let headerElem = document.createElement('thead');
tableElem.appendChild(headerElem);

let tBodyElem = document.createElement('tbody');
tableElem.appendChild(tBodyElem);

StoreLocation.prototype.render = function(){

  let cityRow = document.createElement('tr');
  tBodyElem.appendChild(cityRow);

  let cityData = document.createElement('td');
  cityData.textContent=this.name;
  cityRow.appendChild(cityData);

  for(let i = 0; i < hours.length; i++) {
    let trElem = document.createElement('td');
    trElem.textContent = this.cookiePerHour[i];
    cityRow.appendChild(trElem);
    console.log(this.cookiePerHour[i]);
  }

  // let newStoreName = document.createElement('tr');
  // tBodyElem.appendChild(newStoreName);

  // for(let i = 0; i < hours.length; i++){
  //   let storeName = document.createElement('td');
  //   storeName.textContent = this.cookiePerHour[i];
  //   cityRow.appendChild(storeName);
  //   console.log(this.cookiePerHour[i]);
  // }

  let tdTotalElem = document.createElement('td');
  cityRow.appendChild(tdTotalElem);
  tdTotalElem.textContent = this.total;
};

function renderHeader() {

  let trHeaderElem = document.createElement('tr');
  headerElem.appendChild(trHeaderElem);

  let blankCell = document.createElement('th');
  blankCell.textContent=' ';
  trHeaderElem.appendChild(blankCell);

  for(let i = 0; i < hours.length; i++) {
    const thElem = document.createElement('th');
    trHeaderElem.appendChild(thElem);
    thElem.textContent = hours[i];
  }

  let thFinalCell = document.createElement('th');
  trHeaderElem.appendChild(thFinalCell);
  thFinalCell.textContent = 'Daily Total';
}

function renderFooter() {
  let tFootElem = document.createElement('tfoot');
  tableElem.appendChild(tFootElem);

  let trFooterElem = document.createElement('tr');
  tFootElem.appendChild(trFooterElem);

  let firstCell = document.createElement('td');
  firstCell.textContent = 'Hourly Total';
  trFooterElem.appendChild(firstCell);

  let totalsRowArray = [];

  for(let i = 0; i <hours.length; i++){
    let currentTotal = 0;
    for (let j = 0; j < allStoreSales.length; j++){
      currentTotal += allStoreSales[j].cookiePerHour[i];
    }

    totalsRowArray.push(currentTotal);
    console.log(totalsRowArray);
  }

  let grandTotal = 0;
  for(let i = 0; i < totalsRowArray.length; i++){
    grandTotal += totalsRowArray[i];
    let tdFootElem = document.createElement('td');
    trFooterElem.appendChild(tdFootElem);
    tdFootElem.textContent = totalsRowArray[i];
  }
  let lastCell = document.createElement('td');
  trFooterElem.appendChild(lastCell);
  lastCell.textContent = grandTotal;
}

function handleSubmit(event){
  event.preventDefault();

  let storeName = event.target.store.value;
  let min = +event.target.min.value;
  let max = +event.target.max.value;
  let AvgCookieSales = +event.target.AvgCookieSales.value;
  console.log(storeName, min, max, AvgCookieSales);

  let addedStore = new StoreLocation(storeName, min, max, AvgCookieSales, [], []);
  addedStore.custCount();
  addedStore.cookieCount();
  addedStore.calculateTotal();
  document.querySelector('tfoot').remove();
  newStoreForm.reset();
  addedStore.render();
  renderFooter();

  console.log('addedStore', addedStore);
}

renderHeader();


console.log(seattle.custCount());
console.log(seattle.cookieCount());
console.log(seattle.calculateTotal());
console.log(seattle);

console.log(tokyo.custCount());
console.log(tokyo.cookieCount());
console.log(tokyo.calculateTotal());
console.log(tokyo);

console.log(dubai.custCount());
console.log(dubai.cookieCount());
console.log(dubai.calculateTotal());
console.log(dubai);

console.log(paris.custCount());
console.log(paris.cookieCount());
console.log(paris.calculateTotal());
console.log(paris);

console.log(lima.custCount());
console.log(lima.cookieCount());
console.log(lima.calculateTotal());
console.log(lima);

console.log(allStoreSales);
console.log(allStoreSales[0].cookiePerHour[0]);

renderFooter();

console.log(seattle.render());
console.log(tokyo.render());
console.log(dubai.render());
console.log(paris.render());
console.log(lima.render());

newStoreForm.addEventListener('submit', handleSubmit);

