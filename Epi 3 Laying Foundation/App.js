import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../Epi 3 Laying Foundation/logo.jpg";
import user from "../Epi 3 Laying Foundation/user.jpg";
import "./index.css";

// react element
// const Title = () => <h1>Namaste React heading rendered -- Title🚀</h1>;

// react functional component
// implicit return
// const Header = () => <h1>Header functional component🔥🚀</h1>
// const Header = () => {
//     return (
//         <div id="container">
//             <Title />
//             <h1> Header functional component🔥🚀</h1>
//         </div>
//     )
// }

// Assignment #1
// using React.createElement()
// const header = React.createElement("div", {
//     className: "title",
// }, [
//     React.createElement("h1", {}, "Heading 1"),
//     React.createElement("h2", {}, "Heading 2"),
//     React.createElement("h3", {}, "Heading 3")
// ])

// using jsx element
// const header = (
//     <div className="title">
//         <h1>Heading 1</h1>
//         <h2>Heading 2</h2>
//         <h3>Heading 3</h3>
//     </div>
// )

// using jsx function component
// const Header = () => {
//     return (
//         <div className="title">
//             <Title />
//             <h1>Heading 1</h1>
//             <h2>Heading 2</h2>
//             <h3>Heading 3</h3>
//         </div>
//     )
// }

// Assignment #2 - Create a Header element
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" className="logo" />
            <div className="search__container">
                <input type="text" className="search" />    
                <button className="search__btn">Search</button>
            </div>
            <img src={user} alt="" className="user" />
        </div>
    )
}

// rendering that element in root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);