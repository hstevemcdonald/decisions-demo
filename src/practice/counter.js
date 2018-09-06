
var appRoot = document.getElementById("app");


let count = 0;
let id = "addone";

const addOne = () => {
    count++;
    console.log(count)
    renderCount();
}

const subtractOne = () => {
    count--;
    console.log(count)
    renderCount();
}

const resetCount = () => {
    count=0;
    console.log(count)
    renderCount();
}


const renderCount = () => {

    var templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne} id="add" className="button">+1</button>
            <button onClick={subtractOne} id="subtract" className="button">-1</button>
            <button onClick={resetCount} id="reset" className="button">Reset</button>
        </div>
    )
    ReactDOM.render(templateTwo, appRoot);

}

renderCount();