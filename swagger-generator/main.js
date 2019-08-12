//A CLI to string build a swagger file
const chalk = require("chalk");
const figlet = require("figlet");
const inquirer = require("inquirer");
const fs = require('fs');
const yaml = require('js-yaml');

const init = () => {
  console.log(
    chalk.green(
      figlet.textSync("Swagger Generator", {
        font: "3-D",
        horizontalLayout: "default",
        verticalLayout: "default"
      })
    )
  );
}
// pick a question
const askNameQuestions = () => {
  const questions = [
    {
      type: "list",
      name: "aws",
      message: "Swagger Type?",
      choices: ['AWS', 'YAML', 'JSON (not active)']

    },
    {
      type: "input",
      name: "sort",
      message: "Filename?",
    },
    {
      type: "input",
      name: "endpoints",
      message: "Number of End Points?",
    }    
  ];
  return inquirer.prompt(questions);
};
const askLambdaQuestions = () => {
  const questions = [
    {
      type: "input",
      name: "lambda",
      message: "Lambda path?",
    }
  ];
  return inquirer.prompt(questions);
};
const askEndpointQuestions = () => {
  const questions = [
    {
      type: "input",
      name: "EndpointName",
      message: "EndPoint Path?",
    },
        {
      type: "list",
      name: "EndpointType",
      message: "EndPoint Method?",
      choices: ['GET', 'PUT', 'POST', 'UPDATE', 'DELETE']
    }
  ];
  return inquirer.prompt(questions);
};
var run = async function(){
  await init();
  const {aws, sort, endpoints} = await askNameQuestions();
  // ask if AWS or normal
  var result;
  var aws_lambda;
  // header
  // add name

if(aws=="AWS"){
result = `---\nswagger: \"2.0\"\ninfo:\n  version: \"1.0\"\nbasePath: \"/${sort}\"\nschemes:\n
- "https"\npaths:\n`;}
 else if(aws=="YAML"){
result = "swagger: \"2.0\"\ninfo:\n  version: \"1.0.0\"";
 }
 else{
   // json
 }
 

// Number of End points
 // loop through end points

for(let i =0; i<endpoints; i++){
let {EndpointName, EndpointType}  = await askEndpointQuestions();
let path = await EndpointName.split("/");
for (let i = path.length - 1; i >= 0; i--) {
    if (path[i].length != 0) {
        // take last value
        path = path[i];
        break;
    }
}
if(aws=="AWS"){
let {lambda}  = await askLambdaQuestions();
aws_lambda = lambda;
result += ` ${EndpointName}:\n   ${EndpointType}:\n      consumes:\n     - "application/json"\n      produces:\n      - "application/json"\n      parameters:\n  - name: "HeaderRequest"\n        in: "header"\n        description: "pass the json string using definition (#/definitions/APIHeaderRequest)"\n  type: "string"\n        required: true\n        responses:\n        200:\n          description: "200 response"\n          schema:\n            $ref: "#/definitions/SuccessResponse"\n          headers:\n            Access-Control-Allow-Origin:\n              type: "string"\n            x-request-id:\n              type: "string"\n            x-client-id:\n              type: "string"\n            x-refresh-token:\n              type: "string"\n            x-access-token:\n              type: "string"\n        400:\n          description: "400 response"\n          schema:\n            $ref: "#/definitions/response"\n          headers:\n            x-request-id:\n              type: "string"\n        500:\n          description: "500 response"\n          schema:\n            $ref: "#/definitions/response"\n          headers:\n            x-request-id:\n              type: "string"\n        503:\n          description: "503 response"\n          schema:\n            $ref: "#/definitions/response"\n          headers:\n            x-request-id:\n              type: "string"\n        404:\n          description: "404 response"\n          schema:\n            $ref: "#/definitions/response"\n          headers:\n            x-request-id:\n              type: "string"\n        504:\n          description: "504 response"\n          schema:\n            $ref: "#/definitions/response"\n          headers:\n            x-request-id:\n              type: "string"\n      security:\n                - api_key: []\n      x-amazon-apigateway-request-validator: "Validate body, query string parameters,\\ and headers"\n      x-amazon-apigateway-integration:\n        uri: "arn:aws:apigateway:us-east-1:lambda:path/2015-03-31/functions/${lambda}/invocations"\n        #uri: Fn::Sub: arn:aws:apigateway:`+"${AWS::Region}"+`:lambda:path/2015-03-31/functions/`+"${handleTransaction.Arn}"+`/invocations\n        responses:\n          default:\n            statusCode: "200"\n        passthroughBehavior: "when_no_match"\n        httpMethod: "POST"\n        contentHandling: "CONVERT_TO_TEXT"\n        type: "aws_proxy"\n        securityDefinitions:\n            api_key:\n              type: "apiKey"\n              name: "x-api-key"\n              in: "header"\n`;}
else if(aws=="YAML"){
    result+=  ` ${EndpointName}:\n    ${EndpointType}:\n      description: ""\n      operationId: "${path}"\n      consumes:\n      - "application/json"\n      produces:\n      - "application/json"\n      parameters:\n      - in: "header"\n        name: "request-id"\n        required: true\n        type: "string"\n      - in: "header"\n        name: "x-api-key"\n        required: true\n        type: "string"\n      - in: "path"\n        name: "paginationInfo"\n        schema:\n          $ref: "#/definitions/paginationInfo"\n        required: false\n      responses:\n        200:\n          description: "200 response"\n          schema:\n            $ref: "#/definitions/SuccessResponse"\n          headers:\n            Access-Control-Allow-Origin:\n              type: "string"\n            x-request-id:\n              type: "string"\n            x-client-id:\n              type: "string"\n            x-refresh-token:\n              type: "string"\n            x-access-token:\n              type: "string"\n        400:\n          description: "400 response"\n          schema:\n            $ref: "#/definitions/response"\n          headers:\n            x-request-id:\n              type: "string"\n        500:\n          description: "500 response"\n          schema:\n            $ref: "#/definitions/response"\n          headers:\n            x-request-id:\n              type: "string"\n        503:\n          description: "503 response"\n          schema:\n            $ref: "#/definitions/response"\n          headers:\n            x-request-id:\n              type: "string"\n        404:\n          description: "404 response"\n          schema:\n            $ref: "#/definitions/response"\n          headers:\n            x-request-id:\n              type: "string"\n        504:\n          description: "504 response"\n          schema:\n            $ref: "#/definitions/response"\n          headers:\n            x-request-id:\n              type: "string"\n      security:\n      - api_key: []\n`;
  }
else{

}
}

// add footer
if(aws=="AWS"){
  // change last line to lambda
  let doc = await yaml.safeLoad(fs.readFileSync('./aws_ending.yaml', 'utf8'));
  result += await yaml.safeDump(doc).replace("CHANGEME", aws_lambda);
}
else if(aws=="YAML"){
  let doc = await yaml.safeLoad(fs.readFileSync('./ending.yaml', 'utf8'));
  result += await yaml.safeDump(doc);
}
else{
  // change this
  let doc = await yaml.safeLoad(fs.readFileSync('./ending.yaml', 'utf8'));
  result += await yaml.safeDump(doc);
}
console.log(result);
}

run();
