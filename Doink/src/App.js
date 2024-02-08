import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import AppBody from "./components/AppBody";
import Footer from "./components/Footer";
// import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Cart from "./components/Cart";
import Restaurant from "./components/Restaurant";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/context/UserContext";
import Grocery from "./components/Grocery";
import { Provider } from "react-redux";
import store from "./store/store";
import Contact from "./components/Contact";
import Hooks from "./hooks (bonus)/Hooks";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"))

const AppLayout = () => {
    const [username, setUsername] = useState("");
    useEffect(() => {
        // assume make api call and setting data
        setUsername("Arvindh G");
    }, [])

    return (
        <Provider store={store}>
            <UserContext.Provider value={{ loggedInUsername: username, setUsername }}>
                <div className="appcontainer">
                    <Header />
                    <div className="md:w-11/12 mx-auto">
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </UserContext.Provider>
        </Provider>
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
                element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/restaurant/:hotelId",
                element: <Restaurant />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer />}><Grocery /></Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/hooks",
                element: <Hooks />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)