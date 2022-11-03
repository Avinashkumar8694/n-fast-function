var jsonata = require("jsonata");

var data = {
  "case.caseid": {
    example: [{ value: 4 }, { value: 7 }, { value: 13 }],
  },
};
var expression = jsonata("case.caseid.example");
var result = expression.evaluate(data); // returns 24\
console.log(result);

console.log(JSON.parse(JSON.stringify(data)))
