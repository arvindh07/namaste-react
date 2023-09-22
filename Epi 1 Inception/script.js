// by js

// let heading = document.createElement("h1");
// heading.innerHTML = "Hello world from JS!";
// let targetElement = document.getElementById("root");
// targetElement.appendChild(heading);

// by react
// let heading = React.createElement("h1", {}, "Hello World from ReactJS");
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// 1 -> try to create below html using react

/*
<div class="container">
    <span class="link">
        <a href="www.google.com">Link to google</a>
    </span>
</div>
*/
// let container = React.createElement("div", {
//     class: "container"
// }, React.createElement("span", {
//     class: "link"
// }, React.createElement("a", {
//     href: "https://www.google.com"
// }, "Link to google"))
// );
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);

// 2 -> try to create below html using react

/*
<div class="container">
    <span class="link">
        <a href="www.google.com">Link to google</a>
    </span>
    <span class="link">
        <a href="www.youtube.com">Link to youtube</a>
    </span>
</div>
*/
let container = React.createElement("div", {
    class: "container"
}, [React.createElement("span", {
    class: "link"
}, React.createElement("a", {
    href: "https://www.google.com"
}, "Link to google")),
React.createElement("span", {
    class: "link"
}, React.createElement("a", {
    href: "https://www.youtube.com"
}, "Link to youtube"))
]);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
