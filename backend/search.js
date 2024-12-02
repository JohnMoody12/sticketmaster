let arr = [7, 2, 4, 5];

// Array.prototype.myReduce = function (callbackFn, initialValue) {
//   const noInit = initialValue === undefined;
//   const l = this.length;

//   if (noInit && l === 0) {
//     throw new TypeError("Reduce empty w/no initial value");
//   }

//   let acc = noInit ? this[0] : initialValue;
//   let initIndex = noInit ? 1 : 0;

//   for (let k = initIndex; k < l; k++) {
//     //Use Object.hasOwn on an array to check for null or empty items
//     if (Object.hasOwn(this, k)) {
//       acc = callbackFn(acc, this[k], k, this);
//     }
//   }
//   return acc;
// };

//cbFn->acc, val, init, arr
// Array.prototype.myReduce2 = function (cbFn, initVal) {
//   const isItInitialized = !(initVal === undefined);
//   const initIndex = isItInitialized ? 0 : 1;
//   let acc = isItInitialized ? initVal : this[0];

//   for (let k = initIndex; k < this.length; k++) {
//     if (Object.hasOwn(this, k)) {
//       acc = cbFn(acc, this[k], k, this);
//     }
//   }

//   return acc;
// };

// console.log(arr.myReduce2((acc) => acc + 1, 0));
// console.log(arr.myReduce((acc) => acc + 1, 0));
/*
function debounce(func, wait = 0) {
  let timeoutId = null;
  let lastArgs = null;
  let lastContext = null;
  function debounced(...args) {
    lastContext = this;
    lastArgs = args;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      timeoutId = null;
      func.apply(lastContext, lastArgs);
      lastContext = null;
      lastArgs = null;
    }, wait);
  }

  debounced.cancel = function () {
    clearTimeout(timeoutId);
    timeoutId = null;
  };

  debounced.flush = function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
      func.apply(lastContext, lastArgs);
      lastContext = null;
      lastArgs = null;
    }
  };

  return debounced;
}
i = 0;
function inc() {
  i++;
  console.log(i);
}

const dI = debounce(inc, 2000);

dI();
dI.flush();
dI();
dI.flush();
dI();
dI.flush();
dI();
setTimeout(() => dI(), 2000);

class Person {
  constructor(name) {
    this.name = name;
  }

  showThis() {
    console.log(this);
  }
}

const person = new Person("John");
person.showThis(); // Person {name: 'John'}

const showThisStandalone = person.showThis;
showThisStandalone.apply(person); // `undefined` because all parts of a class' body are strict mode.
*/
// const person2 = {
//   name: "Joe",
//   showThis() {
//     console.log(this.name);
//   },
//   showThis2: () => {
//     console.log(this);
//   },
// };

// person2.showThis();
// person2.showThis2();

const john = {
  age: 42,
  getAge: function () {
    return this.age;
  },
};

console.log(john.getAge()); // 42

const unboundGetAge = john.getAge;
console.log(unboundGetAge()); // undefined

const boundGetAge = john.getAge.bind(john);
console.log(boundGetAge()); // 42

const mary = { age: 21 };
const boundGetAgeMary = john.getAge.bind(mary);
console.log(boundGetAgeMary()); // 21

async function bob() {
  console.log("1");
  await Promise.resolve();
  console.log("2");
}

console.log("A");
bob();
console.log("B");
