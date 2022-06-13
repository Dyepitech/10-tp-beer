import React from 'react';
import './CardBeer.css'
import axios from 'axios';
import slugify from 'slugify'
import { Link } from 'react-router-dom';


class CardBeer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          beers: [],
          loading: false,
          finalURL:'/beer/',

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
        return (
            <div className="top-container"> 
            {this.state.beers.map(beer =>
                <div className="cardbeer" key={beer.id}>
                    <h3 className="namebeer">{beer.name}</h3>
                    {}
                    <Link to={ this.state.finalURL + beer.id  + '/' + slugify(beer.name,'-')}><img className="imgbeer" width="250" height="200" src={beer.image_url} alt="imgbeer" /></Link>
                </div>
          )}
          </div>
        );
    }
  }

export default CardBeer;
