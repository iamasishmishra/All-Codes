import React, { Component } from 'react'

export default class UpdatingPhase extends Component {

    constructor(){
        super();
        this.state = {count:0,}
    }


    static getDerivedStateFromProps(){
        console.log("1st call");
        
    }

    componentDidUpdate(prevProp, PrevState){
        if(this.PrevState!==this.state.count){
            console.log("Updated");
            
        }
    }
    
    click=()=>{
        this.setState((PrevState)=>({count: PrevState.count+1}))
    }

  render() {
    return (
      <div>
        <h1>count: {this.state.count}</h1>
        <button onClick={this.click}>update</button>
      </div>
    )
  }
}
