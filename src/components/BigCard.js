import React from 'react';
import './BigCard.css'
import { withRouter } from '../index';
import axios from 'axios';


class BigCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            status: '',
            value: 'rondgray',
            value1: 'rondgray',
            value2: 'rondgray',
            value3: 'rondgray',
            value4: 'rondgray',
        }
    }

    componentDidMount() {
        axios.get('https://api.punkapi.com/v2/beers/' + this.props.router.params.id, {
            params: {
                id: this.props.router.params.id
            }
        })
            .then(response => {
                this.setState({
                    products: response.data
                })
                console.log(response.data);
                console.log(this.state.products.ibu)
            })

    }

    render() {
        return (
            <div className="containerbigcard">
                {this.state.products.map((product, index) =>
                    <div className="bigcarbeer">
                        <div className="topbigcardbeer">
                            <img className="imgbigcardbeer" src={product.image_url} alt="imgbeer" class="imgbigcardbeer" />
                            <div className="sectiontext" key={product.id}>
                                <h1 className="h1secondarypage">{product.name}</h1>
                                <p className="psecondarypage">{product.description}</p>
                            </div>
                        </div>
                        <div className="botbigcardbeer">
                            <div className="leftbigcardbeer">
                                <div className="alc">
                                    <span>Alc.</span>
                                    <span>{' ' + product.abv} %</span>
                                </div>
                                <div>
                                    <h2>Food Pairing</h2>
                                    {product.food_pairing.map((pairing, index) =>
                                        <ul>
                                            <li>{pairing}</li>

                                        </ul>
                                    )}
                                </div>
                                <div>
                                    <h2>Ibu{' ' + product.ibu}</h2>
                                    <div className="containerrond">
                                        {product.ibu > 0 ? <div className="rond"></div> : <div className="rondgray"></div>}
                                        {product.ibu > 20 ? <div className="rond"></div> : <div className="rondgray"></div>}
                                        {product.ibu > 40 ? <div className="rond"></div> : <div className="rondgray"></div>}
                                        {product.ibu > 60 ? <div className="rond"></div> : <div className="rondgray"></div>}
                                        {product.ibu > 80 ? <div className="rond"></div> : <div className="rondgray"></div>}
                                    </div>
                                </div>
                            </div>
                            <div class="rightbigcardbeer">
                                <img src="https://via.placeholder.com/200x250" alt="imgbeer" /><br />
                                <strong> {'EBC: ' + product.ebc + '  (GLASS) '}</strong>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default withRouter(BigCard);
