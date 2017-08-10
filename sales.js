'use strict'

function Location(name, minCust, maxCust, avgCoS) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCoS = avgCoS;
    this.cookieArry = []


    this.getTotal = 0

    this.totalCookiesPh()
    this.addToDom();
    this.sum();
}
Location.prototype.customerPH = function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
}


Location.prototype.totalCookiesPh = function () {
    for (var i = 0; i < 15; i++) {
        this.cookieArry.push(Math.floor(this.customerPH() * this.avgCoS));
    }
}
Location.prototype.sum = function () {
    for (var i = 0; i < 15; i++) {
        this.getTotal = this.cookieArry[i] + this.getTotal;
    }

    return this.getTotal;
}

Location.prototype.addToDom = function () {
    var timeArry = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm:', '1pm: ',
        '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '
    ];

    var table = document.getElementById('location');
    var newRow = document.createElement('tr');

    table.appendChild(newRow);

    var title = document.createElement('td');
    title.innerHTML = this.name;
    newRow.appendChild(title);

    for (var i = 0; i < 15; i++) {

        var aL1 = document.createElement('td');
        aL1.innerHTML = this.cookieArry[i];
        newRow.appendChild(aL1);
    }
    var sum = document.createElement('td');
    sum.innerHTML = this.sum();
    newRow.appendChild(sum);


}

function hourlyTotals() {
    
    var tfoot = document.getElementById('foot');
    var hourlyTotalsRow = document.createElement('tr');
    hourlyTotalsRow.setAttribute('id', 'totalRows');
    
    var hourlyHeader = document.createElement('th');
    hourlyHeader.innerText = 'Hourly Totals';
    hourlyTotalsRow.appendChild(hourlyHeader);
    
    for (var i = 0; i < 15; i++) {
        var newCell = document.createElement('td');
        
        var colTotal = 0;
        for (var j = 0; j < allShops.length; j++) {
            colTotal += allShops[j].cookieArry[i];
        }
        
        newCell.innerText = colTotal;
        hourlyTotalsRow.appendChild(newCell);
        var totsRow = document.getElementById( 'totalRows');

        if ( totsRow ){
            totsRow.remove();
        };
    }
    tfoot.appendChild(hourlyTotalsRow);
}

var PdxAirport = new Location('PdxAirport', 23, 65, 6.3);
var Pioneer = new Location('PioneerSquare', 3, 24, 1.2);
var Powells = new Location('Powells', 11, 38, 3.7);
var StJohns = new Location('StJohns', 20, 38, 2.3);
var WaterFront = new Location('WaterFront', 2, 16, 4.6);
var allShops = [PdxAirport, Pioneer, Powells, StJohns, WaterFront]

hourlyTotals(); //

var form = document.getElementById('addStore');
form.addEventListener('submit', formHandler);

function formHandler() {
    event.preventDefault();

    var newStoreName = new Location(this.location.value, this.minCusto.value, this.maxCusto.value, this.avgCSold.value);
    allShops.push( newStoreName);
    hourlyTotals();
};