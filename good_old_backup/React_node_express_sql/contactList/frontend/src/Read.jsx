import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Read = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8081/users/` + id)
      .then((res) => {
        console.log(res);
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h2>User Datails</h2>
        <p>id: {user.id}</p>
        <p>Name: {user.Name}</p>
        <p>Email: {user.Email}</p>
      </div>
    </div>
  );
};

export default Read;
