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
  shouldComponentUpdate(nextProps, nextState) {
    console.log('ABOUT __SHould Component Update Call NExt Props', nextProps);
    console.log('ABOUT__SHould Component Update Call Next State', nextState);
    // console.log('ABOUT__-----State-----', this.state.name);
    // if (nextState === this.state.name) {
    //   console.log('---------------||----------------');
    //   return false;
    // } else {
    return true;
    // }
  }
  // componentWillReceiveProps(newProps) {
  //   console.log('component will receive props IN abOUT', newProps);
  // }

  render() {
    console.log('Rendercall in About');

    return (
      <div>Hello From About {this.props.name === true ? 'Hello' : 'Hiii'}</div>
    );
  }
}
export default About;
