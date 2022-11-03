// evaluate expression tree

const input = {
  '$or': [
    { '$and': [false, true, true] },
    { '$or': [true, false, false, { '$and': [true, true] }] },
    true,
  ],
};

function evaluate(expr) {
  //   if (!(typeof expr == "object" && !Array.isArray(expr))) {
  //     throw "invalid expression";
  //   }
  const key = Object.keys(expr)[0]
  switch (key) {
    case '$or':
      return expr[key].some((c) => (typeof c === "object" ? evaluate(c) : c));
    case '$and':
      return expr[key].every((c) => (typeof c === "object" ? evaluate(c) : c));
    default:
        throw "invalid expression"
  }
}

console.log(evaluate(input));
