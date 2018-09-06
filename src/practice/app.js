"use strict";

console.log("App.js is running");

// JSX 

var app = {
    title: "Decisions, Decisions",
    subtitle: "An app to help make decisions",
    options: []
};

function getTitle(title) {
    return title || "No Title";
}

var onFormSubmit = function onFormSubmit(event) {
    event.preventDefault();
    var option = event.target.elements.option.value;
    if (option) {
        app.options.push(option);
        event.target.elements.option.value = "";
        renderPage();
    }
    console.log('form submitted', option);
};

var onFormReset = function onFormReset(event) {
    event.preventDefault();
    app.options = [];
    renderPage();
};

var decision = "";
var makeDecision = function makeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var decision = app.options[randomNum];
    alert(decision);
};

var renderPage = function renderPage() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            getTitle(app.title)
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        React.createElement(
            "p",
            null,
            app.options.length > 0 ? 'Here are your options:' : 'No Options'
        ),
        React.createElement(
            "button",
            { disabled: app.options.length < 1, onClick: makeDecision },
            "What should I do?"
        ),
        app.options.length ? React.createElement(
            "ul",
            null,
            app.options.map(function (option, index) {
                return React.createElement(
                    "li",
                    { key: index },
                    option
                );
            })
        ) : "",
        React.createElement(
            "form",
            { onSubmit: onFormSubmit, onReset: onFormReset },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            ),
            React.createElement("input", { type: "reset", value: "Clear" })
        )
    );
    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById("app");

renderPage();
