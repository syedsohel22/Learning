// src/App.js
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUsers,
  selectAllUsers,
  selectUserStatus,
  selectError,
} from "./userSlice";

function App() {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const userStatus = useSelector(selectUserStatus);
  const error = useSelector(selectError);

  useEffect(() => {
    if (userStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [userStatus, dispatch]);

  return (
    <div>
      {userStatus === "loading" && <div>Loading...</div>}
      {userStatus === "failed" && <div>{error}</div>}
      {userStatus === "succeeded" && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
