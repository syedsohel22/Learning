// code goes here
// do a default export
import React from "react";

const Courses = () => {
  return (
    <div>
      <h2>Full Time Courses</h2>
      <ol>
        <li>
          Full Stack Web Development
          <ul>
            <li>Eligibility : 18-28yrs</li>
            <li>Duration : 30weeks</li>
          </ul>
        </li>
      </ol>

      <h2>Part Time Courses</h2>
      <ol>
        <li>Full Stack Web Development</li>
        <ul>
          <li>Eligibility : 18-28yrs</li>
          <li>Duration : 30weeks</li>
        </ul>
        <li>Data Analytics</li>
        <ul>
          <li>Eligibility : 18-28yrs</li>
          <li>Duration : 30weeks</li>
        </ul>
      </ol>
    </div>
  );
};

export default Courses;
