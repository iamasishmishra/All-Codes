import React, { Component } from 'react'

export default class UnMounting extends Component {


    constructor(){
        super();
        this.id =  setInterval(()=>{
            console.log("Running..");
        },2000);
    }

    componentWillUnmount(){
        clearInterval(this.id);
        console.log("removed");
        
    }
  render() {
    return (
      <div>
        <h1>Hiiii</h1>
      </div>
    )
  }
}
