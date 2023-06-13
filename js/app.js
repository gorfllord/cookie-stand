'use strict';

const pageContainer = document.getElementById('salesNumbers');

function totalCookies(totalArr) {
  let sum = 0;
  for (let i = 0; i < totalArr.length; i++) {
    sum += totalArr[i];
  }
  return sum;
}
function City(name, min, max, avg) {
  this.name = name,
  this.min = min,
  this.max = max,
  this.avg = avg,
  this.hourlySales = function() {
    return Math.floor((Math.random() * (this.max - this.min + 1) + this.min) * this.avg);
  },
  this.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  this.sales = [],
  this.logBreakdown = function(ul) {
    for (let i = 0; i < this.hours.length; i++) {
      let x = this.hourlySales();
      this.sales.push(x);
    }
    for (let i = 0; i < this.hours.length; i++) {
      let listItem = document.createElement('li');
      listItem.textContent = `${this.hours[i]}: ${this.sales[i]} cookies`;
      ul.appendChild(listItem);
    }
    let total = document.createElement('li');
    total.textContent = `Total: ${totalCookies(this.sales)} cookies`;
    ul.appendChild(total);
  },
  this.render = function() {
    let article = document.createElement('article');
    let ul = document.createElement('ul');
    let h3 = document.createElement('h3');
    pageContainer.appendChild(article);
    h3.textContent = this.name;
    this.logBreakdown(ul);
    article.appendChild(h3);
    article.appendChild(ul);
  };
}

let seattle = new City('Seattle', 23, 65, 6.3);
let tokyo = new City('Tokyo', 3, 24, 1.2);
let dubai = new City('Dubai', 11, 38, 3.7);
let paris = new City('Paris', 20, 38, 2.3);
let lima = new City('Lima', 2, 16, 4.6);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
