// var cron = require("node-cron");

// cron.schedule("* * * * *", () => {
//   console.log("testing the ole cron boy 2");
// });

let bob = {};

// Initialize _name
let _name = "";

Object.defineProperty(bob, "_name", {
  configurable: false,
  enumerable: false,
  writable: false,
  value: undefined, // Initially undefined, set via setter
});

bob.setName = function (newName) {
  _name = newName;
};

bob.getName = function () {
  return _name;
};

// Example usage
bob.setName("Bob");
console.log(bob.getName()); // Output: Bob

// Trying to access the property directly will not work in most of the cases
console.log(bob._name); // Output: undefined, but still in the object

// Enumeration won't show the property
console.log(Object.keys(bob)); // Output: ["setName", "getName"]

// Won't let me overwrite the property.
bob._name = "not bob"; // It does not error but nothing actually happens
console.log(bob.getName()); // Output: Bob
console.log(bob.setName("Joe")); // Output: Bob
console.log(bob.getName());

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
