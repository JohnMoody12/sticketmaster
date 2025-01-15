// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   yell(mssg) {
//     console.log(`${this.name} yells ${mssg}`);
//   }

//   static dance() {
//     console.log("and they danced");
//   }
// }

// let aPerson = new Person("bob");

// aPerson.yell("ohaiii");

// class Bob extends Person {
//   constructor() {
//     let name = "Bob";
//     super(name);
//   }

//   bob() {
//     console.log(
//       "Bob only says Bob. unless Bob is a person; then Bob can yell."
//     );
//   }
// }
// let bPerson = new Bob();

// bPerson.bob();
// bPerson.yell("ohaaayyy");

const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object("test");
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1);
console.log(instance1 === instance2); // true

let obj = { a: "a", b: 2 };

for (let item of Object.entries(obj)) {
  console.log(item);
}

for (let item2 in obj) {
  console.log(obj[item2]);
}
