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

// const john = {
//   age: 42,
//   getAge: function () {
//     return this.age;
//   },
// };

// console.log(john.getAge()); // 42

// const unboundGetAge = john.getAge;
// console.log(unboundGetAge()); // undefined

// const boundGetAge = john.getAge.bind(john);
// console.log(boundGetAge()); // 42

// const mary = { age: 21 };
// const boundGetAgeMary = john.getAge.bind(mary);
// console.log(boundGetAgeMary()); // 21

// async function bob() {
//   console.log("1");
//   await Promise.resolve();
//   console.log("2");
// }

// console.log("A");
// bob();
// console.log("B");

// function foo() {}

// // foo as a function object:
// console.log(foo.__proto__ === Function.prototype); // true

// // foo's .prototype property:
// console.log(foo.prototype.__proto__ === Object.prototype); // true

// // To really show the difference:
// console.log(foo.__proto__ === foo.prototype); // false

// console.log(Object.getPrototypeOf(foo.__proto__));
// console.log(Object.getPrototypeOf(foo.prototype));

// function Person(name, age) {
//   this.name = name;
//   this.age = age;

//   this.sayHello = function () {
//     console.log(`Hi I'm ${this.name} and I'm ${this.age}`);
//   };

//   this.sayGoodBye = function () {
//     console.log("baiiii");
//   };
// }

// Person.prototype.sayGoodBye = function () {
//   console.log("Buh Bye!");
// };

// let joe = new Person("Joe", 20);
// joe.sayHello();
// joe.sayGoodBye();

// const createCounter = () => {
//   let count = 0;
//   return () => {
//     count += 1;
//     return count;
//   };
// };

// const counter = createCounter();
// console.log(counter()); // Outputs: 1
// console.log(counter()); // Outputs: 2

class Example {
  constructor(name) {
    this.name = name;
  }

  // Normal function: `this` refers to the class instance when called as obj.method()
  normalFunction() {
    console.log("normalFunction this.name:", this.name); // "Alice" if called on obj = new Example("Alice")

    // Inner function as a normal function:
    function innerNormalFunction() {
      //console.log("inner normal ", this.name);
    }
    innerNormalFunction();

    // To preserve `this` inside a normal function:
    const that = this;
    function innerNormalWithThat() {
      console.log("innerNormalWithThat that.name:", that.name); // Correctly logs "Alice"
    }
    innerNormalWithThat();

    // Arrow function inside normal function:
    const innerArrowFunction = () => {
      // The `this` here is inherited from normalFunction's `this`, which is the instance.
      console.log("innerArrowFunction this.name:", this.name); // "Alice"
    };
    innerArrowFunction();
  }

  // Arrow function at the class level:
  arrowFunction = () => {
    // `this` here also refers to the instance due to lexical scoping.
    console.log("arrowFunction this.name:", this.name); // "Alice"
  };
}

// Usage:
const obj = new Example("Alice");
obj.normalFunction();
obj.arrowFunction();

function Timer() {
  this.seconds = 0;
  let that = this;
  setInterval(function () {
    that.seconds++;
    console.log(that.seconds);
  }, 1000);
}

const timer = new Timer();
