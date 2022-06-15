import './App.css';
import React from 'react';
import Sitename from './components/Sitename.js'
import SearchBar from './components/SearchBar.js'
import ListBeer from './components/ListBeer.js'
import Cart from './components/Cart'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          beers: [{}],
          loading: false
        };
      }

    render() {
        return(
            <div className="test">
                <Sitename name="Beer App !"/>
                <Cart />
                <SearchBar />
                <ListBeer />   
            </div>
        )
    }
  }

export default Home;
