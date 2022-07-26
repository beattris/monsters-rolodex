import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: 'Beatrice'
    }
  }
  
  render(){
    return (
      <div className="App">
        <p>Hi, {this.state.name}</p>
        <button onClick={() =>{
          this.setState({name: 'Tris'})
        }}>change name</button>
      </div>
    );
  }
}

export default App;
