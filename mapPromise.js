const myPromise = new Promise((resolve, reject) => {
  resolve("5");
});
const timesTwo = (val) => val * 2;

function mapPromise(promise, trnsFunc) {
  return promise
    .then((res) => {
      const transFormedVal = trnsFunc(res);
      return Promise.resolve(transFormedVal);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

mapPromise(myPromise, timesTwo).then((res) => {
  console.log(res);
});
