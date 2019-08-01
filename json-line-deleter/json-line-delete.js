const fs = require('fs');

let originalData = require('./original.json');

let jsonData;
try {
    if (fs.existsSync('./new.json')) {
        //file exists
        jsonData = require('./new.json');

    } else {
        jsonData = originalData;
    }
} catch (err) {
    console.error(err);
}

// check if value is a string
function isString(x) {
    return Object.prototype.toString.call(x) === "[object String]";
}

let newJson;
try {
    if (fs.existsSync('./newJson.json')) {
        //file exists
        newJson = require('./newJson.json');

    } else {
        newJson = {};
    }
} catch (err) {
    console.error(err);
}

// check if value is a string
function isString(x) {
    return Object.prototype.toString.call(x) === "[object String]";
}

function deleteingArray(oldVal) {

    for (var i in oldVal) {
        var keys = 0;
        // if array
        if (Array.isArray(oldVal[i])) {
            deleteingArray(oldVal[i]);
            if (oldVal[i].length < 1 || oldVal[i] == undefined || oldVal[i] == null) {
                        delete oldVal[i];
            }
        }
        // if multivariable
        else if (!isString(oldVal[i])) {
            keys = Object.keys(oldVal[i]);
            if (keys.length > 1) {
                deleteingMulti(oldVal[i]);
            }
            else {
            delete oldVal.shift();
        }
        }
        //if single
        else {
            delete oldVal.shift();
        }
        break;
    }
}

function deleteingMulti(oldVal) {

    for (var i in oldVal) {
        var keys = 0;
        // if array
        if (Array.isArray(oldVal[i])) {
            deleteingArray(oldVal[i]);
            if (oldVal[i].length < 1 || oldVal[i] == undefined || oldVal[i] == null) {
                        delete oldVal[i];
            }
        }
        // if multivariable
        else if (!isString(oldVal[i])) {
            keys = Object.keys(oldVal[i]);
            if (keys.length > 1) {
                deleteingMulti(oldVal[i]);
            }
            else {
            delete oldVal.shift();
        }
        }
        //if single
        else {
            delete oldVal[i];
        }
        break;
    }
}

function run(oldVal, newVal, originalVal) {
    // add new
    var org = JSON.stringify(originalVal);
    var val = JSON.stringify(newVal);
    var steps = [];
    var result = "";
    var count = 0;
    var flag = 0;
    var state ={};
    
    if(org==val){
        console.log("END OF FILE");
        process.exit(0);
    }
    // remove old
    for (var i in oldVal) {
        var keys = 0;
        // if array
        if (Array.isArray(oldVal[i])) {
            deleteingArray(oldVal[i]);
            if (oldVal[i].length < 1 || oldVal[i] == undefined || oldVal[i] == null) {
                        delete oldVal[i];
            }
        }
        // if multivariable
        else if (!isString(oldVal[i])) {
            keys = Object.keys(oldVal[i]);
            if (keys.length > 1) {
                deleteingMulti(oldVal[i]);
            }
        else {
            delete oldVal[i];
        }
        }
        //if single
        else {
            delete oldVal[i];
        }
        break;
    }
    // go through strings and identifiy difference
    
    // skip over excess brackets
    for ( var k =0; k< org.length; k++){

        if(count==4){
            break;
        }
        
        var charOrg = org.charAt(k);
        var charVal = val.charAt(k);
        // once count hits two the next value should be :
        if(count == 2 && charOrg != ":" && flag == 0){
            break;
        }
        if(count==2 && charOrg==":" && flag ==0){
            flag=1;
        }
        if (charOrg=="{"){
            steps.push("}");
            count=0;
            flag=0;
        }
        if(charOrg=="["){
            steps.push("]");
            count=0;
            flag=0;
        }
        if(charOrg=="}"){
            steps.pop();
        }
        if(charOrg=="]"){
            steps.pop();
        }
        if (charOrg==charVal){
            result+=charOrg;
        }
        else{
            
            // start of difference
            // go through org until fourth instance of "
            if(charOrg=="\""){
                count++;
            }
            result+=charOrg;
        }
    }
        // go through steps and close brackets
            for (var m = steps.length; m-- > 0; ){
                result+=steps[m];

            }
    fs.writeFileSync('newJson.json', result, 'utf8');
    fs.writeFileSync('new.json', JSON.stringify(oldVal), 'utf8');
    console.log(result);
    console.log("##########");
    console.log(jsonData);
    process.exit(0);
}
run(jsonData, newJson, originalData);