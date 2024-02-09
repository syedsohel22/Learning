let APIKEY = "52AxCR61vpF9FqZmJFP42Ndt527RB3qR";
const details = async () => {
  try {
    let id = JSON.parse(localStorage.getItem("details"));
    let res = await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${APIKEY}
          `);

    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("error", error);
  }
};
