
import React, { Component } from "react";
import Search from "./Search";
import UserApi from "../../api/UserApi";

class HomePage extends Component {
    state = {
        user: null,
    }

    async componentDidMount(){
        window.userApi = UserApi
       const response = await UserApi.getCurrentUser();

       this.setState({
           user: response.data,
       })
       
    }

    render() {
        return (
            <div>
                <br/>
                <img src="spinning-top.svg" class="rounded float-left" width="90" height="90"alt="logo"/>
                <img src="parenthood.svg" class="rounded float-right" width="90" height="90"alt="logo"/>
                <p>
                    Balance: { this.state.user ? this.state.user.balance : "Loading..." }
                </p>
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