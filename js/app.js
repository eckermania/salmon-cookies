'use strict';

// Time slots
var time = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];

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

//Literal object for the 1st and Pike location
var pike = {
  name: '1st and Pike',
  min: 23,
  max: 65,
  avgSale: 6.3,
  customers: [],
  cookie: [],
  custRand: function() {
    for(var i = 0; i < time.length; i++){
      var x = getRandom(this.min, this.max);
      this.customers.push(x);
    }
    // console.log(this.customers);
    // console.log(this.customers.length);
  },
  cookieRand: function() {
    for (var i = 0; i < time.length; i++){
      var y = Math.round(cookieProd(this.customers[i], this.avgSale));
      this.cookie.push(y);
      //   console.log(this.cookie);
    }
  },
  render: function(storeId){
    var UlEl = document.getElementById(storeId);
    for (var i = 0; i < this.cookie.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = time[i] + ': ' + this.cookie[i] + ' cookies';
      UlEl.appendChild(liEl);
    }
  },
  total: function(storeId) {
    var UlEl = document.getElementById(storeId);
    var cookieTotal = sumArray(this.cookie);
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + cookieTotal + ' cookies';
    UlEl.appendChild(liEl);
  }
};

//Calling all methods for the pike store
pike.custRand();
// console.log(pike.custRand());
pike.cookieRand();
// console.log(pike.cookieRand());
// console.log(pike.customers);
pike.render('pikestore');
// console.log(sumArray(pike.customers));
pike.total('pikestore');

//Literal object for the SeaTac store

var seaTac = {
  name: 'SeaTac Airport',
  min: 3,
  max: 24,
  avgSale: 1.2,
  customers: [],
  cookie: [],
  custRand: function() {
    for(var i = 0; i < time.length; i++){
      var x = getRandom(this.min, this.max);
      this.customers.push(x);
    }

  },
  cookieRand: function() {
    for (var i = 0; i < time.length; i++){
      var y = Math.round(cookieProd(this.customers[i], this.avgSale));
      this.cookie.push(y);
    }
  },
  render: function(storeId){
    var UlEl = document.getElementById(storeId);

    for (var i = 0; i < this.cookie.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = time[i] + ': ' + this.cookie[i] + ' cookies';
      UlEl.appendChild(liEl);
    }
  },
  total: function(storeId) {
    var UlEl = document.getElementById(storeId);
    var cookieTotal = sumArray(this.cookie);
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + cookieTotal + ' cookies';
    UlEl.appendChild(liEl);
  }
};

//Calling all methods for the SeaTac store
seaTac.custRand();
seaTac.cookieRand();
seaTac.render('ststore');
seaTac.total('ststore');

//Literal object for the Seattle Center store

var center = {
  name: 'Seattle Center',
  min: 11,
  max: 38,
  avgSale: 3.7,
  customers: [],
  cookie: [],
  custRand: function() {
    for(var i = 0; i < time.length; i++){
      var x = getRandom(this.min, this.max);
      this.customers.push(x);
    }

  },
  cookieRand: function() {
    for (var i = 0; i < time.length; i++){
      var y = Math.round(cookieProd(this.customers[i], this.avgSale));
      this.cookie.push(y);
    }
  },
  render: function(storeId){
    var UlEl = document.getElementById(storeId);

    for (var i = 0; i < this.cookie.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = time[i] + ': ' + this.cookie[i] + ' cookies';
      UlEl.appendChild(liEl);
    }
  },
  total: function(storeId) {
    var UlEl = document.getElementById(storeId);
    var cookieTotal = sumArray(this.cookie);
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + cookieTotal + ' cookies';
    UlEl.appendChild(liEl);
  }
};

//Calling all methods for the SeaTac store
center.custRand();
center.cookieRand();
center.render('centerstore');
center.total('centerstore');

//Literal object for the Capitol Hill store

var capHill = {
  name: 'Capitol Hill',
  min: 20,
  max: 38,
  avgSale: 2.3,
  customers: [],
  cookie: [],
  custRand: function() {
    for(var i = 0; i < time.length; i++){
      var x = getRandom(this.min, this.max);
      this.customers.push(x);
    }

  },
  cookieRand: function() {
    for (var i = 0; i < time.length; i++){
      var y = Math.round(cookieProd(this.customers[i], this.avgSale));
      this.cookie.push(y);
    }
  },
  render: function(storeId){
    var UlEl = document.getElementById(storeId);

    for (var i = 0; i < this.cookie.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = time[i] + ': ' + this.cookie[i] + ' cookies';
      UlEl.appendChild(liEl);
    }
  },
  total: function(storeId) {
    var UlEl = document.getElementById(storeId);
    var cookieTotal = sumArray(this.cookie);
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + cookieTotal + ' cookies';
    UlEl.appendChild(liEl);
  }
};

//Calling all methods for the Capitol Hill store
capHill.custRand();
capHill.cookieRand();
capHill.render('caphillstore');
capHill.total('caphillstore');

//Literal object for the Alki store

var alki = {
  name: 'Alki',
  min: 2,
  max: 16,
  avgSale: 4.6,
  customers: [],
  cookie: [],
  custRand: function() {
    for(var i = 0; i < time.length; i++){
      var x = getRandom(this.min, this.max);
      this.customers.push(x);
    }

  },
  cookieRand: function() {
    for (var i = 0; i < time.length; i++){
      var y = Math.round(cookieProd(this.customers[i], this.avgSale));
      this.cookie.push(y);
    }
  },
  render: function(storeId){
    var UlEl = document.getElementById(storeId);

    for (var i = 0; i < this.cookie.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = time[i] + ': ' + this.cookie[i] + ' cookies';
      UlEl.appendChild(liEl);
    }
  },
  total: function(storeId) {
    var UlEl = document.getElementById(storeId);
    var cookieTotal = sumArray(this.cookie);
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + cookieTotal + ' cookies';
    UlEl.appendChild(liEl);
  }
};

//Calling all methods for the Alki store
alki.custRand();
alki.cookieRand();
alki.render('alkistore');
alki.total('alkistore');