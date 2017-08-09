'use strict'

function Location ( name, minCust, maxCust, avgCoS ){
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCoS = avgCoS;
    this.cookieArry = []
 
    
    this.getTotal = 0    //

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
        // var timeArry = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm:', '1pm: ', 
        //                 '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];
    
    
        var table = document.getElementById('location');
        var newRow = document.createElement('tr');
       // newRow.setAttribute('id', this.id);
        newRow.innerHTML = this.name;
        table.appendChild(newRow);

        var title = document.createElement('td');
        //title.innerHTML = (this.name);
        table.appendChild( title);
    
        for (var i = 0; i < 15; i++) {

            var aL1 = document.createElement('td');
            aL1.innerHTML = this.cookieArry[i];
            table.appendChild( aL1);
        }

        // var aLi = document.createElement( 'td');
        // aLi.innerHTML =  'Total : ' + this.sum();
        // airport1.appendChild(aLi);


}
var PdxAirport = new Location ( 'PdxAirport', 23, 65, 6.3);
var Pioneer = new Location ( 'PioneerSquare', 3, 24, 1.2);
var Powells = new Location ( 'Powells', 11, 38, 3.7);
var StJohns = new Location ( 'StJohns', 20, 38, 2.3);
var WaterFront = new Location ( 'WaterFront', 2, 16, 4.6);



// var PdxAir = {
//     name: 'PDX Airport',
//     minCust: 23,
//     maxCust: 65,
//     avgCoS: 6.3,

//     customerPH: function () {
//         return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//     },
//     totalCookiesPh: function () {
//         var cookieArry = [];
//         cookieArry.push(Math.floor(this.customerPH() * this.avgCoS));

//         return cookieArry
//     },
//     addToDom: function () {
//         var timeArry = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm:', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ']

//         for (var i = 0; i < 15; i++) {
//             var airport1 = document.getElementById('PdxAirport');
//             var aL1 = document.createElement('li');
//             aL1.innerHTML = timeArry[i] + this.totalCookiesPh();

//             airport1.appendChild(aL1);
//         }
//     }
// };
//  PdxAir.addToDom();

// var pioneer = {
//     name: 'Pioneer Square',
//     minCust: 3,
//     maxCust: 24,
//     avgCoS: 1.2,

//     customerPH: function () {
//         return Math.floor(Math.random() * (this.maxCust - this.minCust));

//     },
//     totalCookiesPh: function () {
//         var cookieArry = [];
//         cookieArry.push(Math.floor(this.customerPH() * this.avgCoS));

//         return cookieArry
//     },
//     addToDom: function () {
//         var timeArry = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm:', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ']
//         for (var i = 0; i < 15; i++) {
//             var airport1 = document.getElementById('PioneerSquare');
//             var aL1 = document.createElement('li');
//             aL1.innerHTML = timeArry[i] + this.totalCookiesPh();

//             airport1.appendChild(aL1);
//         }
//     }
// };
// pioneer.addToDom();


// var powells = {
//     name: 'Powells',
//     minCust: 11,
//     maxCust: 38,
//     avgCoS: 3.7,

//     customerPH: function () {
//         return Math.floor(Math.random() * (this.maxCust - this.minCust));
//     },
//     totalCookiesPh: function () {
//         var cookieArry = [];
//         cookieArry.push(Math.floor(this.customerPH() * this.avgCoS));

//         return cookieArry
//     },
//     addToDom: function () {
//         var timeArry = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm:', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ']

//         for (var i = 0; i < 15; i++) {
//             var airport1 = document.getElementById('Powells');
//             var aL1 = document.createElement('li');
//             aL1.innerHTML = timeArry[i] + this.totalCookiesPh();

//             airport1.appendChild(aL1);
//         }
//     }
// };
// powells.addToDom();

// var StJohns = {
//     name: 'St. Johns',
//     minCust: 20,
//     maxCust: 38,
//     avgCoS: 2.3,

//     customerPH: function () {
//         return Math.floor(Math.random() * (this.maxCust - this.minCust));
//     },
//     totalCookiesPh: function () {
//         var cookieArry = [];
//         cookieArry.push(Math.floor(this.customerPH() * this.avgCoS));

//         return cookieArry
//     },
//     addToDom: function () {
//         var timeArry = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm:', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ']

//         for (var i = 0; i < 15; i++) {
//             var airport1 = document.getElementById('StJohns');
//             var aL1 = document.createElement('li');
//             aL1.innerHTML = timeArry[i] + this.totalCookiesPh();

//             airport1.appendChild(aL1);
//         }
//     }
// };
// StJohns.addToDom();

// var WaterFront = {
//     name: 'WaterFront',
//     minCust: 2,
//     maxCust: 16,
//     avgCoS: 4.6,

//     customerPH: function () {
//         return Math.floor(Math.random() * (this.maxCust - this.minCust));
//     },
//     totalCookiesPh: function () {
//         var cookieArry = [];
//         cookieArry.push(Math.floor(this.customerPH() * this.avgCoS));

//         return cookieArry
//     },
//     addToDom: function () {
//         var timeArry = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm:', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ']

//         for (var i = 0; i < 15; i++) {
//             var airport1 = document.getElementById('WaterFront');
//             var aL1 = document.createElement('li');
//             aL1.innerHTML = timeArry[i] + this.totalCookiesPh();

//             airport1.appendChild(aL1);
//         }
//     }
// };
// WaterFront.addToDom();
//console.log()