import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import AppBody from "./components/AppBody";
import Footer from "./components/Footer";
import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Cart from "./components/Cart";
import Restaurant from "./components/Restaurant";

const AppLayout = () => {
    return (
        <div className="appcontainer">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <AppBody />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/restaurant/:hotelId",
                element: <Restaurant />
            }       
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)