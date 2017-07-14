import React, { Component } from 'react';
import './style.styl';
import  { TodoInput, TodoList } from '../..//components/index'
import {observer,inject} from "mobx-react"
@inject('TodoStore')
@observer
export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
  }
  render() {
    let { todocount , donecount} = this.props.TodoStore
    return (
      <div className="todomvc">
        <header>
          <h2>todos</h2>
        </header>
        <TodoInput></TodoInput>
        <TodoList></TodoList>
        <div>todocount:{todocount}</div>
        <div>donecount:{donecount}</div>
      </div>
    )
  }
}
