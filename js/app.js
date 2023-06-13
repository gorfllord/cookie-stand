'use strict';

const pageContainer = document.getElementById('salesNumbers');

function totalCookies(totalArr) {
  let sum = 0;
  for (let i = 0; i < totalArr.length; i++) {
    sum += totalArr[i];
  }
  return sum;
}

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  hourlySales: function() {
    return Math.floor((Math.random() * (this.max - this.min + 1) + this.min) * this.avg);
  },
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  sales: [],
  logBreakdown: function(ul) {
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
  render: function() {
    let article = document.createElement('article');
    let ul = document.createElement('ul');
    let h3 = document.createElement('h3');
    pageContainer.append(article);
    h3.textContent = this.name;
    this.logBreakdown(ul);
    article.append(h3);
    article.append(ul);
  }
};
let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  hourlySales: function() {
    return Math.floor((Math.random() * (this.max - this.min + 1) + this.min) * this.avg);
  },
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  sales: [],
  logBreakdown: function(ul) {
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
  render: function() {
    let article = document.createElement('article');
    let ul = document.createElement('ul');
    let h3 = document.createElement('h3');
    pageContainer.append(article);
    h3.textContent = this.name;
    this.logBreakdown(ul);
    article.append(h3);
    article.append(ul);
  }
};
let dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  hourlySales: function() {
    return Math.floor((Math.random() * (this.max - this.min + 1) + this.min) * this.avg);
  },
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  sales: [],
  logBreakdown: function(ul) {
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
  render: function() {
    let article = document.createElement('article');
    let ul = document.createElement('ul');
    let h3 = document.createElement('h3');
    pageContainer.append(article);
    h3.textContent = this.name;
    this.logBreakdown(ul);
    article.append(h3);
    article.append(ul);
  }
};
let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  hourlySales: function() {
    return Math.floor((Math.random() * (this.max - this.min + 1) + this.min) * this.avg);
  },
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  sales: [],
  logBreakdown: function(ul) {
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
  render: function() {
    let article = document.createElement('article');
    let ul = document.createElement('ul');
    let h3 = document.createElement('h3');
    pageContainer.append(article);
    h3.textContent = this.name;
    this.logBreakdown(ul);
    article.append(h3);
    article.append(ul);
  }
};
let lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  hourlySales: function() {
    return Math.floor((Math.random() * (this.max - this.min + 1) + this.min) * this.avg);
  },
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  sales: [],
  logBreakdown: function(ul) {
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
  render: function() {
    let article = document.createElement('article');
    let ul = document.createElement('ul');
    let h3 = document.createElement('h3');
    pageContainer.append(article);
    h3.textContent = this.name;
    this.logBreakdown(ul);
    article.append(h3);
    article.append(ul);
  }
};

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
