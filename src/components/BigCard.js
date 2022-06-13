import React from 'react';
import './BigCard.css'
import axios from 'axios';


class BigCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
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
            <div className="containerbigcard">
                <div className="bigcarbeer">
                    <div className="topbigcardbeer">
                        <img className="imgbigcardbeer" src="https://via.placeholder.com/200x250" alt="imgbeer" class="imgbigcardbeer" />
                        <div className="sectiontext">
                            <h1 className="h1secondarypage"></h1>
                            <p className="psecondarypage">Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Vitae tempora expedita, voluptatibus sunt veniam minima 
                                similique modi id sit distinctio consequatur 
                                accusantium esse, aliquid cupiditate excepturi adipisci cum quos dolorum.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam vero non aliquam et aut sit quisquam perspiciatis, tempora corporis sequi esse iste, eius consequatur, quam id nobis minima. Quam, autem?
                            </p>
                        </div>
                    
                </div>
                <div className="botbigcardbeer">
                    <div className="leftbigcardbeer">
                         <div className="alc">
                             <span>Alc.</span>
                             <span>X.x %</span>
                         </div>
                         <div>
                             <h2>Food Pairing</h2>
                             <ul>
                                 <li>test1</li>
                                 <li>test2</li>
                                 <li>test3</li>
                                 <li>test4</li>
                             </ul>
                         </div>
                         <div>
                             <h2>Ibu xxxx</h2>
                            <div className="containerrond">
                                <div className="rond"></div>
                                <div className="rond"></div>
                                <div className="rond"></div>
                                <div className="rondgray"></div>
                                <div className="rondgray"></div>
                            </div>
                         </div>
                    </div>
                    <div class="rightbigcardbeer">
                        <img src="https://via.placeholder.com/200x250" alt="imgbeer" />
                    </div>
                </div>
            </div>
        </div>
        );
    }
  }

export default BigCard;
