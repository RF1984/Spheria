import React, { Component } from "react";

const buttonStyle = {
    marginRight: '1px',
    marginBottom: '1px',
 }
class ExchangePage extends Component {
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
                        Had enough fun with your toy? <br/> exchange your used toy with another used toy!
                    </p>
                </center>
                </div>
                <div>
                <button type="button"
                           className="btn btn-outline-secondary btn-lg"
                            style={buttonStyle}
                            data-toggle="modal"
                                data-target={"#taskFormModal"}> <i className="fa fa-plus"></i>
                                </button>
                                <button type="submit" disabled
                                    className="btn btn-danger btn-lg"
                                    style={buttonStyle}> Add a picture of your toy
                                 </button>
                </div>
                <div>
                <button type="button"
                           className="btn btn-outline-secondary btn-lg"
                            style={buttonStyle}
                            data-toggle="modal"
                                data-target={"#taskFormModal"}> <i className="fa fa-plus"></i>
                                </button>
                                <button type="submit" disabled
                                    className="btn btn-danger btn-lg"
                                    style={buttonStyle}> See available toys
                                 </button>
                </div>

            
            </div>
            
        );
    }
}
export default ExchangePage;