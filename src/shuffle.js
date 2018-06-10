import React, { Component } from "react";
import Heroine from "./components/Heroine";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import heroines from "./heroines.json";
import "./App.css";


class App extends Component {
  // Setting this.state.heroine to the heroines array
  state = {
    heroines
  };

  shuffleHeroine = id => {
    const heroines = this.state.heroines; 
    
    let i = heroines.length -1;
    for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i +1));
        const temp = heroines[i]
        heroines[i] = heroines[j]
        heroines[j] = temp;
    }
    return heroines
};

//everytime the page loads, this will update 
  render() {
      this.shuffleHeroine();
    return (
      <Wrapper>
      <Navbar>
          <ul>
            <li class="brand">Kelsey Gasser Games Inc</li>
            <li class>Click an image to begin!</li>
            <li> Score: 0 | Top Score: 0 </li>
          </ul>
        </Navbar>
        <Header>
          <h1>Heroine Memory Game!</h1>
          <h2>Not *THAT* kind of heroine. Click an image to earn points, but be careful not to click on any more than once!</h2>
        </Header>
        {this.state.heroines.map(heroine => (
          <Heroine
            id={heroine.id}
            key={heroine.id}
            name={heroine.name}
            image={heroine.image}
          />        ))}
      <Footer>
      </Footer>
      </Wrapper>
    );
  }
}

export default App;
