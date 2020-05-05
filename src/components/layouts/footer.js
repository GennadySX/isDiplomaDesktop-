import React, {Component} from "react";
import {Link} from "react-router-dom";

class Footer extends Component {


    render() {
        return (
            <React.Fragment>
                <footer className="bg-white sticky-footer">
                    <div className="container my-auto">
                        <div className="text-center my-auto copyright"><span>Copyright © diploma-desktop 2019</span>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}



export default Footer;
