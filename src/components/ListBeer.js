import React from 'react';
import './ListBeer.css'
import CardBeer from './CardBeer.js'
// import Sitename from './Sitename.js'
// import Sitename from './Sitename.js'


class Listbeer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="containerlistbeer">
                <CardBeer/>
            </div>
      );
    }
  }

export default Listbeer;
