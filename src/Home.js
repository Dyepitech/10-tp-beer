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

    componentDidMount() {
        axios.get('https://api.punkapi.com/v2/beers').then(response => {
          this.setState({
                beers: response.data,
            });
            console.log(response.data)
        });
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
