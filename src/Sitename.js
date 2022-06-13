import React from 'react';
import './Sitename.css'


class Sitename extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    
    render() {
      return <h1 className="h1mainpage">{this.props.name}</h1>;
    }
  }

export default Sitename;
