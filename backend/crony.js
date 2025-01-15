// var cron = require("node-cron");

// cron.schedule("* * * * *", () => {
//   console.log("testing the ole cron boy 2");
// });

let bob = {
  c: "c",
  setName2(anotha) {
    this.c = anotha;
  },
};

Object.defineProperty(bob, "c", { writable: false, enumerable: false });
console.log(Object.keys(bob));

bob.setName1 = function (anotha) {
  this.c = anotha;
};

bob.getName = function () {
  return this.c;
};

console.log(bob.getName());
bob.setName1("dd");
console.log(bob.getName());

bob.setName2("e");
console.log(bob.getName());

//let _name = "";

// Object.defineProperty(bob, "_name", {
//   configurable: false,
//   enumerable: false,
//   writable: false,
//   value: undefined, // Initially undefined, set via setter
// });

// Example usage
// bob.setName("Bob");
// console.log(bob.getName()); // Output: Bob

// Trying to access the property directly will not work in most of the cases
console.log(bob._name); // Output: undefined, but still in the object

// Enumeration won't show the property
console.log(Object.keys(bob)); // Output: ["setName", "getName"]

// Won't let me overwrite the property.
bob._name = "not bob"; // It does not error but nothing actually happens

// // But the property is still accessible via some ways
// console.log(Object.getOwnPropertyDescriptor(bob, "_name"))
// // Output:
// // {
// //   value: undefined,
// //   writable: false,
// //   enumerable: false,
// //   configurable: false
// // }

// // It can still be "forced" out. (Don't do this)
// let _name_hacky = Object.getOwnPropertyDescriptor(bob, "_name");
// _name_hacky.writable = true;
// _name_hacky.value = "I am bob again";
// Object.defineProperty(bob, "_name", _name_hacky);
// console.log(bob.getName()); // Output: Bob, setName still modifies the original
// console.log(bob._name); // Output: I am bob again
