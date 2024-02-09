import "./App.css";
import UserCard from "./Components/UserCard";

import useDarkMode from "./hooks/useDarkMode";
import Input from "./Components/Input";
function App() {
  //import the useDark mode hook here
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  return (
    // add the dark-mode class name along with App depending on the boolean value of isDarkMode
    <div
      data-testid="app-component"
      className={isDarkMode ? "dark-mode" : "App"}
    >
      {/* to toggle the darkMode value of the application */}
      {/* Default value: Dark.  */}
      <button data-testid="theme-button" onClick={toggleDarkMode}>
        {isDarkMode ? "Light" : "Dark"}
      </button>

      {/* use the UserCard component here */}
      {/* imageURL, avatarShape, name, description, backgroundColor and title */}
      <UserCard
        name={"avc"}
        imageURL={
          " https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=1400&q=60"
        }
        title={"Software Developer"}
      />
      <br />
      {/* use the Input component here */}
      {/* type, size, variant, value and onChange. */}
      <Input variant="outline" />
      <div data-testid="input-value">Input value is</div>
    </div>
  );
}

export default App;

/*
imageURL for testing;
1. https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=1400&q=60
2. https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60
*/
