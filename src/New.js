import React, { useState, useEffect } from 'react';
import './style.css';
import useInput from './useInput';
class New extends React.Component {
  constructor(props) {
    super(props);
    console.log('In New Contructor', this.props); // undefined
  }
  componentDidMount() {
    console.log('From Did Mount New');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Did Update Call from New', this.props.name);
    console.log('Did Update Call from New PrevProps', prevProps);
    console.log('Did Update Call from New PrevState', prevState);
  }

  render() {
    console.log('Rendercall in New');

    return <div>Hello From New {this.props.name}</div>;
  }
}
export default New;
