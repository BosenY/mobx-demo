import React, { Component } from 'react';
import './style.styl';
import {observer,inject} from "mobx-react"
@inject('TodoStore')
@observer
export default class TodoInput  extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  handleChange(event) {
    this.setState({text: event.target.value});
  }
  handleKeyDown(e){
  if(e.keyCode == "13") {
    this.props.TodoStore.newtodo(this.state.text)
    this.setState({text: ''});
  }
}
  render() {
    let { text } = this.state
    return (
      <div className="todoinput">
        <div className="icon up"></div>
        <input
        className="new-todo"
        type="text"
        value={text}
        onChange={(e)=>this.handleChange(e)}
        onKeyDown={(e)=> {if(text !== ''){this.handleKeyDown(e)}}}
        placeholder="What needs to be done?" />
      </div>
    )
  }
}
