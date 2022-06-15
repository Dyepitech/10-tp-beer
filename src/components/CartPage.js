import React from 'react';
import Sitename from './Sitename'
import './CartPage.css';
import axios from 'axios';

class CartPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          beers: [{}],
          loading: false,
          carts: [],
        };
      }

      componentDidMount(){
        axios.get('http://localhost:3030/cart').then(reponse => {
            this.setState({
              carts : reponse.data  
            })
            console.log(this.state.carts)
        })

        
      }

    render() {
        return(
            <div className="container">
            <Sitename name="Panier !"/>
                <div className="cartpanier">
                    <div className='div'>
                        <div className="topbigcard">
                            {this.state.carts.map((cart, index) => 
                                <div className="topbigcardbeer">
                                    <div className='divimage'>
                                        {cart.image? <img className="imgbigcard" src={cart.image} alt="imgbeer" /> : <img className="imgbigcardbeer" src="https://via.placeholder.com/200x250" alt="imgbeer"/>}
                                    </div>
                                    <div className="sectiontext">
                                        <h1 className="h1secondarypage">{cart.name}</h1>
                                        <p className="psecondarypage">{cart.desc}</p>
                                        <h3>{cart.prix}€</h3>
                                    </div>
                                </div>
                            )}
                        </div> 
                    </div>
                </div>
            </div>
                
        )
    }
  }

export default CartPage;
