import React, {Component} from "react";

class LifeCycleDemo extends Component{
    constructor(props){
        super(props);
        this.state={
            count: 0
        };
        console.log("1 constructor");
    };

    componentDidMount(){
        console.log("2 componentDidMount");
    }

    componentDidUpdate(prevProps, prevState){
        console.log("3 componentDidUpdate");
        console.log("Previous State", prevState, "New State", this.state.count);
    }

    componentWillUnmount(){
        console.log("4 componentWillUnmount");
    }

    increaseCount = () => {
        this.setState({count: this.state.count + 1});
    }

    render(){
        console.log("rendering ui");

        return(
            <>
            <div style={{textAlign: "center", marginTop: 100}}>
                <h2>React Lifecycle demo</h2>
                <p>Count:{this.state.count}</p>
                <button onClick={this.increaseCount}>Increase Count</button>
            </div>
            </>
        );
    }
}
export default LifeCycleDemo;