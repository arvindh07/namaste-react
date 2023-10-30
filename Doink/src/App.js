import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import AppBody from "./components/AppBody";
import Footer from "./components/Footer";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Cart from "./components/Cart";

const AppLayout = () => {
    return (
        <div className="appcontainer">
            <Header />
            <AppBody />
            <Footer />
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/cart",
        element: <Cart />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)