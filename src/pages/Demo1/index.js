import React, { Component } from 'react';
import './style.styl';

export default class Demo1 extends Component {
  componentWillMount() {
    // console.log(this.props.CountStore)
  }
  chong(num) {
      return (
          <span>{'🐛'.repeat(num)}</span>
      )
  }
  render() {
      let num = 10

    return (
      <div className="Add">
        {
            [...'1'.repeat(num)].map((item,index) => 
                (
                <div key={index}>{this.chong(index+1)}</div>
                )
            )
        }
      </div>
    )
  }
}