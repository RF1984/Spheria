import React, { Component } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Auth from "../../services/Auth";
import Footer from '../layout/Footer';


class LoginPage extends Component {
    async login(loginData) {
        const loginSuccess = await Auth.login(loginData);
        if (!loginSuccess) {
            alert("Invalid credentials");
        }
    }

    async register(registrationData) {
        const registerSuccess = await Auth.register(registrationData);
        if (!registerSuccess) {
            alert("Couldn't register check credentials and try again");
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-6 " style={{color: "white"}}>
                            <h1>FoodHub/<small>forum</small></h1>
                            <p><br/></p>
                    
                            <p>Welcome too <strong>FoodHub</strong>! Here you will be able to:</p>
                                <ul>
                                    <li>Share Food! <br/> (recipes, restaurants, experiences...)</li>
                                    <li>Get/Give Feedback through comments</li>
                                    <li>Interact with other users</li>
                                </ul>
                                <p><br/></p>
                                <img src ={"/images/logo_transparent.png"} width="300" height="300"/>
                                <p></p>
                                
                            <p>Create an account and start now!</p>    

                        </div>

                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-12  strong-shadow">
                                    <LoginForm onSubmit={this.login} />
                                </div>

                                <div className="col-12 mt-4">
                                    <RegisterForm onSubmit={this.register}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default LoginPage;