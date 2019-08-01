const fs = require('fs');

// accept file
// read through file until index
function fileIndex(filename, index){
    fs.readFile(filename, function(err,data){
        if(err){
            console.error(err);
        }
        else{
            console.log(data.toString().substring(index));
        }
    });
    
}

fileIndex("test.json",293);