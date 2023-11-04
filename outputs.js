// Promise.resolve()
//   .then(() => console.log(1))
//   .catch(() => console.log(3))
//   .then(() => {
//     console.log(2);
//     throw new Error();
//   })
//   .then(() => console.log(4))
//   .then(() => console.log(4));

// output will be: 1 2 Error
// 1.resolves and log 1
// 2.then catch is skipped cause no rejection
// 3.then logs 2
// 4.rejects with an Error
// 5.rest lines were skipped bacuse there was rejection above

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Promise.resolve()
//   .then(() => console.log(11))
//   .then(() => {
//     console.log(12);
//     throw new Error();
//   })
//   .catch(() => console.log(13))
//   .catch(() => console.log(14))
//   .then(() => console.log(15));

// output: 11 12 13 15
// 1.resolves and logs 11
// 2.log 12
// 3.rejects
// 4.catchs Error and logs 13
// 5.second catch was skipped casuse Error already caught
// 6.logs 15

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Promise.resolve()
//   .then((data) => {
//     throw new Error("Api Error");
//     return 1;
//   })
//   .then((data) => console.log("ok"))
//   .catch((error) => {
//     console.log(error.message);
//     return "2";
//   })
//   .then((data) => {
//     console.log(data);
//   });

// output: "Api Error"  2
// 1.rejects with an Error:("Api Error")
// 2.second then skipped beacouse of error above
// 3.cathcs error and logs Error message  "Api Error" then returns 2
// 4.logs 2
// 5.last then receives value returned by the catch and logs 2


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 20);
// Promise.resolve()
//   .then(() => {
//     console.log(3);
//     return 1;
//   })
//   .catch((e) => console.log(e, 4))
//   .finally((res) => console.log(res, 5))
//   .then((res) => console.log(res));
// console.log(6);

// output: 1 6 3 undefined,5  1  2
// 1.synchronously logs 1
// 2.then synchronously logs last line 6
// 3.taking setTimeout to the macroTask queue and make it execute after 20 milliseconds delay
// 5.takse the Promise to the microTask queue
// 6.event loop cheks if the stack is empty starts to push there tasks from microTask queue whis is Promise
// 7.resolves and logs 3
// 8.catch skipped cause there is no rejection above
// 9.finally logs undefined,5 casue its executed wheter Promise is resolved or rejected but it doesnt have acces to the Promise value so its "res" is undefined
//10.last then logs 1 cause it returned from the then above
//11.after stack is emptied event loops check if there is no any microTasks starts push macroTasks to the stack and then log in setTimeout works and logs 2

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



let a = 5;
setTimeout(() => {
  console.log(a);
  a = 10;
}, 0);
let p = new Promise((resolve, reject) => {
  console.log(a);
  a = 25;
  resolve();
});
p.then((res) => {
  console.log("final result ", res);
});
console.log(a);


////////////////////// ?

