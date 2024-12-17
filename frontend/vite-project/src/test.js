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

async function* getDataGenerator() {
  let todo = 1;
  while (true) {
    try {
      let res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todo}`
      );
      let data = await res.json();
      yield data;
    } catch (err) {
      console.log(err);
    }
    todo++;
  }
}

let dataIterator = getDataGenerator();

for await (let t of dataIterator) {
  console.log(t);
}
