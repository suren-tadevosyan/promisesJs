function squarePromise(input) {
  return new Promise((resolve, reject) => {
    input
      .then((result) => {
        if (typeof +result === "number" && !isNaN(result)) {
          const square = result * result;
          resolve(square);
        } else {
          reject(new Error(`Cannot convert "${result}" to a number!`));
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

const number = new Promise((resolve) => {
  resolve("5");
});

const string = new Promise((resolve) => {
  resolve("Hello");
});

squarePromise(number)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err.message);
  });
squarePromise(string)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err.message);
  });
