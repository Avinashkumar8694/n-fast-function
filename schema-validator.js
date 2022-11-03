const Ajv = require("ajv")

const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

const schema = {
  type: "object",
  properties: {
    foo: {type: "integer"},
    bar: {type: "string"}
  },
  required: ["foo"],
  additionalProperties: false,
}

const data = {
  foo: "sdsd"
}

const validate = ajv.compile(schema)
const valid = validate(data)
console.log(valid)
if (!valid) console.log(validate.errors)