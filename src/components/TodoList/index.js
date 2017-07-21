import React, { Component } from 'react';
import './style.styl';
import {observer,inject} from "mobx-react"
@inject('TodoStore')
@observer
export default class extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    // this.delete = this.delete.bind(this)
  }
  //变换item的state
  toggle(item,index) {
    console.log(index)
    if(item.todo) {
        this.props.TodoStore.done(index)
    } else {
        this.props.TodoStore.retodo(index)
    }
  }
  //delete
  delete(index) {
    console.log(index)
    this.props.TodoStore.delete(index)
  }
  render() {
      let { todolist } = this.props.TodoStore
    return (
      <div className="todolist">
        {
            todolist.map((item, index) => (
                <div key={index} className={` todo-item-container`}>
                    <div className="todo-item-toggle" onClick={this.toggle.bind(this,item, index)}>x</div>
                    <div className={`todo-item ${item.todo? 'todo' :'done'}`}> {item.text}</div>
                    <div className="todo-item-delete" onClick={this.delete.bind(this, index)}>delete</div>
                </div>

            )
            )
        }
      </div>
    )
  }
}
