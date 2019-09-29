var axios = require('axios');
const inquirer = require("inquirer");
const fs = r
const types = ["put", "post", "get", "delete", "patch", "head", "update"]
const askQuestions = () => {
  const questions = [
    {
      type: "input",
      name: "url",
      message: "API URL?"
    },
    {
      type: "input",
      name: "type",
      message: "Request Type?"
    },
    {
      type: "input",
      name: "payload",
      message: "Add payload? (Add location of json file)"
    },
    {
      type: "input",
      name: "times",
      message: "How many calls?"
    },
  ];
  return inquirer.prompt(questions);
};

async function performance(url, type, payload,times){
  try{
// send requests 
var response;
for( var i =0; i<times; i++){
  if(type == "get")
   response = axios.get(url);
  if(type == "post")
   response = axios.post(url,payload);
  if(type == "delete")
   response = axios.delete(url,payload);
  if(type == "update")
   response = axios.update(url,payload);
  if(type == "put")
   response = axios.put(url,payload);
  if(type == "head")
   response = axios.head(url, payload);
  if(type == "patch")
   response = axios.patch(url, payload);
  console.log(response);
  // save to file
  fs.appendFile('message.txt', response, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}
  }
  catch(err){
    console.err("Error: "+err);
  }
}
async function run(){
  const sort = await askQuestions();
  const {url, type, payload, times} = sort;
  // validate
  times = praseInt(times)
  if( times > 1000){ console.log("Excessive Calls"); process.exit();}
  if( types.indexOf(type) < 0){console.log("Cannot handle this type of request"); process.exit();}
  if( type!="get" && payload.length() == 0){console.log("Payload required for this request"); process.exit();}
  if( url.length() == 0){console.log("No URL"); process.exit();}

  // read payload
  if(type != "get"){
  var content;
  fs.readFile(payload, function read(err, data) {
      if (err) {
          throw err;
      }
      content = data;
  });
}
  performance(url, type, content, times);
}

run();