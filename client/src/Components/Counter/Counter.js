import React, { Component } from 'react';

class Counter extends Component { 
constructor(props){
    super(props);
    this.state = {
     count: 0
    }
    };


setCount = (props) => { 
    props.counter(this.state.count)
}

 handleClick = () => {
     this.setState((prevState, { count }) => ({
        count: prevState.count + 1
     }))
 }

 handleClickMinus = () => {
    this.setState((prevState, { count }) => ({
       count: prevState.count -= 1
    }))
}

    render(){
        return (
            <div>
            <button
            onClick={this.handleClick}
            > + </button>
            <p>{this.state.count}</p>

            <button
            onClick={this.handleClickMinus}>-</button>
</div>
        )
    }
}

export default Counter; 