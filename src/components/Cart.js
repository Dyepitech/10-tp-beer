import React from 'react';
import './Cart.css'
import axios from 'axios';
import { withRouter } from '../index';


class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
      }

    componentDidMount() {

    }


    render() {
        return (
            <div className="card-container"> 
                <i className="fa fa-shopping-cart cart-pos" aria-hidden="true"><p>Panier</p></i>
          </div>
        );
    }
  }

export default  withRouter(Cart);
