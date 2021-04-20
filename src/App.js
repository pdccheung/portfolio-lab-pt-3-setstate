import React, { Component } from 'react';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import ContactMe from './components/ContactMe/ContactMe';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';




class App extends Component {
  state = {
    recommendation: "Philip is the best hire ever, he has the potential to become the next CEO of Google - Sundar Pichai"
  }

  updateRecHandler = () => {
    this.setState({
      recommendation: "I really wished we had hired Philip first; our plan was to have him oversee the entire Microsoft operation - Satya Nadella"
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Philip's Unreal Portfolio 
         </header>
      <Skills javascript={"JavaScript"} />
      <ContactMe email={"philipintech@gmail.com"} />
      <AboutMe linkedinURL={"https://www.linkedin.com/in/philipdccheung/"}
      imgURL={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"}/>
      <Portfolio quote={this.state.recommendation}
      anotherQuote = {this.updateRecHandler}/>

      
      
      </div>
    );
  }
}

export default App;