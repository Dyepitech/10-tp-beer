import React from 'react';
import './SearchBar.css'
import { Link } from 'react-router-dom';


class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          finalurl:'/recherche/',
          msg:'',
        };
       
    }

    render() {
        return (
        <div className="containerinput">
            <input className="inputsearch" value={this.state.msg} onChange={evt => this.updateInputValue(evt)} placeholder="Hoppy, Malt, Angry, New..."  type="text" />
            <Link to={ this.state.finalurl +  this.state.msg}><button className="buttonsearch" >RECHERCHER</button></Link>
        </div>
      );
    }
    updateInputValue(evt){
      const val = evt.target.value;
      this.setState({
        msg:val
      });
    }
  }

export default Searchbar;

