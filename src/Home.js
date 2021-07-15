import React, { useState, useEffect } from 'react';
import './style.css';
import New from './New';
class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log('In Home Contructor', this.props); // undefined
  }
  componentDidMount() {
    console.log('From Did Mount Home');
  }
  componentWillReceiveProps(newProps) {
    console.log('component will receive props IN HOME', newProps);
  }
  componentWillUnmount() {
    // alert('The component is going to be unmounted');
    console.log('bye bye =-=-=-=-HOME=-=-=-=-= Calllll bye bye');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Did Update Call from Home', this.props.name);
    console.log('Did Update Call from Home PrevProps', prevProps);
    console.log('Did Update Call from Home PrevState', prevState);
  }

  render() {
    console.log('Rendercall in Home');

    return (
      <div>
        Hello From Home {this.props.name}
        <New />
      </div>
    );
  }
}
export default Home;
