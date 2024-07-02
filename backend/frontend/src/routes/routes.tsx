import { Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "../pages/login";
import SignupPage from "../pages/signup";
import TaskPage from "../pages/task";
import { useEffect } from "react";

const AppRoutes = () => {
  const id: any = localStorage.getItem("id");
  const navigate = useNavigate();
  useEffect(() => {
    if (!id) {
      navigate("/login");
    }
  }, []);

  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/add-task" element={<TaskPage />}></Route>
    </Routes>
    // </BrowserRouter>
  );
};

export default AppRoutes;
