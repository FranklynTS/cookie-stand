
var PdxAir = {
    name: 'PDX Airport',
    minCust: 23,
    maxCust: 65,
    avgCoS: 6.3,
   

    generateRandomNum: function (){
        return  Math.floor( Math.random() * (this.maxCust - this.minCust )) + this.minCust; 

    },
    addToDom:function(){
        
    }
    
};