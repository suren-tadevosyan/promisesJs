function toUpperCase(input) {
  return new Promise((resolve, reject) => {
    input
      .then((result) => {
        setTimeout(() => {
          if (typeof result === "string") {
            const upperCaseString =
              result.charAt(0).toUpperCase() + result.slice(1);
            resolve(upperCaseString);
          } else {
            reject(result);
          }
        }, 500);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

const stirng = new Promise((resolve) => {
  resolve("javascript");
});

const number = new Promise((resolve) => {
  resolve({});
});

toUpperCase(stirng)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
toUpperCase(number)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
