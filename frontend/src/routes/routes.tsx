import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login";
import SignupPage from "../pages/signup";
import TaskPage from "../pages/task";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/add-task" element={<TaskPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
