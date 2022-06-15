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
            cart: { id: "", name: "", desc: "", quantity: 1, prix: null }
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
            })

    };

    addtocart = function (pname, pdesc, pquantity) {
        axios.post(`http://localhost:3030/cart`, {
            name: pname,
            desc: pdesc,
            quantity: pquantity
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    handleSubmit = function (pid, pname, pdesc, pquantity) {
        alert("tu as ajouté au panier" + this.product.name)
    }

    clickMe = (event, name, desc, quantity, image, prix) => {
        axios.post(`http://localhost:3030/cart`, {
            name: name,
            desc: desc,
            quantity: quantity,
            image: image,
            prix: prix,

        })
            .then(res => {
                console.log(res);
                console.log(res.data);
        })
        alert(name + " Ajouté au panier ")
    };

    render() {
        return (
            <div className="containerbigcard">
                {this.state.products.map((product, index) =>
                    <div className="bigcarbeer">
                        <div className="topbigcardbeer">
                            {product.image_url ? <img className="imgbigcardbeer" src={product.image_url} alt="imgbeer" /> : <img className="imgbigcardbeer" src="https://via.placeholder.com/200x250" alt="imgbeer"/>}

                            <div className="sectiontext" key={product.id}>
                                <h1 className="h1secondarypage">{product.name}</h1>
                                <p className="psecondarypage">{product.description}</p>
                            </div>
                        </div>
                        <div className="botbigcardbeer">
                            <div className="leftbigcardbeer">
                                <div className="alc">
                                    <span>Alc.</span>
                                    <span className='spanbold'>{' ' + product.abv} %</span>
                                </div>
                                <div>
                                    <h2 className='h2bigcard'>Food Pairing</h2>
                                    {product.food_pairing.map((pairing, index) =>
                                        <ul>
                                            <li className='libigcard'>{pairing}</li>

                                        </ul>
                                    )}
                                </div>
                                <div>
                                    <h2 className='h2bigcard' >Ibu{' ' + product.ibu}</h2>
                                    <div className="containerrond">
                                        {product.ibu > 0 ? <div className="rond"></div> : <div className="rondgray"></div>}
                                        {product.ibu > 20 ? <div className="rond"></div> : <div className="rondgray"></div>}
                                        {product.ibu > 40 ? <div className="rond"></div> : <div className="rondgray"></div>}
                                        {product.ibu > 60 ? <div className="rond"></div> : <div className="rondgray"></div>}
                                        {product.ibu > 80 ? <div className="rond"></div> : <div className="rondgray"></div>}
                                    </div>
                                </div>
                            </div>
                            <div className="rightbigcardbeer">
                                {product.ebc == null ? <div> <img className='imgGlass' src="https://via.placeholder.com/200x250" alt="imgbeer" /><br />  <strong className='strongbold'>Ne contient pas EBC</strong> </div> : null}
                                {product.ebc > 0 && product.ebc <= 10 ? <div> <img className='imgGlass' src="/img/glass-1.jpg" alt="imgbeer" /><br />  <strong className='strongbold'> {'EBC: ' + product.ebc + '  (GLASS 1) '}</strong> </div> : null}
                                {product.ebc > 10 && product.ebc <= 20 ? <div> <img className='imgGlass' src="/img/glass-2.jpg" alt="imgbeer" /><br />  <strong className='strongbold'> {'EBC: ' + product.ebc + '  (GLASS 2) '}</strong> </div> : null}
                                {product.ebc > 20 && product.ebc <= 30 ? <div> <img className='imgGlass' src="/img/glass-3.jpg" alt="imgbeer" /><br />  <strong className='strongbold'> {'EBC: ' + product.ebc + '  (GLASS 3) '}</strong> </div> : null}
                                {product.ebc > 30 && product.ebc <= 40 ? <div> <img className='imgGlass' src="/img/glass-4.jpg" alt="imgbeer" /><br />  <strong className='strongbold'> {'EBC: ' + product.ebc + '  (GLASS 4) '}</strong> </div> : null}
                                {product.ebc > 40 && product.ebc <= 50 ? <div> <img className='imgGlass' src="/img/glass-5.jpg" alt="imgbeer" /><br />  <strong className='strongbold'> {'EBC: ' + product.ebc + '  (GLASS 5) '}</strong> </div> : null}
                                {product.ebc > 50 && product.ebc <= 60 ? <div> <img className='imgGlass' src="/img/glass-6.jpg" alt="imgbeer" /><br />  <strong className='strongbold'> {'EBC: ' + product.ebc + '  (GLASS 6) '}</strong> </div> : null}
                                {product.ebc > 60 && product.ebc <= 70 ? <div> <img className='imgGlass' src="/img/glass-7.jpg" alt="imgbeer" /><br />  <strong className='strongbold'> {'EBC: ' + product.ebc + '  (GLASS 7) '}</strong> </div> : null}
                                {product.ebc > 70 && product.ebc <= 80 ? <div> <img className='imgGlass' src="/img/glass-8.jpg" alt="imgbeer" /><br />  <strong className='strongbold'> {'EBC: ' + product.ebc + '  (GLASS 8) '}</strong> </div> : null}
                                {product.ebc > 80 && product.ebc <= 90 ? <div> <img className='imgGlass' src="/img/glass-9.jpg" alt="imgbeer" /><br />  <strong className='strongbold'> {'EBC: ' + product.ebc + '  (GLASS 9) '}</strong> </div> : null}
                                {product.ebc > 90 && product.ebc <= 100 ? <div> <img className='imgGlass' src="/img/glass-10.jpg" alt="imgbeer" /><br />  <strong className='strongbold'> {'EBC: ' + product.ebc + '  (GLASS 10) '}</strong> </div> : null}
                                {product.ebc > 100 && product.ebc <= 110 ? <div> <img className='imgGlass' src="/img/glass-11.jpg" alt="imgbeer" /><br />  <strong className='strongbold'> {'EBC: ' + product.ebc + '  (GLASS 11) '}</strong> </div> : null}
                                {product.ebc > 110 ? <div> <img className='imgGlass' src="/img/glass-12.jpg" alt="imgbeer" /><br />  <strong className='strongbold'> {'EBC: ' + product.ebc + '  (GLASS 12) '}</strong> </div> : null}

                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-danger" onClick={(e) => {
                                this.clickMe(e, product.name, product.description, 1, product.image_url, product.abv );
                            }}>Ajouter {product.name} au panier</button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default withRouter(BigCard);
