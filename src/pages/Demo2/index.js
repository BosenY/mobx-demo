import React, { Component } from 'react';
import './style.styl';
import { Button} from 'antd-mobile'
import {Loding} from '../../components'

export default class Demo2 extends Component {
    constructor(props) {
        super(props)
        this.state= {
            show: false,
            color: 'red',
            btnStyle:{
                width:'70px',
                height: '35px',
                'marginTop':'20px',
                'fontSize':'15px',
                'lineHeight':'35px',
                'textAlign': 'center'
            }
        }
    }
  componentWillMount() {
    // console.log(this.props.CountStore)
    setTimeout(() => {
        this.setState({
            show: true
        })
    },3000)
  }
  toggle() {
      let color = ''
      if(this.state.color == 'red') {
          color = 'blue'
      } else {
          color = 'red'
      }
      this.setState({color})
  }

  render() {
    let {color,btnStyle,show} = this.state
    if(show) {
        return (
        <div className="demo2">
            <div className={`${color} circle`}></div>
            <Button className="btn" style={btnStyle} size="small" onClick={()=> this.toggle()}  type="primary">变</Button>
        </div>
        )
    } else {
        return (
            <Loding></Loding>
        )
    }
  }
}