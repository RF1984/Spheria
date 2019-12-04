import React from "react";
import { Link } from "react-router-dom";
import UserApi from "../../api/UserApi";

class Navbar extends React.Component {
    state = {
        username: "",
    }
    async componentDidMount() {
        const response = await UserApi.getCurrentUser()

        this.setState({
            username: response.data.name
        })
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-warning text-dark">
                <img src="logo60.png" alt="logo"/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
    
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
    
                            <li className="nav-item">
                                <Link to="/posts" className="nav-link">
                                    Link1
                                </Link>
                            </li>
    
                            <li className="nav-item">
                                <Link to="/chat" className="nav-link">
                                    Link2
                                </Link>
                            </li>
                    </ul>
    
                
                    <div class="nav-item dropdown ml-auto">
                             <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                             <i class="fas fa-user"></i> {this.state.username} </a>
                            </div>
                    
    
                    <button className="btn btn-light my-2 my-sm-0" onClick={() => this.props.onLogout()}>Logout</button>
                </div>
            </nav>
        );
    }
    
}

export default Navbar;