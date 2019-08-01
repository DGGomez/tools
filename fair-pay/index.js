const fs = require('fs');

// time vs money

var run = function() {
    var count = 47000;
    var list = [];
    while (true){
        var tax = checkTax(count);
        var val = count +": "+tax+" taxes: "+((count-tax)/count)*100+"%\n";
        fs.appendFileSync('list.txt', val);
        //list.sort();
        if(count>300000){
            
            break;
        }
        count=count+1000;
    }
    //console.log(list);
}
// ontario
function checkTax(wage){
    if(wage<=47630){
        // 15%
        wage = wage - wage*0.15;
    }
    if(wage > 47630 && wage <=95259){
       //20.5% and 15%
       wage = wage - (wage-47630)*0.205- 47630*0.15;
    }
    if(wage > 95259 && wage <= 147667){
        //26%
        wage = wage - (wage-95259)*0.26 - 47629*0.205 - 47630*0.15;
    }
    if(wage > 147667 && wage <= 210371){
        //29%
        wage = wage - (wage-147667)*0.29 - 52408*0.26 - 47629*0.205 - 47630*0.15;
    }
    if(wage > 210371){
        //33%
        wage = wage - (wage-210371)*0.33 - 62704*0.29 - 52408*0.26 - 47629*0.205 - 47630*0.15;
    }
    // return wage after taxes
    return wage;
}

run();