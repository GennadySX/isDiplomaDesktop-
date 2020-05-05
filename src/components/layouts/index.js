import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';


import Header from "./header";

import Footer from "./footer";
import Sidebar from "./sidebar";
import TopSidebar from "./top_sidebar";

const LayoutContent = (props) => {
    return <React.Fragment>
            <Header/>
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <Sidebar />
                        <TopSidebar />
                        {props.children}
                    </div>
                </div>
                <Footer/>
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
