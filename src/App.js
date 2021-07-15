import React, { useState, useEffect } from 'react';
import './style.css';
import Home from './Home';
// import useInput from './useInput';
import About from './About';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: true
    };
    this.check = this.check.bind(this);
    // console.log(props);
    console.log('APP__Contructor Call In App', this.props); // undefined
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('APP____getSnapshotBeforeUpdate(prevProps', prevProps);
    console.log('APP______getSnapshotBeforeUpdate(prevState', prevState);
    return 'asasa';
  }
  componentWillUnmount() {
    // alert('The component is going to be unmounted');
    console.log('APP______bye bye =-=-=-=-APP=-=-=-=-= Calllll bye bye');
  }
  // componentWillUpdate() {
  //   // alert('The component is going to be unmounted');
  //   console.log('APP_____WILLUPDATE ');
  // }
  // componentWillReceiveProps(newProps) {
  //   if (this.state.name !== newProps) {
  //     console.log('APP__ New Props have been assigned ');
  //     // Use this.setState() to rerender the page.
  //     return 'kjk';
  //   } else {
  //     console.log('APP__New Props has been not assign');
  //     return 'ioi';
  //   }
  // }
  // getDerivedStateFromProps() {
  //   console.log('getDerivedStateFromProps IN APP');
  // }

  componentDidMount() {
    console.log('APP__Component DidMount Call In App');
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('APP UPDATE IS CALL', prevProps);
    console.log('APP UPDATE IS CALL', prevState);
    console.log('APP UPDATE IS CALL', snapshot);
  }
  check(e) {
    e.preventDefault();
    // e.stopPropagation();
    this.setState({ name: !this.state.name });
    console.log('APP__calll btn click');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('APP __SHould Component Update Call NExt Props', nextProps);
    console.log('APP__SHould Component Update Call Next State', nextState);
    console.log('APP__-----State-----', this.state.name);
    // if (nextState === this.state.name) {
    //   console.log('---------------||----------------');
    //   return false;
    // } else {
    return true;
    // }
  }
  render() {
    console.log('Render call in App');
    return (
      <div>
        <button onClick={this.check}>Update State</button>
        {this.state.name && <Home name={this.state.name} />}
        <About name={this.state.name} />
        {/* <New /> */}
      </div>
    );
  }
}
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hello: 'sndsjdshj'
//     };
//     setState('sdsdsd');
//   }
//   // const [s, ss] = useState('jhjhj');
//   render() {
//     return (
//       <div>
//         <h1>Hello StackBlitz!</h1>
//       </div>
//     );
//   }
// }
export default App;
