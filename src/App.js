import "./App.css";
import React from 'react'

class App extends React.Component {
  state ={
    name:'circle'
  }

  startRotation = () => {
    this.setState ({
      name: 'circle start-rotate'
    });

    setTimeout(() =>{
      this.setState({
        name: 'circle start-rotate stop-rotate'
      });
    }, Math.floor(Math.random() * 10000) + 1); 
  }
  

render() {
  return (

    
    <div>
    <div className = 'arrow'></div>
      <ul className = {this.state.name}>
        <li>
          <div className = 'text'
          contentEditable= 'true'
          spellCheck = 'false'> $0</div>
        </li>

         <li>
          <div className = 'text'
          contentEditable= 'true'
          spellCheck = 'false'> $10</div>
        </li>

         <li>
          <div className = 'text'
          contentEditable= 'true'
          spellCheck = 'false'> $0</div>
        </li>

         <li>
          <div className = 'text'
          contentEditable= 'true'
          spellCheck = 'false'> $1</div>
        </li>

         <li>
          <div className = 'text'
          contentEditable= 'true'
          spellCheck = 'false'> $0</div>
        </li>

         <li>
          <div className = 'text'
          contentEditable= 'true'
          spellCheck = 'false'> $10</div>
        </li>

         <li>
          <div className = 'text'
          contentEditable= 'true'
          spellCheck = 'false'> $0</div>
        </li>
        <li>
          <div className = 'text'
          contentEditable= 'true'
          spellCheck = 'false'> $1</div>
        </li>
        <li>
          <div className = 'text'
          contentEditable= 'true'
          spellCheck = 'false'> $0</div>
        </li>
        <li>
          <div className = 'text'
          contentEditable= 'true'
          spellCheck = 'false'> $100</div>
        </li>

         <li>
          <div className = 'text'
          contentEditable= 'true'
          spellCheck = 'false'> $0</div>
        </li>

         <li>
          <div className = 'text'
          contentEditable= 'true'
          spellCheck = 'false'> $1000</div>
        </li>
      </ul>
      <button className = 'spin-buuton' onClick={this.startRotation}>SPIN</button>
    </div>
  )
};

}

export default App;