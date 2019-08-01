const Promise = require("promise");
const Ajv = require("ajv");
const RefParser = require("json-schema-ref-parser");

// read json
// check string, int, and such from json example
// check if values should exist
// return true or false

let inputValidator = async function(message, schema) {
	return new Promise(async function(resolve, reject) {
  RefParser.dereference(schema)
			.then(parsedSchema => {
				let ajv = new Ajv({ allErrors: true });

				let valid = ajv.validate(parsedSchema, message);

				if (!valid) {
          console.log(ajv.errors);
					reject(JSON.stringify(ajv.errors));
				}
				else {
        console.log(ajv);
					resolve();
				}
			})
			.catch(async function(err) {
      console.err(err);
			});
  });
};
module.exports = inputValidator;
