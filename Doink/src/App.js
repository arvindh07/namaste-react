import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import AppBody from "./components/AppBody";
import Footer from "./components/Footer";

const AppLayout = () => {
    return (
        <div className="container">
            <Header />
            <AppBody />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)