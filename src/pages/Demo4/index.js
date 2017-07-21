import React, { Component } from 'react';
import './style.styl';

export default class  extends Component {
  constructor(props) {
    super(props);
    this.ClickBlue = this.ClickBlue.bind(this)
  }
  ClickBig(num,e) {
      console.log(num)
      console.log(this)
    console.log('bigbtn is clicked !')
  }
  ClickSmall(e) {
    e.stopPropagation()
    console.log(arguments)
    console.log('smallbtn is clicked !')
  }
  ClickBlue(num1,num2,num3) {
      console.log(this)
      console.log(arguments)
      console.log(num1)
      console.log(num2)
      console.log(num3)
      console.log('bluediv is clicked !')
  }
  ClickYellow() {
      console.log(this)
      console.log(arguments)
      console.log('yellow')
  }
  render() {
    return (
      <div className="demo4">
        <div className="bigbtn" onClick={this.ClickBig.bind(this,11)}>
            <div className="smallbtn" onClick={(e) => this.ClickSmall(e)}></div>
        </div>
        <div className="blue" onClick={this.ClickBlue}>1</div>
        <div className="yellow" onClick={::this.ClickYellow}></div>
      </div>
    )
  }
}
