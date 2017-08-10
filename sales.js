'use strict'

function Location ( name, minCust, maxCust, avgCoS ){
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCoS = avgCoS;
    this.cookieArry = []
 
    
    this.getTotal = 0    

    this.totalCookiesPh()
    this.addToDom();
}
Location.prototype.customerPH = function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
}
    

Location.prototype.totalCookiesPh = function () {
        for (var i = 0; i < 15; i++){
            this.cookieArry.push(Math.floor(this.customerPH() * this.avgCoS));
        }
}
Location.prototype.sum = function (){
        for ( var i = 0; i < 15; i++){
            this.getTotal = this.cookieArry[i] + this.getTotal;
        }

        return this.getTotal;
    }
    
Location.prototype.addToDom = function () {
         var timeArry = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm:', '1pm: ', 
                        '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '];
    
        var table = document.getElementById('location');
        var newRow = document.createElement('tr');

        table.appendChild(newRow);

        var title = document.createElement('td');
        title.innerHTML = (this.name);
        table.appendChild( title);
    
        for (var i = 0; i < 15; i++) {

            var aL1 = document.createElement('td');
            aL1.innerHTML = this.cookieArry[i];
            table.appendChild( aL1);
        }
        var tbody = document.getElementById( 'Location');  //class start
        var hourlyTotalsRow= document.createElement( 'tr' );

        var hourlyHeader= document. createElement('th');
        hourlyHeader.innText = 'Hourly Totals';
        hourlyTotalsRow.appendChild(hourlyHeader);
        
        for ( var i = 0; i < 14; i ++ ){
            var newCell = document. createElement( 'td');

            var colTotal= 0;
            //  for ( var j = 0; j < allShops.length; j ++){
            //     colTotal += allShops[j].cookiesSoldHour[i];
            // }

            newCell.innerText = colTotal;
            hourlyTotalsRow.appendChild( newCell);

        }
        tbody.appendChild( hourlyTotalsRow );

}

var PdxAirport = new Location ( 'PdxAirport', 23, 65, 6.3);
var Pioneer = new Location ( 'PioneerSquare', 3, 24, 1.2);
var Powells = new Location ( 'Powells', 11, 38, 3.7);
var StJohns = new Location ( 'StJohns', 20, 38, 2.3);
var WaterFront = new Location ( 'WaterFront', 2, 16, 4.6);
var allShops = [ PdxAirport, Pioneer, Poweslls, StJohns, WarterFront]
