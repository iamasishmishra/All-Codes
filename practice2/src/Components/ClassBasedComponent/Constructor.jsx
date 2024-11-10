import React, { Component } from 'react'

export default class Constructor extends React.Component {
  constructor() {
    super();
    console.log("constructor called.");
  }

  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
    
  }

  componentDidMount(){
    console.log("didMount Called...");
    
  }

  render() {
    console.log("render methosd called");
    return (
      <div>
        <h1>Constructor</h1>
      </div>
    )
  }
}
