import { Link, useNavigate } from "react-router-dom";

export const StudentCard = ({
  Poster,
  batch,
  green_card,
  name,
  score,
  student_code,
  id,
}) => {
  const Navigate = useNavigate();
  function myfunc(id) {
    console.log("inside");
    <Navigate to={`/student/?:${id}`} />;
  }
  return (
    <div className={"student-card"}>
      {/* Show student details here with a button to view details */}
      <img src={Poster} alt={name} className="student-image" />
      <p className="student-name">{name}</p>
      <h3 className="student-green-card">{green_card}</h3>
      <p className="student-batch">{batch}</p>
      <button className="student-detail">
        <Link to={`/student/:${id}`}> View Details</Link>
      </button>
    </div>
  );
};
