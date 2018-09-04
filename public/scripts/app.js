"use strict";

console.log("App.js is running");

// JSX 

var app = {
    title: "Decisions, Decisions",
    subtitle: "An app to help make decisions"
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "p",
        null,
        app.subtitle
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
