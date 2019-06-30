import React, { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState('emerson');
  function changeName() {
    setName('Lopes');
  }

  useEffect(() => {
    console.log('hello from a functional component');
  }, []);

  useEffect(() => {
    console.log('name has changed!');
  }, [name]);

  return (
    <div className="App">
      <p>your name is :{name}</p>

      <button onClick={changeName}>change name!</button>
    </div>
  );
}

class App2 extends React.Component {
  state = {
    name: 'emerson'
  };

  componentDidMount() {
    console.log('hello world from a class component');
  }

  changeName = () => {
    this.setState({
      name: 'lopes'
    });
  };

  render() {
    return (
      <div className="App">
        <p>your name is :{this.state.name}</p>

        <button onClick={this.changeName}>change name!</button>
      </div>
    );
  }
}

function Main() {
  return (
    <>
      <App />
      <App2 />
    </>
  );
}

export default Main;
