import { Component } from 'react';

class Circle extends Component {
    constructor({text}) {
        super();
        this.y = Math.floor(Math.random() * window.innerHeight);
        this.x = Math.floor(Math.random() * window.innerWidth);
        this.text = text;
        this.state = {
            // clock: new Date().toLocaleTimeString(),
            color: '#' + Math.floor(Math.random()*16777215).toString(16),
            top: (this.y + 200) > window.innerHeight ? window.innerHeight - 200 : this.y,
            left: (this.x + 200) > window.innerWidth ? window.innerWidth - 216 : this.x+5,
            text: this.text,
        };
    }

    componentDidMount() {
    //    setInterval(
    //        () => this.tick(), 
    //        1000
    //    );
    }

    // tick() {
    //     this.setState({
    //         clock: new Date().toLocaleTimeString(),
    //         color: '#' + Math.floor(Math.random()*16777215).toString(16)
    //     });
    // }

    click = () => {
        this.setState({
            // clock: new Date().toLocaleTimeString(),
            // color: '#' + Math.floor(Math.random()*16777215).toString(16),
            hide: 'none'
        })
    }

    render() {
        return (
            <>
                <h1 className="circle" onClick={this.click} style={{
                    backgroundColor: this.state.color,
                    display: this.state.hide,
                    border: this.state.color.length === 6 ? '1px solid black' : '',
                    position: 'absolute',
                    // top: Math.floor(Math.random()*window.innerHeight),
                    // left: Math.floor(Math.random()*window.innerWidth)
                    top: this.state.top,
                    left: this.state.left
                    }}>
                    {
                      this.state.text
                    }
                </h1>
            </>
        )
    }
};

export default Circle;