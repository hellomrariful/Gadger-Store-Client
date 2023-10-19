import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Root = () => {
  return (
    <div className="md:mx-20 mx-6">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;