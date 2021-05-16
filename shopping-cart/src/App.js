import React, {Component} from 'react';
import './App.css';
import Basket from './components/Basket';
import Filter from './components/Filter';
import Products from './components/Products';
import {Provider} from 'react-redux';
import store from './store';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <h1>Shoppers Stop</h1>
          <hr />
          <div className="row">
            <div className="col-md-9">
              <Filter />
              <hr />
              <Products />
            </div>
            <div className="col-md-3">
              <Basket />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}


export default App;
