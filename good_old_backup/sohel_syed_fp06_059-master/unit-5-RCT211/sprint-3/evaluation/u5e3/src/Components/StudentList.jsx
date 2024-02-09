import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudent } from "../Redux/StudentReducer/action";
import { StudentCard } from "./StudentCard";


export const StudentList = () => {
  const dispatch = useDispatch();

  const Arr = useSelector((state) => {
    return state.studentReducer.students;
  });

  useEffect(() => {
    dispatch(getStudent());
    // console.log("student-Data", Arr);
  }, []);
  return (
    <div>
      <div data-testid="student-list">
        {/* Map through the student list using StudentCard component  */}
        {Arr.length > 0 &&
          Arr.map((el) => {
            return <StudentCard {...el} key={el.id} />;
          })}
      </div>
    </div>
  );
};
