import React from 'react';
import Sitename from './Sitename'
import './CartPage.css';

class CartPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          beers: [{}],
          loading: false
        };
      }

    render() {
        return(
            <div className="container">
            <Sitename name="Panier !"/>
                <div className="content-cart d-flex justify-content-center align-items-center">
                    <div>
                        <ul>
                            <li>
                                Item 1
                            </li>
                            <li>
                                Item 1
                            </li>
                            <li>
                                Item 1
                            </li>
                            <li>
                                Item 1
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
                
        )
    }
  }

export default CartPage;
