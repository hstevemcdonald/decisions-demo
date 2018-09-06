


class Visible extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisible = this.toggleVisible.bind(this)
        this.state = {
            visible: true
        }
    }
    toggleVisible (event) {
        event.preventDefault();
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        })
    }
    render() {
        return (<div>
            <h1>Visibility Toggle</h1>
            {(this.state.visible ? <p>This is the text we want to see</p> : "")}
            <button onClick={this.toggleVisible}>Toggle</button>
            </div>
        )
    }
}

ReactDOM.render(<Visible />, document.getElementById("app"));

