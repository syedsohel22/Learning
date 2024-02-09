// giphy API Key =>   52AxCR61vpF9FqZmJFP42Ndt527RB3qR
let APIKEY = "52AxCR61vpF9FqZmJFP42Ndt527RB3qR";
const main = async () => {
  try {
    let response = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=25&rating=g`
    );

    let data = await response.json();
    console.log(data.data);
    append(data.data);
  } catch (e) {
    console.log("error", e);
  }
};
main();

const append = async (data) => {
  data.forEach((e) => {
    let gif = document.getElementById("gif");
    let img = document.createElement("img");
    img.src = e.images.downsized.url;
    img.addEventListener("click", () => {
      detail_gif(e.id);
    });
    gif.append(img);
  });

  const detail_gif = (id) => {
    localStorage.setItem("details", JSON.stringify(id));
  };
};
