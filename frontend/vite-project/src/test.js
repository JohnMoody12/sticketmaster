// async function* fetchDataAsyncIterator(url) {
//   let page = 1;
//   while (true) {
//     const response = await fetch(`${url}/${page}`);
//     const data = await response.json();
//     if (data.length === 0) break;
//     yield data;
//     page++;
//   }
// }

// const asyncIterator = fetchDataAsyncIterator(
//   "https://jsonplaceholder.typicode.com/todos"
// );
// for await (const chunk of asyncIterator) {
//   console.log(chunk);
// }

// let bob = new Promise((resolve, reject) => {

// });

// async function bobrun() {
//   bob
//     .then((data) => {
//       console.log(data.message);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// bobrun();

// let joe = { message: "anotha" };

// console.log(joe["message"]);

// async function* getDataGenerator() {
//   let todo = 1;
//   while (true) {
//     try {
//       let res = await fetch(
//         `https://jsonplaceholder.typicode.com/todos/${todo}`
//       );
//       let data = await res.json();
//       yield data;
//     } catch (err) {
//       console.log(err);
//     }
//     todo++;
//   }
// }

// let dataIterator = getDataGenerator();

// for await (let t of dataIterator) {
//   console.log(t);
// }
function camelCaseKeys() {
  let test1 = "Foo_Bar";
  let test2 = "foo_bar";
  let split = false;
  let word1 = "";
  let word2 = "";
  for (let ch of test1) {
    if (ch === "_") {
      split = true;
      continue;
    }
    if (!split) {
      word1 += ch;
    } else {
      word2 += ch;
    }
  }
  let word3 =
    word1.toLowerCase() + word2[0].toUpperCase() + word2.slice(1).toLowerCase();

  console.log(word3);
}

camelCaseKeys();
