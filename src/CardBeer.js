import React from 'react';
import './CardBeer.css'
import axios from 'axios';


class CardBeer extends React.Component {
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
        return (
            <div className="top-container"> 
            {this.state.beers.map(beer =>
                <div className="cardbeer" key={beer.id}>
                    <h3 className="namebeer">{beer.name}</h3>
                    <img className="imgbeer" width="250" height="200" src={beer.image_url} alt="imgbeer" />
                </div>
          )}
          </div>
        );
    }
  }

export default CardBeer;
