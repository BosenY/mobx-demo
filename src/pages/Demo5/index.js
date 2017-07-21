import React, {Component} from 'react';
import './style.styl';
import {Switch} from '../..//components/index'

export default class Demo5 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      a: 1,
      b: 2,
      c: 3
    }
  }
  NewValue(value) {
    console.log(value)
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    let obj = this.state
    return (
      <div className="demo5">
        <Switch onChanges={(value) => this.NewValue(value)} {...this.state}></Switch>
        <input
          type="text"
          value={this.state.value}
          onInput={(e) => this.handleChange(e)}/>
        <div>{this.state.value}</div>
        <div onClick={() => console.log(this.state.value)}>submit</div>
      </div>
    )
  }
}
