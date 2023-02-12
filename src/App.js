import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ContactBtn from "./components/ContactBtn/ContactBtn";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
