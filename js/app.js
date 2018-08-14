'use strict';
var time = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];

function getRandom(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1))+min;
}

function cookieProd(customers, avgSale){
  return customers * avgSale;
}

function sum(a,b){
  var output = a+b;
  return output;
}

function sumArray(dynamicArray){
  var output = 0;
  for (var i = 0; i < dynamicArray.length; i++){
    output = sum(output, dynamicArray[i]);
  }
  return output;
}

var pike = {
  name: 'First and Pike',
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
};

pike.custRand();
// console.log(pike.custRand());
pike.cookieRand();
// console.log(pike.cookieRand());
// console.log(pike.customers);

pike.render = function(){
  var pikeUlEl = document.getElementById('pikestore');
  //   console.log(pikeUlEl);
  for (var i = 0; i < pike.cookie.length; i++){
    // console.log(pike.cookie[i]);
    var liEl = document.createElement('li');
    liEl.textContent = time[i] + ': ' + pike.cookie[i] + ' cookies';
    pikeUlEl.appendChild(liEl);
  }
};
pike.render();

console.log(sumArray(pike.customers));


pike.total = function() {
  var pikeUlEl = document.getElementById('pikestore');
  var cookieTotal = sumArray(pike.cookie);
  var liEl = document.createElement('li');
  liEl.textContent = 'Total: ' + cookieTotal + ' cookies';
  pikeUlEl.appendChild(liEl);
};
pike.total();
