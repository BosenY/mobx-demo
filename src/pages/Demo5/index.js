import React, { Component } from 'react';
import './style.styl';
import  {Switch} from '../..//components/index'

export default class Demo5  extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
  }
  NewValue(value) {
    console.log(value)
  }
  handleChange(event) {
    // console.log(event.target.value)
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="demo5">
        <Switch onChanges={(value) => this.NewValue(value)}></Switch>
        <input type="text" value={this.state.value} onChange={(e)=>this.handleChange(e)} />
        <div>{this.state.value}</div>
        <div onClick={() => console.log(this.state.value)}>submit</div>
      </div>
    )
  }
}
