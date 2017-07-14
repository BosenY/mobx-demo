import React, { Component } from 'react';
import './style.styl';

export default class Switch  extends Component {
 static defaultProps = {
    state: false
  }
  static propTypes = {
    state: React.PropTypes.bool,
    onChanges: React.PropTypes.func,
  }
  constructor(props) {
    super(props);
    this.state = {
        coreWidth: 2,
        state: false,
        offColor: '#bfcbd9',
        onColor: '#20a0ff'

    }
  }
  toggle() {
    let coreWidth,state
    if(this.state.state) {
        coreWidth = 2
        state = false
        this.props.onChanges(state)
    } else {
        coreWidth = 26
        state = true
        this.props.onChanges(state)
    }
    this.setState({
        coreWidth,
        state
    })
  }
  render() {
    let { coreWidth, onColor, offColor, state } =  this.state
    return (
    <span className="bs-switch" style={{backgroundColor:`${state? onColor: offColor}`}} onClick={()=> this.toggle()}>
        <span className="bs-switch-btn" style={{transform:`translate(${coreWidth}px, 2px)`}}></span>
    </span>
    )
  }
}