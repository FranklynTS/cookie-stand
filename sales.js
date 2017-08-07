
var PdxAir = {
    name: 'PDX Airport',
    minCust: 23,
    maxCust: 65,
    avgCoS: 6.3,
   

    customerPH: function (){
        return  Math.floor( Math.random() * (this.maxCust - this.minCust )) + this.minCust; 

    },
    totalCookiesPh: function () {
        var cookieArry = [];

        for ( var i = 0 ; i < 14; i ++ ){

        cookieArry.push (Math.floor( this.customerPH() * this.avgCoS ));
    
        }
    return cookieArry

    },

    addToDom: function(){
    var airport1 = document.getElementById ('Airport' );
    var aL1 = document.createElement ( 'li' );
    aL1.innerHTML = ' 6am: 163 cookies';
    airport1.appendChild( aL1 );
}
    
};
PdxAir.addToDom();