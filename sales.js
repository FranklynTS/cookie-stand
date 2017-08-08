
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
            var totalCook = 0;
            fro (var i =0; i < this.cookieArry)
        }
}
    
};
PdxAir.addToDom();