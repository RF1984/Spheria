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
                    Had enough fun with your toy? </p>
                    <p className="big-p">
                    Exchange your used toy with another used toy</p>
                  </center>
                
                
                  <div class="container">
  
  
                  <div class="card-columns">
                      <div class="card bg-warning ">
                      <img src="coordination.svg" class="rounded float-right " width="50" height="50"alt="logo"></img>
                      <div class="card-block">
                      <h4 class="card-title">For you, that want to check what is available </h4>
                      <p class="card-text"> </p>
                      <button type="button" class="btn btn-success"> See available toys</button>
                      
                      
                      </div>
                  </div>
                  
 
                  <div class="card-p-3">
                    <div class="card bg-warning">
                      <img src="picture.svg" class="rounded float-right " width="50" height="50"alt="logo"></img>
                        <div class="card-block">
                            <h4 class="card-title">For you, that want to exchange a toy </h4>
                            <p class="card-text"> </p>

                            <button type="button" class="btn btn-success">Take a picture of your toy</button>
                      
                        </div>
                    </div>
                  </div>
                  

                  <div class="card bg-warning">
                    <img class="card-img-top img-fluid" src="photo-of-a-girl-playing-with-the-camera-860538.jpg"
                    alt="Card image cap"></img>

                  </div>

                  <div class="card bg-warning">
                    <img class="card-img-top img-fluid" src="boy-wearing-white-collared-button-up-shirt-holding-red-1261183.jpg"
                    alt="Card image cap"></img>
                  </div>
                  <div class="card bg-warning">
                    <div class="card-block">
                      <h4 class="card-title">Feel free to explore</h4>
                      <p class="card-text"></p>
                      <p class="card-text"><small class="text-muted"></small></p>
                    </div>
                  </div>
                  <div class="card">
                    <img class="card-img img-fluid" src="multi-colored-pen-3068579.jpg" alt="Card image"></img>
                  </div>
                  <div class="card">
                    <img class="card-img img-fluid" src="decor-decoration-display-doll-house-191360.jpg" alt="Card image"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
         );
    }
}
export default ExchangePage;