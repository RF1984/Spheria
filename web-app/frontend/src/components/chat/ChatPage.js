
import React, { Component } from "react";

class ChatPage extends Component {
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
                        <br />
                        Try serch!
                    </p>
                    <div class="inner-form">
                    <div class="input-field first-wrap">
                        <input id="search" type="text" placeholder="Find your toy" />
                    </div>
                     
                    <div class="input-field third-wrap">
                        <button class="btn-search" type="button">Search</button>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                
                <br/>
                

                <img src="rocket.svg" class="rounded float-left" width="75" height="75"alt="logo"/>
                <img src="tea-pot.svg" class="rounded float-right" width="75" height="75"alt="logo"/>
                
                </center>
                </div>
                
            </div>
        );
    }
}

export default ChatPage;