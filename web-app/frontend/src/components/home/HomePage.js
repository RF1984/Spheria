import React, { Component } from "react";
import '../components.css';

class HomePage extends Component {
    render() {
        return (
            <div className="card-hp">
                <div className="card-bodyhp">
                <img src ={"/images/logo_transparent.png"} width="500" height="500"/>
                </div>
            </div>
        );
    }
}

export default HomePage;