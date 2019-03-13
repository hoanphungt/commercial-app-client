import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import AdsListContainer from './components/AdsListContainer';
import AdDetailsContainer from './components/AdDetailsContainer';
import './App.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <header className="App-header">
            <h3>MyBay - #1 Online Buying-And-Selling Marketplace</h3>
          </header>
          <main>
            <Route path="/ads" exact component={AdsListContainer} />
            <Route path="/ads/:id" exact component={AdDetailsContainer} />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;