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
                                {product.ebc > 0 && product.ebc <= 10 ? <div> <img src="/img/glass-1.jpg" alt="imgbeer" /><br />  <strong> {'EBC: ' + product.ebc + '  (GLASS 1) '}</strong> </div> : null   }
                                {product.ebc > 10 && product.ebc <= 20 ? <div> <img src="/img/glass-2.jpg" alt="imgbeer" /><br />  <strong> {'EBC: ' + product.ebc + '  (GLASS 2) '}</strong> </div> : null   }
                                {product.ebc > 20 && product.ebc <= 30 ? <div> <img src="/img/glass-3.jpg" alt="imgbeer" /><br />  <strong> {'EBC: ' + product.ebc + '  (GLASS 3) '}</strong> </div> : null   }
                                {product.ebc > 30 && product.ebc <= 40 ? <div> <img src="/img/glass-4.jpg" alt="imgbeer" /><br />  <strong> {'EBC: ' + product.ebc + '  (GLASS 4) '}</strong> </div> : null   }
                                {product.ebc > 40 && product.ebc <= 50 ? <div> <img src="/img/glass-5.jpg" alt="imgbeer" /><br />  <strong> {'EBC: ' + product.ebc + '  (GLASS 5) '}</strong> </div> : null   }
                                {product.ebc > 50 && product.ebc <= 60 ? <div> <img src="/img/glass-6.jpg" alt="imgbeer" /><br />  <strong> {'EBC: ' + product.ebc + '  (GLASS 6) '}</strong> </div> : null   }
                                {product.ebc > 60 && product.ebc <= 70 ? <div> <img src="/img/glass-7.jpg" alt="imgbeer" /><br />  <strong> {'EBC: ' + product.ebc + '  (GLASS 7) '}</strong> </div> : null   }
                                {product.ebc > 70 && product.ebc <= 80 ? <div> <img src="/img/glass-8.jpg" alt="imgbeer" /><br />  <strong> {'EBC: ' + product.ebc + '  (GLASS 8) '}</strong> </div> : null   }
                                {product.ebc > 80 && product.ebc <= 90 ? <div> <img src="/img/glass-9.jpg" alt="imgbeer" /><br />  <strong> {'EBC: ' + product.ebc + '  (GLASS 9) '}</strong> </div> : null   }
                                {product.ebc > 90 && product.ebc <= 100 ? <div> <img src="/img/glass-10.jpg" alt="imgbeer" /><br />  <strong> {'EBC: ' + product.ebc + '  (GLASS 10) '}</strong> </div> : null   }
                                {product.ebc > 100 && product.ebc <= 110 ? <div> <img src="/img/glass-11.jpg" alt="imgbeer" /><br />  <strong> {'EBC: ' + product.ebc + '  (GLASS 11) '}</strong> </div> : null   }
                                {product.ebc > 110 && product.ebc <= 120 ? <div> <img src="/img/glass-12.jpg" alt="imgbeer" /><br />  <strong> {'EBC: ' + product.ebc + '  (GLASS 1) '}</strong> </div> : null   }
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default withRouter(BigCard);
