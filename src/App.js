import React, { Component } from 'react';
import './App.css';

var wisdoms = [
  "You've reached the wrong page my dude",
  "404 Page Not Found yo",
  "Wrong address man.",
  "You should leave now.",
  "Ludacris says GET BACK",
  "There's no need for you to waste your time here, my friend.",
  "Just close the tab"
]


class App extends Component {
  constructor(props) {
    super(props);
    
    var index = Math.floor(Math.random() * wisdoms.length);
    
    this.state = {
      wisdom: wisdoms[index]
    };
    
    this.setRandomWisdom = this.setRandomWisdom.bind(this);
    this.addWisdom = this.addWisdom.bind(this);
	setInterval(this.setRandomWisdom,15000);
  }
  
  setRandomWisdom() {
    var index = Math.floor(Math.random() * wisdoms.length);
    var startingValue = Math.floor(Math.random() * wisdoms.length);
	if (index !== startingValue){    
    this.setState({
      wisdom: wisdoms[index]
    });
	startingValue = index;
} else {
	if (startingValue <= wisdoms.length -1){
	index = index +1;}
	else {
	index = 0;
}
	startingValue = index;
  }}


  
  addWisdom() {
    wisdoms.push(prompt("What new wisdom do you offer?"));
  }
  
  removeCurrentWisdom() {
    var index = wisdoms.indexOf(this.state.wisdom);
    wisdoms.splice(index, 1);
  }
  
  render() {
    return (
      <div className="App">
        {this.state.wisdom}
        <button className="more" onClick={this.setRandomWisdom}>nah</button>
        <button className="more" onClick={this.addWisdom}>bruh</button>
      </div>
    );
  }
}

export default App;
