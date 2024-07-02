import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <>
      <Navbar />

      <AppRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
