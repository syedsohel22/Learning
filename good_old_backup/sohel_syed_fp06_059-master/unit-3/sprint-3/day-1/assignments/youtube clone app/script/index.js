const API_KEY = `AIzaSyBSKHQ61rnPS1Fpg9oV2no7yqRMxgGKNZY`;

const container_div = document.getElementById("container");

const searchVideos = async () => {
  try {
    const query = document.getElementById("query").value;

    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${API_KEY}`
    );
    //https://youtube.googleapis.com/youtube/v3/search?maxResults=25&q=${query}&key=${API_KEY}

    //https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${API_KEY}

    // popular in india
    // GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=in&key=[YOUR_API_KEY] HTTP/1.1

    // Authorization: Bearer[YOUR_ACCESS_TOKEN];
    // Accept: application / json;

    const data = await res.json();

    const actual_data = data.items;

    appendVideos(actual_data);

    // console.log(data);
  } catch (error) {
    console.log("error:", error);
  }
};

const appendVideos = (data) => {
  container_div.innerHTML = null;

  data.forEach(({ snippet, id }) => {
    const title = snippet.title;
    // console.log(title);
    const videoId = id.videoId;
    const thumbnail = snippet.thumbnails.high.url;

    const channel_name = snippet.channelTitle;

    const div = document.createElement("div");

    const img = document.createElement("img");

    img.src = thumbnail;

    const title_html = document.createElement("h4");

    title_html.innerText = title;

    const channel_html = document.createElement("h5");
    channel_html.innerText = channel_name;

    let data = {
      videoId,
      snippet,
    };

    div.onclick = () => {
      storeClickedvideo(data);

      // console.log(title);
    };

    div.append(img, title_html, channel_html);

    container_div.append(div);
  });
};

function storeClickedvideo(data) {
  localStorage.setItem("clicked_item", JSON.stringify(data));
  window.location.href = "video.html";
}

// show popular videos

const showVideos = async () => {
  try {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=in&key=${API_KEY}`
    );
    //  const res = await fetch(
    //   `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=in&key=${API_KEY}`
    //   );
    //https://youtube.googleapis.com/youtube/v3/videos?maxResults=20&myRating=like&regionCode=in&videoCategoryId=music&key=

    //https://youtube.googleapis.com/youtube/v3/search?maxResults=25&q=${query}&key=${API_KEY}

    //https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${API_KEY}

    // popular in india
    // GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=in&key=[YOUR_API_KEY] HTTP/1.1

    // Authorization: Bearer[YOUR_ACCESS_TOKEN];
    // Accept: application / json;

    const reponse = await res.json();
    appendVideos1(reponse.items);
    // console.log("response:", reponse);
  } catch (error) {
    console.log("error:", error);
  }
};

showVideos();

const appendVideos1 = (reponse) => {
  container_div.innerHTML = null;

  reponse.forEach(({ snippet, id }) => {
    const title = snippet.title;

    const videoId = id;
    const thumbnail = snippet.thumbnails.high.url;

    const channel_name = snippet.channelTitle;

    const filter = document.createElement("button");
    filter.innerText = "Filter";
    const div = document.createElement("div");

    const img = document.createElement("img");

    img.src = thumbnail;

    const title_html = document.createElement("h4");

    title_html.innerText = title;

    const channel_html = document.createElement("h5");
    channel_html.innerText = channel_name;

    let data = {
      videoId,
      snippet,
    };
    // console.log(data);
    div.onclick = () => {
      storeClickedvideo(data);

      //  console.log(title);
    };

    div.append(img, title_html, channel_html);

    container_div.append(div);
  });
};

/* 
filter popular Video
GET https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&myRating=like&regionCode=in&videoCategoryId=17&key=[YOUR_API_KEY] HTTP/1.1

Accept: application/json
*/

const popularVideos = async () => {
  try {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&maxResults=20&regionCode=in&key=${API_KEY}`
    );

    const reponse = await res.json();
    //appendVideos1(reponse.items);
    console.log("popularVideos response:", reponse);
  } catch (error) {
    console.log("error:", error);
  }
};
/*

filter by Video title 
GET https://youtube.googleapis.com/youtube/v3/search?maxResults=20&order=title&key=[YOUR_API_KEY] HTTP/1.1

Authorization: Bearer [YOUR_ACCESS_TOKEN]
Accept: application/json


*/

/*
filter by  Video view count
GET https://youtube.googleapis.com/youtube/v3/search?maxResults=20&order=viewCount&key=[YOUR_API_KEY] HTTP/1.1

Authorization: Bearer [YOUR_ACCESS_TOKEN]
Accept: application/json


*/
