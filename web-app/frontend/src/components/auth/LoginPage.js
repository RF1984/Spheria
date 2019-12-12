import React, { Component } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Auth from "../../services/Auth";


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
                        <div className="col-md-6 ">
                            <p className="big-p text-center">Welcome to the world of toys!</p>
                            <div class="embed-responsive embed-responsive-16by9">
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/qIZ2lua9aQA" allowfullscreen></iframe>
                            </div>

                            <div className="card-body text-dark bg-warning mb-5">
                                <p className="login">I hear I forget, I see I remember, I do I understand.</p>
                                <p className="login">The concept that lays out in this quote is that children learn best by taking an active role in their learning.
                                  Learning can be fun. A "fun" style of learning is a great way to introduce new subjects and new material to children.
                                  Our web application has aimed to teach the children of age group 5 - 13 years some basics about value of money.
                                </p>
                                <p className="login"> The purpose here is to educate kids about the value of money and currency by comparing the value of their favorite toy in
                                different countries in the world.
                                The point is not to prevent the kid from getting the wanted toy, but to give them some
                                understanding of money value and to prepare them for their future.
                                </p>
                            </div>
                            
                        </div>
                        <div className="col-md-6">
                            <p></p>
                            <div className="row">
                            
                            <img src="robot.svg" class="rounded mx-auto d-block" width="100" height="100"alt="logo"/>
                            
                            
                            
                            
                
                                <div className="col-12 strong-shadow">
                                   
                                    <LoginForm onSubmit={this.login} />
                                    
                                </div>

                                <div className="col-12 mt-4">
                                    <RegisterForm onSubmit={this.register }/>
                                </div>
                                <img src="rocket.svg" class="rounded float-left" width="60" height="70"alt="logo"/>
                                <img src="siblings.svg" class="rounded mx-auto d-block" width="140" height="150"alt="logo"/>
                                <img src="aeroplaneLeft.svg" class="rounded float-right" width="75" height="75"alt="logo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;