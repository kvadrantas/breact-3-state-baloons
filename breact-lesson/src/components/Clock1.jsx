import { Component } from 'react';

class Clock extends Component {
    constructor() {
        super();
        this.state = {
            clock: new Date().toLocaleTimeString(),
            color: '#' + Math.floor(Math.random()*16777215).toString(16)
        };
    }

    componentDidMount() {
    //    setInterval(
    //        () => this.tick(), 
    //        1000
    //    );
    }

    tick() {
        this.setState({
            clock: new Date().toLocaleTimeString(),
            color: '#' + Math.floor(Math.random()*16777215).toString(16)
        });
    }

    click = () => {
        this.setState({
            clock: new Date().toLocaleTimeString(),
            color: '#' + Math.floor(Math.random()*16777215).toString(16)
        })
    }

    render() {
        return (
            <>
                <h1 style={{backgroundColor: this.state.color}}>
                    {this.state.clock}
                    <button onClick={this.click}>CLICK</button>
                </h1>
            </>
        )
    }
};

export default Clock;