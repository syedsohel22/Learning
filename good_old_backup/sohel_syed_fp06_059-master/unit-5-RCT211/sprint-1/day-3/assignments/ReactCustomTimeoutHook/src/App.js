import "./App.css";
import useTimeout from "./hooks/useTimeout";
import useOnlineStatus from "./hooks/useOnlineStatus";

function App() {
  // bring useTimeout hook here
  // bring useOnlineStatus hook here
  const show = useTimeout(5000);
  const isUserOnline = useOnlineStatus();
  const c = show.ready;
  console.log("show in app", c);
  console.log("isuserOnline in app", isUserOnline);
  return (
    <div className="App">
      <h1>Custom Hooks</h1>

      {show ? (
        <h3>Timeout</h3>
      ) : (
        <div data-testid="timeout-div">After the timeout</div>
      )}

      {/* Show this div if the ready variable is true */}

      <br />
      <h3>Online Status</h3>
      {/* If the user's network status is online, show this div only */}
      {isUserOnline.isUserOnline ? (
        <div data-testid="online-status">Online 🟢</div>
      ) : (
        <div data-testid="offline-status">Offline 🔴</div>
      )}

      {/* If the user's network status is offline, show this div only */}
    </div>
  );
}

export default App;
