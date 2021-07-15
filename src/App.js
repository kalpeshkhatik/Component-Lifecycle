import React, { useState, useEffect } from 'react';
import './style.css';
import Home from './Home';
// import useInput from './useInput';
import About from './About';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: Date.now()
    };
    this.check = this.check.bind(this);
    // console.log(props);
    console.log('Contructor Call In App', this.props); // undefined
  }
  // getDerivedStateFromProps() {
  //   console.log('getDerivedStateFromProps IN APP');
  // }

  componentDidMount() {
    console.log('Component DidMount Call In App');
  }
  componentDidUpdate() {
    console.log('APP UPDATE IS CALL');
  }
  check(e) {
    e.stopPropagation();
    this.setState({ name: Date.now() });
    console.log('calll btn click');
  }
  shouldComponentUpdate() {
    console.log('SHould Component Update Call');
    return true;
  }
  render() {
    console.log('Rendercall in App');
    return (
      <div>
        In App
        <button onClick={this.check}>Update State</button>
        <Home name={this.state.name} />
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
