
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Decisions, Decisions",
            subtitle: "An app to help make decisions",
            options: ["Thing one", "Thing two", "Thing three"]
        }
        this.handleResetOptions = this.handleResetOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
    }
    handleResetOptions() {
        this.setState(() => {
            return {options:[]}
        })
    }
    handleAddOption(option) {
        if (!option) {
           return "Enter valid value"
        } else if (this.state.options.indexOf(option)>-1) {
            return "This option already exists";
        }
        this.setState((prevState) => {
            let newStateOptions = prevState.options;
            newStateOptions.push(option)
            return {options:newStateOptions}
        })
    }
    handlePick() {
        let pickIndex = Math.floor(Math.random()*this.state.options.length);
        alert(this.state.options[pickIndex])
    }
    render() {
        return (
            <div>
             <Header title={this.state.title} subtitle={this.state.subtitle}/>
             <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0} />
             <Options options={this.state.options} handleResetOptions={this.handleResetOptions}/>
             <AddOption error={this.props.error} handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h6>{this.props.subtitle}</h6>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
        <div>
            <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>
            What should I do?
            </button>
        </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <li key={this.key}>{this.props.option}</li>
        )
    }
}

class Options extends React.Component {   
    render() {
        return (
        <div>
            <input type="button" onClick={this.props.handleResetOptions} value="Remove All"/>
            <ul>
            {
                 this.props.options.map((option, index) => {
                     return <Option key={index} option={option}/>;
                })
            }
            </ul>
        </div>
        )
    }
}

class AddOption extends React.Component {
    // why does this have to be here??????????? instead of within App Component? because the error checking and extraction of the value should stay with the component
    // use an additional state - specific for this component
    // we use state so that when updated our render re-renders
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(event) {
        event.preventDefault();
        const error = this.props.handleAddOption(event.target.elements.option.value);
        this.setState(() => {
            return {error}
        });
        event.target.elements.option.value = "";
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption} >
                    <input type="text" name="option"/>
                    <input type="submit" value="Add Option"/>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
