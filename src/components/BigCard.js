import React from 'react';
import './BigCard.css'
import { withRouter } from '../index';
import axios from 'axios';


class BigCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
            status:'',
            value:'rondgray',
            value1:'rondgray',
            value2:'rondgray',
            value3:'rondgray',
            value4:'rondgray',
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
    if(this.state.status >= 0){
      this.setState({value :'rond'})
    }if(this.state.status >= 20){
        this.setState({value1 :'rond'})
    }if(this.state.status >= 40 ){
        this.setState({value2 :'rond'})
    }if(this.state.status >= 60){
        this.setState({value3 :'rond'})
    }else {
        this.setState({value4 :'rond'})
    }
        return (
            <div className="containerbigcard">
                        {this.state.products.map(product =>
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
                             <span>{product.abv} %</span>
                         </div>
                         <div>
                             <h2>Food Pairing</h2>
                            {product.food_pairing.map(pairing => 
                             <ul>
                                 <li>{pairing}</li>
                       
                             </ul>
                                )}
                         </div>
                         <div>
                             <h2>Ibu{this.state.status = product.ibu}</h2>
                            <div className="containerrond">
                                <div className={this.state.value}></div>
                                <div className={this.state.value1}></div>
                                <div className={this.state.value2}></div>
                                <div className={this.state.value3}></div>
                                <div className={this.state.value4}></div>
                            </div>
                         </div>
                    </div>
                    <div class="rightbigcardbeer">
                        <img src="https://via.placeholder.com/200x250" alt="imgbeer" />
                    </div>
                </div>
            </div>
        )}
        </div>
        );
    }
  }

export default withRouter(BigCard);
