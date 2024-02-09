const getUsersData = async () => {
  try {
    let res = await fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-users`
    );
    res = await res.json();

    return res;
  } catch (err) {
    console.log(err);
  }
};

let newfunc = async () => {
  let a = await getUsersData();
  splitData(a.data, a.totalPages);
};
newfunc();
function splitData(...y) {
  const [data1, data2, ...data3] = y[0];
  const totalPages = y[1];
  console.log(data1, totalPages);
  return {
    totalPages,
    data1,
    data2,
    data3,
  };
}

// donot change the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getUsersData,
    splitData,
  };
}
