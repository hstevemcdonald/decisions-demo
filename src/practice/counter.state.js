
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.addOne = this.addOne.bind(this);
        this.subtractOne = this.subtractOne.bind(this);
        this.resetCount = this.resetCount.bind(this);
        this.state = {
            count: 0
        }
    }
    addOne() {
        console.log("Add one")
        this.setState((prevState) => {
            return {
                count: prevState.count+1
            }
        })
    }
    subtractOne() {
        console.log("Subtract one")
        this.setState((prevState) => {
            return {
                count: prevState.count-1
            }
        })
    }
    resetCount() {
        console.log("Reset")
        this.setState((prevState) => {
            return {
                count: 0
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.subtractOne}>-1</button>
                <button onClick={this.resetCount}>Reset</button>
            </div>
        )
    }
}


// let count = 0;
// let id = "addone";

// const addOne = () => {
//     count++;
//     console.log(count)
//     renderCount();
// }

// const subtractOne = () => {
//     count--;
//     console.log(count)
//     renderCount();
// }

// const resetCount = () => {
//     count=0;
//     console.log(count)
//     renderCount();
// }


// const renderCount = () => {

//     var templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne} id="add" className="button">+1</button>
//             <button onClick={subtractOne} id="subtract" className="button">-1</button>
//             <button onClick={resetCount} id="reset" className="button">Reset</button>
//         </div>
//     )
//     

// }

// renderCount();

var appRoot = document.getElementById("app");
ReactDOM.render(<Counter />, appRoot);