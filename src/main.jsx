import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Layout/Root";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import AuthProvider from "./Providers/AuthProvider";
import Register from "./Pages/Register/Register";
import Cart from "./Pages/Cart/Cart";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AddProduct from "./Pages/AddProduct/AddProduct";
import Apple from "./Pages/Brand/Apple";
import UpdateProduct from "./Pages/UpdateProduct/UpdateProduct";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Google from "./Pages/Brand/Google";
import Microsoft from "./Pages/Brand/Microsoft";
import Samsung from "./Pages/Brand/Samsung";
import Sony from "./Pages/Brand/Sony";
import Canon from "./Pages/Brand/Canon";
import Shop from "./Pages/Shop/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://gadger-store-server.vercel.app/products"),
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(`https://gadger-store-server.vercel.app/cartProducts`),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
        loader: () => fetch("https://gadger-store-server.vercel.app/products"),
      },
      {
        path: "/apple",
        element: <Apple></Apple>,
        loader: () =>
          fetch("https://gadger-store-server.vercel.app/products/brand/Apple"),
      },
      {
        path: "/google",
        element: <Google></Google>,
        loader: () =>
          fetch("https://gadger-store-server.vercel.app/products/brand/Google"),
      },
      {
        path: "/microsoft",
        element: <Microsoft></Microsoft>,
        loader: () =>
          fetch(
            "https://gadger-store-server.vercel.app/products/brand/Microsoft"
          ),
      },
      {
        path: "/samsung",
        element: <Samsung></Samsung>,
        loader: () =>
          fetch(
            "https://gadger-store-server.vercel.app/products/brand/Samsung"
          ),
      },
      {
        path: "/sony",
        element: <Sony></Sony>,
        loader: () =>
          fetch("https://gadger-store-server.vercel.app/products/brand/Sony"),
      },
      {
        path: "/canon",
        element: <Canon></Canon>,
        loader: () =>
          fetch("https://gadger-store-server.vercel.app/products/brand/Canon"),
      },
      {
        path: "updateProduct/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://gadger-store-server.vercel.app/products/${params.id}`),
      },
      {
        path: "productDetails/:id",
        element: (
          <PrivateRoute>
            {" "}
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://gadger-store-server.vercel.app/products/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
