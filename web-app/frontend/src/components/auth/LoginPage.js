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
                            <p className="big-p text-center">Wellcome to the world of toys!</p>
                            <div class="embed-responsive embed-responsive-16by9">
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/qIZ2lua9aQA" allowfullscreen></iframe>
                            </div>
                        
                            <div class="card-body text-dark bg-warning mb-3 ">
                            <p>Lorem ipsum dolor amet tumeric food truck vegan 90's raclette pok pok. Paleo hexagon gentrify 
                            gluten-free blue bottle polaroid man braid la croix authentic bicycle rights. Meditation chambray blue bottle, 
                            single-origi coffee fingerstache disrupt lomo af direct trade
                            Street art vice church-key cornhole health goth, readymade asymmetrical. Fanny pack semiotics fixie blog 
                            tousled la croix. Poke salvia tote bag forage you probably haven't heard of them. Aesthetic hell of kogi 
                            bicycle rights. Meditation bicycle rights.
                            Lyft celiac affogato, woke pabst everyday carry coloring book shoreditch post-ironic edison bulb biodiesel 
                            artisan skateboard. Listicle blog next level kinfolk, sartorial art party cliche ramps. 
                            Skateboard live-edge flexitarian bespoke unicorn kombucha paleo, church-key brunch single-origin coffee. 
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
                                <img src="aeroplane.svg" class="rounded float-left" width="75" height="75"alt="logo"/>
                                <img src="baby.svg" class="rounded mx-auto d-block" width="110" height="110"alt="logo"/>
                                <img src="rocket.svg" class="rounded float-right" width="75" height="75"alt="logo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;