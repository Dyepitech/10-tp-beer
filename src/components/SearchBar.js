import React from 'react';
import './SearchBar.css'
import { Link } from 'react-router-dom';
import { withRouter } from '../index';


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
            <input className="inputsearch"  value={this.state.msg} onKeyPress={evt => this.handleKeyPress(evt)} onChange={evt => this.updateInputValue(evt)} placeholder="Hoppy, Malt, Angry, New..."  type="text" />
            <Link className="link" to={ this.state.finalurl +  this.state.msg}><button className="buttonsearch" >RECHERCHER</button></Link>
        </div>
      );
    }

    handleKeyPress = (event) => {
      const val = event.target.value;
      if(event.key === 'Enter'){
      this.props.router.navigate('/recherche/' + this.state.msg)
      }
    }
  

    updateInputValue(evt){
      const val = evt.target.value;
      this.setState({
        msg:val
      });
    }
  }

export default withRouter(Searchbar);

