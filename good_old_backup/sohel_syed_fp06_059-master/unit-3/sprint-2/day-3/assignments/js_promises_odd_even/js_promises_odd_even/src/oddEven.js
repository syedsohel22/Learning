function getData(data) {
  let data1 = new Promise(function (resolve, reject) {
    if (data % 2 === 0) {
      setTimeout(function () {
        resolve("even");
      }, 4000);
    } else if (data % 2 !== 0) {
      setTimeout(function () {
        resolve("odd");
      }, 3000);
    } else if (typeof data == String) {
      resolve("error");
    } else {
      reject("error");
    }
  });
  return data1;
}

export default getData;
