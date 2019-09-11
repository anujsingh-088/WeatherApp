import React, { Component } from 'react';
import './App.css';
import Person from './components/person';
class App extends Component {
  constructor(props){
    super(props)
  }
  state={
    name:'anuj',
    age:'',
    contact:'',
    toggleName:false
  }
  handleChange=(e)=>{
    console.log(this.state.toggleName);
    const toggle=this.state.toggleName;
    this.setState({
    toggleName:!toggle}) 
  }
  render() {
    let newRender;
  
    if(this.state.toggleName){
     
      newRender=
      (
      <div>
        <Person name='love'/>
      </div>
    )}
    else{newRender=null};
    
    return (
      <div>
        
        <button type='click' click={this.handleChange}>change</button>
        <Person name={this.state.name}/>
        {newRender}
      </div>
    );
  }
}

export default App;
