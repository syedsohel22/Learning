import { computeHeadingLevel } from '@testing-library/react';
import { useEffect, useState } from 'react';
import './App.css';
import Post from './components/Post';

const initState = {
  id: '',
  title: '',
  body: '',
  verifyPost: false,
};
function App() {
  const [time, setTime] = useState(0);
  const [input, setInput] = useState(initState);
  const [todo, setTodo] = useState([]);
  console.log('input-title', input);
  console.log('TODO', todo);
  //console.log('input-body', input.body);

  useEffect(() => {
    let id = setInterval(() => {
      setTime((p) => p + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((p) => {
      return { ...p, [name]: value };
    });
    //  console.log();
  };

  const handleAdd = () => {
    setTodo((p) => [...p, input]);
  };
  return (
    <div className="App" data-testid="app">
      <div data-testid="timer">
        Timer:{time}
        {/* Add timer here, refer to image in prolblem statement*/}
      </div>
      <div>
        {/* Below is the input tag for title */}
        <input
          placeholder="Enter post title"
          data-testid="title-input"
          name="title"
          value={input.title}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        {/* Below is the textarea tag for body */}
        <textarea
          placeholder="Enter post body"
          data-testid="post-input"
          name="body"
          value={input.body}
          onChange={(e) => {
            handleChange(e);
          }}
        ></textarea>
        <br />
        <button data-testid="add-post-button" onClick={handleAdd}>
          Add Post
        </button>
      </div>

      <hr />
      <h1>Posts</h1>
      <div data-testid="posts-container">
        {/* map your posts with the Post Component and pass the required props */}
        {todo.length > 0 &&
          todo.map((el) => {
            return <Post {...el} key={el.title} />;
          })}
      </div>
    </div>
  );
}

export default App;
