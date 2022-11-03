const { flatten } =  require('flatten-anything');
const unflatten = require('unflatten')
const defaults = require('json-schema-defaults');
const { jsonSchema } = require('./json-schema');

/* Converting the flat json to a nested json. */
const res = unflatten({
    'name': 'd'
  })
const res2 = unflatten({
    "case.caseid": {
      example: [{ value: 4 }, { value: 7 }, { value: 13 }],
    },
  })
console.log("unflat test: ",JSON.stringify(res))



console.log("unflat test2: ",JSON.stringify(res2))



/* Converting the json schema to a json object. */
const json = defaults(jsonSchema);
console.log("ulflat schema to json---------------------------------------------", json)


/* Converting the json object to a flat json. */
const target = flatten(json)
console.log("flatten schema to json--------------------------------", target)





