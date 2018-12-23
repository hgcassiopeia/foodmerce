import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'

import FoodItem from './components/foods/FoodItem'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div>
          <FoodItem/>
        </div>
        <Footer creator="YuMe"/>
      </div>
    )
  }
}

export default App;
