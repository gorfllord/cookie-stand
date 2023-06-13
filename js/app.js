'use strict';

const pageContainer = document.getElementById('salesNumbers');
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let allCities = [];
let table = document.createElement('table');
let tbody = document.createElement('tbody');
function totalCookies(totalArr) {
  let sum = 0;
  for (let i = 0; i < totalArr.length; i++) {
    sum += totalArr[i];
  }
  return sum;
}
function renderTableHeader() {
  let tr = document.createElement('tr');
  pageContainer.appendChild(table);
  table.appendChild(tbody);
  tbody.appendChild(tr);
  let topLeft = document.createElement('th');
  topLeft.textContent = 'City';
  tr.appendChild(topLeft);
  for (let i = 0; i < hours.length; i++){
    let x = hours[i];
    let header = document.createElement('th');
    header.textContent = x;
    tr.appendChild(header);
  }
}
function renderTableData(city) {
  let newRow = document.createElement('tr');
  tbody.appendChild(newRow);
  let x = city;
  let cityName = document.createElement('th');
  cityName.textContent = x.name;
  newRow.appendChild(cityName);
  x.getRandom();
  for (let j = 0; j < x.sales.length; j++) {
    let y = `${x.sales[j]}`;
    let data = document.createElement('td');
    data.textContent = y;
    newRow.appendChild(data);
  }
}
function renderTotalRow(cityArr) {
  let totalRow = document.createElement('tr');
  tbody.appendChild(totalRow);
  let total = document.createElement('th');
  total.textContent = 'Total:';
  totalRow.appendChild(total);
  for (let i = 0; i < hours.length; i++) {
    let hourlyTotals = [];
    for (let j = 0; j < cityArr.length; j++) {
      hourlyTotals.push(cityArr[j].sales[i]);
    }
    let totalHour = totalCookies(hourlyTotals);
    let totalData = document.createElement('td');
    totalData.textContent = totalHour;
    totalRow.appendChild(totalData);
  }
}

function City(name, min, max, avg) {
  this.name = name,
  this.min = min,
  this.max = max,
  this.avg = avg,
  this.hourlySales = function() {
    return Math.floor((Math.random() * (this.max - this.min + 1) + this.min) * this.avg);
  },
  this.sales = [],
  this.getRandom = function() {
    for (let i = 0; i < hours.length; i++) {
      let x = this.hourlySales();
      this.sales.push(x);
    }
  },
  this.logBreakdown = function(ul) {
    this.getRandom();
    for (let i = 0; i < hours.length; i++) {
      let listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${this.sales[i]} cookies`;
      ul.appendChild(listItem);
    }
    let total = document.createElement('li');
    total.textContent = `Total: ${totalCookies(this.sales)} cookies`;
    ul.appendChild(total);
  },
  this.renderList = function() {
    let article = document.createElement('article');
    let ul = document.createElement('ul');
    let h3 = document.createElement('h3');
    pageContainer.appendChild(article);
    h3.textContent = this.name;
    this.logBreakdown(ul);
    article.appendChild(h3);
    article.appendChild(ul);
  };
  allCities.push(this);
}

let seattle = new City('Seattle', 23, 65, 6.3);
let tokyo = new City('Tokyo', 3, 24, 1.2);
let dubai = new City('Dubai', 11, 38, 3.7);
let paris = new City('Paris', 20, 38, 2.3);
let lima = new City('Lima', 2, 16, 4.6);

renderTableHeader();
renderTableData(seattle);
renderTableData(tokyo);
renderTableData(dubai);
renderTableData(paris);
renderTableData(lima);
renderTotalRow(allCities);

// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();
