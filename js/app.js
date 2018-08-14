'use strict';

// Time slots
var time = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

//Helper function to get random number between defined min and max number of customers
function getRandom(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1))+min;
}

//Helper function to pass values from customers array into a function that calculates the projected number of cookies sold in an hour
function cookieProd(customers, avgSale){
  return customers * avgSale;
}

//Helper function to add two inputs together
function sum(a,b){
  var output = a+b;
  return output;
}

//Helper function to loop through a dynamic array (in this case the cookie array) to determine the total number of cookies projected for sale in a single day
function sumArray(dynamicArray){
  var output = 0;
  for (var i = 0; i < dynamicArray.length; i++){
    output = sum(output, dynamicArray[i]);
  }
  return output;
}

// Array to hold stores
var allStores = [];

// Access table in DOM
var storeTable = document.getElementById('stores');

// Constructor function for store objects

function Store(name, min, max, avgSale) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgSale = avgSale;
  this.customers = [];
  this.cookie = [];
  var objectThis = this;

  this.custRand = (function() {
    for(var i = 0; i < time.length; i++){
      var x = getRandom(objectThis.min, objectThis.max);
      objectThis.customers.push(x);
    }
  })();

  this.cookieRand = (function() {
    for (var i = 0; i < time.length; i++){
      var y = Math.round(cookieProd(objectThis.customers[i], objectThis.avgSale));
      objectThis.cookie.push(y);
    }
  })();
  this.total = sumArray(this.cookie);
  allStores.push(this);
}

// Declaring store instances
new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 15, 2.6, 4.6);

// Make table rows
Store.prototype.render = function(){
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);

  for(var i = 0; i < time.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookie[i];
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = this.total;
  trEl.appendChild(tdEl);

  storeTable.appendChild(trEl);
};

// Make table headers
function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Name';
  trEl.appendChild(thEl);

  for(var i = 0; i <= time.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = time[i];
    trEl.appendChild(thEl);
  }

  thEl.textContent = 'Total';
  trEl.appendChild(thEl);

  storeTable.appendChild(trEl);
}

// Create function to render all rows

function renderAllStores() {
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
}

makeHeaderRow();
renderAllStores();