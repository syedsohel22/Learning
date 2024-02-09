import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployeeData } from "../Redux/AppReducer/action";

export default function EmployeeData() {
  const dispatch = useDispatch();

  const Arr = useSelector((state) => {
    return state.employeeData;
  });

  console.log(Arr);
  useEffect(() => {
    dispatch(getEmployeeData());
  }, []);
  return (
    <div>
      <h2>Employee Data</h2>
      <div className="employee_data_cont">
        {/* Map the below div against yoru employee data */}
        {Arr.length > 0 &&
          Arr.map((el) => {
            return (
              <div className="employee" style={{ width: "250px" }} key={el.id}>
                <img className="image" alt="img" width="70%" src={el.image} />
                <div className="name">{el.name}</div>
                <div className="gender">{el.gender}</div>
                <div className="department">{el.department}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
