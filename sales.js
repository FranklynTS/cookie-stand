
var PdxAir = {
    name: 'PDX Airport',
    minCust: 23,
    maxCust: 65,
    avgCoS: 6.3,
   

    customerPH: function (){
        return  Math.floor( Math.random() * (this.maxCust - this.minCust )); 

    },
    totalCookiesPh: function () {
        
        var cookieArry = [];


        cookieArry.push (Math.floor( this.customerPH() * this.avgCoS ));
    

    return cookieArry

    },

    addToDom: function(){
        var timeArry = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm:', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ']
        
        for ( var i = 0; i< 15; i ++){
    
            var airport1 = document.getElementById ('PdxAirport' );
    
            var aL1 = document.createElement ( 'li' );
    
            aL1.innerHTML = timeArry[i] + this.totalCookiesPh();

            airport1.appendChild( aL1 );

        }
}
    
};
PdxAir.addToDom();

var pioneer = {
    name: 'Pioneer Square',
    minCust: 3,
    maxCust: 24,
    avgCoS: 1.2,
   

    customerPH: function (){
        return  Math.floor( Math.random() * (this.maxCust - this.minCust )); 

    },
    totalCookiesPh: function () {
        
        var cookieArry = [];


        cookieArry.push (Math.floor( this.customerPH() * this.avgCoS ));
    

    return cookieArry

    },

    addToDom: function(){
        var timeArry = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm:', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ']
        
        for ( var i = 0; i< 15; i ++){
    
            var airport1 = document.getElementById ('PioneerSquare' );
    
            var aL1 = document.createElement ( 'li' );
    
            aL1.innerHTML = timeArry[i] + this.totalCookiesPh();

            airport1.appendChild( aL1 );

        }
}
    
};
pioneer.addToDom();


var powells = {
    name: 'Powells',
    minCust: 11,
    maxCust: 38,
    avgCoS: 3.7,
   

    customerPH: function (){
        return  Math.floor( Math.random() * (this.maxCust - this.minCust )); 

    },
    totalCookiesPh: function () {
        
        var cookieArry = [];


        cookieArry.push (Math.floor( this.customerPH() * this.avgCoS ));
    

    return cookieArry

    },

    addToDom: function(){
        var timeArry = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm:', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ']
        
        for ( var i = 0; i< 15; i ++){
    
            var airport1 = document.getElementById ('Powells' );
    
            var aL1 = document.createElement ( 'li' );
    
            aL1.innerHTML = timeArry[i] + this.totalCookiesPh();

            airport1.appendChild( aL1 );

        }
}
    
};
powells.addToDom();

var StJohns = {
    name: 'St. Johns',
    minCust: 20,
    maxCust: 38,
    avgCoS: 2.3,
   

    customerPH: function (){
        return  Math.floor( Math.random() * (this.maxCust - this.minCust )); 

    },
    totalCookiesPh: function () {
        
        var cookieArry = [];


        cookieArry.push (Math.floor( this.customerPH() * this.avgCoS ));
    

    return cookieArry

    },

    addToDom: function(){
        var timeArry = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm:', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ']
        
        for ( var i = 0; i< 15; i ++){
    
            var airport1 = document.getElementById ('StJohns' );
    
            var aL1 = document.createElement ( 'li' );
    
            aL1.innerHTML = timeArry[i] + this.totalCookiesPh();

            airport1.appendChild( aL1 );
            
        }
}
    
};
StJohns.addToDom();

var WaterFront = {
    name: 'WaterFront',
    minCust: 2,
    maxCust: 16,
    avgCoS: 4.6,
   

    customerPH: function (){
        return  Math.floor( Math.random() * (this.maxCust - this.minCust )); 

    },
    totalCookiesPh: function () {
        
        var cookieArry = [];


        cookieArry.push (Math.floor( this.customerPH() * this.avgCoS ));
    

    return cookieArry

    },

    addToDom: function(){
        var timeArry = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm:', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ']
        
        for ( var i = 0; i< 15; i ++){
    
            var airport2 = document.getElementById ('WaterFront');
    
            var aL1 = document.createElement ( 'li' );
    
            aL1.innerHTML = timeArry[i] + this.totalCookiesPh();

            airport2.appendChild( aL1 );
            
        }
}
    
};
WaterFront.addToDom();
console.log()