import React, { useState, useEffect } from 'react';
import './style.css';
import useInput from './useInput';
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log('In About Contructor', this.props); // undefined
  }
  componentDidMount() {
    console.log('From Did Mount About');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Did Update Call from About', this.props.name);
    console.log('Did Update Call from About PrevProps', prevProps);
    console.log('Did Update Call from About PrevState', prevState);
  }

  render() {
    console.log('Rendercall in About');

    return <div>Hello From About {this.props.name}</div>;
  }
}
export default About;
