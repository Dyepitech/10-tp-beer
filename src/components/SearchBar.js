import React from 'react';
import './SearchBar.css'


class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
        <div className="containerinput">
            <input className="inputsearch" placeholder="Hoppy, Malt, Angry, New..." type="text" />
                <button className="buttonsearch">RECHERCHER</button>
        </div>
      );
    }
  }

export default Searchbar;
