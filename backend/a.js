// const createCounter = () => {
//   let count = 0;
//   return function () {
//     count += 1;
//     return count;
//   };
// };

// const counter = createCounter();
// console.log(counter()); // Outputs: 1
// console.log(counter()); // Outputs: 2

/**
 * @param {Object} objectParam
 * @param {string|Array<string>} pathParam
 * @param {*} [defaultValue]
 * @return {*}
 */
function get(objectParam, pathParam, defaultValue) {
  let path = Array.isArray(pathParam) ? pathParam : pathParam.split(".");

  let i = 0;
  let l = path.length;
  let obj = objectParam;

  while (obj != null && i < l) {
    obj = obj[String(path[i])];
    console.log(obj);
    i++;
  }
  let v = undefined;
  if (i == l) {
    v = obj;
  }
  if (v === undefined) {
    return defaultValue;
  } else {
    return v;
  }
}
const john = {
  profile: {
    name: { firstName: "John", lastName: "Doe" },
    age: 20,
    gender: "Male",
  },
};

get(john, "profile.name.firstName");
