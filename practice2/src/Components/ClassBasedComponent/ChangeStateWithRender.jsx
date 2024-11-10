      import React, { Component } from 'react'

class ChangeStateWithRender extends Component {
    constructor(){
        super();
        console.log("Constructor called");
        this.state = {
            name: "ak",
        }
        
    }

    
  render() {
    console.log("render() called..");
    return (
      <div>
        <h1>Name: {this.state.name}</h1>
        <button onClick={()=>{this.setState({name: "bk"})}}>Update State</button>
      </div>
    )
  }
}

export default ChangeStateWithRender;
