import React,{ Component} from 'react';
import './index.css';


class Square extends Component {
  render(){
    return(
      <div className = {this.props.cssClass}>
        {this.props.label}
      </div>
    );
  };
};

class App extends Component {
 
  render(){
   
    return (
    <div className="App">
 
      <Square
      label="Big square"
      cssClass="big"/> 
      <Square
      label="Midle square"
      cssClass="mid"/> 
      <Square
      label="Small square"
      cssClass="small"/> 

    </div>
    );
  };
};




export default App;
