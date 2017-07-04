import React, { Component } from 'react';
import { Button} from 'antd-mobile'
import './style.styl';
import {observer,inject} from "mobx-react"

@inject('CountStore')
@observer
export default class Add extends Component {
  constructor(props) {
    super(props)
    this.state ={
      msg:''
    }
  }
  handleInput(e) {
  this.setState({msg: e.target.value});

}
handleKeyDown(e){
  if(e.keyCode == "13") {
    this.props.CountStore.PushAXXX(this.state.msg)
    this.setState({msg: ''});
  }
}
  componentWillMount() {
    // console.log(this.props.CountStore)
  }
  render() {
    let value = this.state.msg , {list,PushAXXX} = this.props.CountStore
    return (
      <div className="Add">
        <Button className="btn" size="small" onClick={()=> {this.props.CountStore.AddCount()}} type="primary">+</Button>
        <div>{this.props.CountStore.count}</div>
        <Button className="btn" size="small" onClick={()=> {this.props.CountStore.ReduceCount()}}  type="primary">-</Button>
        <input  type="text" onInput={(e)=> this.handleInput(e)} onKeyDown={(e)=> this.handleKeyDown(e)} value={value}/>
        <Button className="btn" size=""  type="primary" 
        onClick={()=> {PushAXXX(value) 
        this.setState({msg: ''})}}
        >push</Button>
        <span>[{list.map((item,index) => (
          <span>{item}{index == list.length -1 ? '':','}</span>
        ))}
        ]</span>
      </div>
    )
  }
}