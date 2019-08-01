const fs = require('fs');
var BigNumber = require('big-number');

let originalData = require('../api/richest_people.json');

var run = function(originalData){
    var result = new BigNumber(0);
    //realTimeWorth
    
    for(var i in originalData){
        result=result.plus(originalData[i].realTimeWorth);
         console.log("####################");
         console.log(result);
        // console.log("####################");
        // console.log(originalData[i]);
    }
    console.log(result.multiply(2));
}

run(originalData);
