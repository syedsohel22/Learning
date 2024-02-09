import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import QuizPage from "../pages/QuizPage";
import Results from "../pages/Results";
import Dashboard from "../pages/Dashboard";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/results" element={<Results />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default MainRoutes;
