import './App.css';
import React from 'react';
import Sitename from './Sitename.js'
import SearchBar from './SearchBar.js'
import ListBeer from './ListBeer.js'
import BigCard from './BigCard.js'
import axios from 'axios';

class App extends React.Component {
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

export default App;
