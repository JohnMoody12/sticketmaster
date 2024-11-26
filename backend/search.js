// let arr = [7, 2, 4, 5];

// Array.prototype.myReduce = function (callbackFn, initialValue) {
//   const noInit = initialValue === undefined;
//   const l = this.length;

//   if (noInit && l === 0) {
//     throw new TypeError("Reduce empty w/no initial value");
//   }

//   let acc = noInit ? this[0] : initialValue;
//   let initIndex = noInit ? 1 : 0;

//   for (let k = initIndex; k < l; k++) {
//     if (Object.hasOwn(this, k)) {
//       acc = callbackFn(acc, this[k], k, this);
//     }
//   }
//   return acc;
// };

// console.log(arr.myReduce((acc) => acc + 1, 0));
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
