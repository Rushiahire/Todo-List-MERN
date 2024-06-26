import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login";
import SignupPage from "../pages/signup";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
