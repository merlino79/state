import React, { Component } from 'react';

class Counter extends Component {
   state = { 
       count: 0
    }

   inncrement = () =>{
       
      this.setState({
          count: this.state.count + 1,
        })
        console.log(this.state.count);
          
    }

    decrement = () => {
        this.setState({
            count: this.state.count -1,
        })
        console.log(this.state.count);
    }
          
    render() {
        return (
            <div>
                <h1> result : {this.state.count}</h1>
                <button onClick={this.inncrement}>click + 1 </button>
                <button onClick={this.decrement}>click  -1 </button>
            </div>
        );
    }
}

export default Counter;