// import { useEffect, useState } from "react";
// import axios from "axios";

import { Link } from "react-router-dom";

const Home = () => {
  //const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8081/users")
  //     .then((res) => setData(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  const data = [
    {
      id: 1,
      Name: "Sohel",
      Email: "sohel@gmail.com",
    },
    {
      id: 2,
      Name: "Sanket",
      Email: "sanket@gmail.com",
    },
    {
      id: 3,
      Name: "Ranjan",
      Email: "Ranjan@gmail.com",
    },
    {
      id: 4,
      Name: "Sameer",
      Email: "sameer@gmail.com",
    },
  ];
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h2>Student List</h2>
        <div className="d-flex justify-content-end">
          <Link to={"/create"} className="btn btn-success">
            Create
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student, index) => {
              return (
                <tr key={index}>
                  <td>{student.id}</td>
                  <td>{student.Name}</td>
                  <td>{student.Email}</td>
                  <td>
                    <button className="btn btn-sm btn-info">Read</button>
                    <button className="btn btn-sm btn-primary mx-2">
                      Edit
                    </button>
                    <button className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
