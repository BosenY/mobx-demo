import React, { Component } from 'react';
import { Button} from 'antd-mobile'
import './style.styl';
import {observer,inject} from "mobx-react"

@inject('CountStore')
@observer
export default class Other extends Component {
  componentWillMount() {
    console.log(this.props.CountStore)
  }
  render() {
    return (
      <div className="Add">

        <div>{this.props.CountStore.count}</div>
        <div>{this.props.CountStore.aaa}</div>
      </div>
    )
  }
}