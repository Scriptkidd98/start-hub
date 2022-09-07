import React, {Component} from "react";
import './myStyles.css';


class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render(){
        return(
            <div>
                <div className="header">
                    <div>
                        <span className="logo">START-HUB</span>
                    </div>
                </div>
            </div>
        );
    }
}
export default LandingPage;