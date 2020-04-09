import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


import Header from "./header";

import Footer from "./footer";

const LayoutContent = (props) => {
    return <React.Fragment>
        <Header />
                {props.children}
        <Footer />
    </React.Fragment>
}



class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
                 <LayoutContent {...this.props} />
        );
    }
}


export default withRouter((Layout));
