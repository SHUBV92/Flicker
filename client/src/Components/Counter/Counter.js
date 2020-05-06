import React, { Component } from 'react';

class Counter extends Component { 
 state = {
     count: 0
 };

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