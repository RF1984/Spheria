import React from "react";
import { Link } from "react-router-dom";
import UserApi from "../../api/UserApi";

class Navbar extends React.Component {
    state = {
        user: "",
    }
    async componentDidMount() {
        const response = await UserApi.getCurrentUser()

        this.setState({
            user: response.data
        })
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-warning text-dark">
                <img src="abc.svg" width="90px" alt="logo" />
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
                             {/*changed the name here,the page was not working */}
                            <li className="nav-item">
                                <Link to="/tasks" className="nav-link">
                                    Tasks
                                </Link>
                            </li>
    
                            <li className="nav-item">
                                <Link to="/chat" className="nav-link">
                                    Link2
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/exchange" className="nav-link">
                                    Exchange toys
                                </Link>
                            </li>
                    </ul>
    
                
                    <div class="nav-item dropdown ml-auto">
                             <a class="nav-link" id="navbarDropdownMenuLink-4" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                             <i class="fa fa-child icon-7x"></i> {this.state.user.name}</a>
                            </div>
                            <div>
                                Balance: { this.state.user ? this.state.user.balance+" SEK": "Loading..." }
                            </div>
                    
    
                    <button className="btn btn-light my-2 my-sm-0" onClick={() => this.props.onLogout()}>Logout</button>
                </div>
            </nav>
        );
    }
    
}
export default Navbar;