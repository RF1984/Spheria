
import React, { Component } from "react";
import Search from "./Search";

class HomePage extends Component {
    render() {
        return (
            <div>
                <br/>
                <img src="spinning-top.svg" class="rounded float-left" width="90" height="90"alt="logo"/>
                <img src="parenthood.svg" class="rounded float-right" width="90" height="90"alt="logo"/>
                <p></p>
                <div>
                <center>       
                    <p className="big-p">
                        Here you can find your new toy!
                    </p>
                    <div>
                        <Search/>
                    </div>
                </center>
                </div>
                
            </div>
        );
    }
}

export default HomePage;