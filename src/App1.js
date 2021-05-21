import React, { Component } from 'react';
// import Table from './components/Table.js';
import './App.css';
import ListSearchResults from './components/ListSearchResults';
import SearchForm from './components/SearchForms';
import searchWeather from './services/SearchWeatherService';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          data:[],
          searchTerm:[],
          searchDate:[]
      }
  }  
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;