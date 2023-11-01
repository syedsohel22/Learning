import { useState } from "react";
import axios from "axios";

const Create = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    axios
      .post("http://localhost:8081/users", formdata)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add Student</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) =>
                setFormdata({ ...formdata, name: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              onChange={(e) =>
                setFormdata({ ...formdata, email: e.target.value })
              }
            />
          </div>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
