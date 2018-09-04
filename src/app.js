
console.log("App.js is running");

// JSX 

var app = {
    title:"Decisions, Decisions",
    subtitle: "An app to help make decisions"
}

var template  = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>      
    </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);