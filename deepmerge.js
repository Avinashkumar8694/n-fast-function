const deepMerge = require('lodash-deepmerge');
a = {
    b:1
}

b = {
    b:2
}



  
  console.log(deepMerge.merge(a,b))