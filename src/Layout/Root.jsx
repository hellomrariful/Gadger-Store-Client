// import { Outlet } from "react-router-dom";
// import Navbar from "../Pages/Shared/Navbar/Navbar";
// import Footer from "../Pages/Shared/Footer/Footer";

// const Root = () => {
//   return (
//     <div className="md:mx-20 mx-6">
//       <Navbar></Navbar>
//       <Outlet></Outlet>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default Root;


import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Root = () => {
  return (
    <div className="font-inter  flex flex-col">
      <div className="px-6 container  mx-auto flex-grow">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
