import React, { Component } from 'react';
import './style.styl';

export default class Demo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {time2: new Date()};
  }
  componentDidMount() {
      this.timerID=setInterval(()=>{
        this.setState({
            time2:new Date()
        },() => console.log('我是一个回调函数'))
      },1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    let time1 = new Date() , {time2} = this.state
    return (
      <div className="demo3">
        <div className="time1">{time1.toLocaleTimeString()}</div>
        <div className="time2">{time2.toLocaleTimeString()}</div>
      </div>
    )
  }
}
