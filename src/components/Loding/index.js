import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import './style.styl';

export default class Loding extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <div className="loding">
        <ReactLoading type="spin" color="#444"></ReactLoading>
      </div>
    ) 
  }
}