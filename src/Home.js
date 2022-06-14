import './App.css';
import React from 'react';
import Sitename from './components/Sitename.js'
import SearchBar from './components/SearchBar.js'
import ListBeer from './components/ListBeer.js'
import BigCard from './components/BigCard.js'
import axios from 'axios';

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
                <SearchBar />
                <ListBeer />   
            </div>
        )
    }
  }

export default Home;
