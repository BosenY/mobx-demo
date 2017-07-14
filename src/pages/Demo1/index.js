import React, { Component } from 'react';
import './style.styl';
import { Button } from 'antd-mobile'

class Title extends Component {
  static defaultProps = {
    title: '默认值'
  }
  static propTypes = {
    title: React.PropTypes.string,
    // title: React.PropTypes.string.isRequired,
  }
  render() {
      let {title} = this.props
      return(
        <div>
            {title}
        </div>
      )

  }
}

export default class Demo1 extends Component {
    constructor(props) {
        console.log('构造函数')
        super(props);
        this.state = {
            count: 1
        };
    }
    add() {
        this.setState({
            count: this.state.count +1
        },()=>{console.log('执行完毕')})
    }
    chong(num = 5) {
        return (
            <span>{'🐛'.repeat(num)}</span>
        )
    }
    //组件将要被渲染到真实的dom节点中
    componentWillMount(){
        console.log('componentWillMount');
    }
    //组件已经插入到真实的dom节点中
    componentDidMount(){
        console.log('componentDidMount');
    }
    //组件是否要被重新渲染
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;
    }
    //组件将要被重新渲染
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }
    //组件已经被重新渲染
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    //组件将要接收到新属性
    componnentWillReceiveProps(){
        console.log('componnentWillReceiveProps');
    }
    //组件将要卸载时
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    render() {
        console.log('render')
        let num = 10, chong = '虫' , {count} = this.state
        return (
        <div className="Add">
            <Title></Title>
            <Title title="虫"></Title>
            <Title title={`${chong}${count}`}></Title>
            <Button className="btn"  size="small" onClick={()=> this.add()}  type="primary">++</Button>
            {
                [...'1'.repeat(num)].map((item,index) =>
                    (
                    <div key={index}>{this.chong(index+1)}</div>
                    )
                )
            }
            {
                [...'1'.repeat(num)].map((item,index) =>
                    (
                    <div key={index}>{this.chong()}</div>
                    )
                )
            }
        </div>
        )
    }
}