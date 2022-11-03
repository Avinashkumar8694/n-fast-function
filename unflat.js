// const unflatten = require('unflatten')
// const res = unflatten({
//     'name': 'd'
//   })
// const res2 = unflatten({
//     "case.caseid": {
//       example: [{ value: 4 }, { value: 7 }, { value: 13 }],
//     },
//     "case.employee[0].name": "sdsdsdsdsd"
//   })
// console.log("unflat test: ",JSON.stringify(res))



// console.log("unflat test2: ",JSON.stringify(res2))




const unflatten = (data) => {
  if (Object(data) !== data || Array.isArray(data))
    return data;
  const regex = /\.?([^.\[\]]+)$|\[(\d+)\]$/
  const props = Object.keys(data);
  let result, p;
  while (p = props.shift()) {
    const m = regex.exec(p)
    let target;
    if (m.index) {
      const rest = p.slice(0, m.index);
      if (!(rest in data)) {
        data[rest] = m[2] ? [] : {};
        props.push(rest);
      }
      target = data[rest];
    } else {
      if (!result) {
        result = (m[2] ? [] : {});
      }
      target = result
    }
    target[m[2] || m[1]] = data[p];
  }
  return result;
};

test = {
  "case.caseDetails.primaryLife.PersonalDetails.fullName": "Krishnakumar Iyer",
  "case.caseDetails.primaryLife.PersonalDetails.sex": "M",
  "case.caseDetails.primaryLife.PersonalDetails.idNumber": "Z4308909",
  "case.caseDetails.owner.PersonalDetails.idIssueDate": "2022-08-11",
  "case.caseDetails.owner.PersonalDetails.idIssuePlace": "Bengaluru",
  "case.caseDetails.primaryLife.PersonalDetails.dob": "1979-03-10",
  "case.caseDetails.primaryLife.PersonalDetails.age": "49",
  "case.caseDetails.primaryLife.PersonalDetails.palceOfBirth": "India",
  "case.caseDetails.primaryLife.PersonalDetails.nationality": "Singaporean",
  "case.caseDetails.primaryLife.PersonalDetails.occupation": "CTO",
  "case.caseDetails.primaryLife.PersonalDetails.income": "50000",
  "case.caseDetails.primaryLife.PersonalDetails.relationship": "self",
  "case.caseDetails.owner.residentialAddress.address": "Bellary Road, Gandhi Nagar, Yelahanka",
  "case.caseDetails.owner.residentialAddress.ward": "India 560064 ",
  "case.caseDetails.owner.residentialAddress.district": "Karnataka",
  "case.caseDetails.owner.residentialAddress.city": "Bangalore",
  "case.caseDetails.owner.residentialAddress.email": "hari.prasad@neutrinos.co",
  "case.caseDetails.owner.residentialAddress.telephone": "919740388668",
  "case.caseDetails.owner.residentialAddress.mobile": "919740388668",
  "case.caseDetails.primaryLife.PersonalDetails.height": "1.60",
  "case.caseDetails.primaryLife.PersonalDetails.weight": "831",
  "case.caseDetails.primaryLife.PersonalDetails.bmi": "32.4"
}

console.log(JSON.stringify(unflatten(test)))