import { useState } from "react";
import "./App.css";
import Post from "./Components/Post";

const getData = () => {
  return fetch(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
    console.log(res);
    return res.json();
  });
};
function App() {
  const [posts, setPosts] = useState([]);

  const fetchAnsUpdate = async () => {
    try {
      const data = await getData();
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App" data-testid="app">
      <button id="get-posts-btn" onClick={fetchAnsUpdate}>
        GET POSTS
      </button>
      <div id="post-container">
        {/*  map through the posts data and pass props to the Posts component */}
        {posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
}

export default App;
