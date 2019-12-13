import React, { Component } from "react";
import "./ExchangePage.css"

class ExchangePage extends Component {
    render() {
        return (
            <div>
                
                <img src="spinning-top.svg" class="rounded float-left" width="70" height="70"alt="logo"/>
                <img src="cart.svg" class="rounded float-right" width="70" height="70"alt="logo"/>
              
                <div>
                  <center>
                    <p className="big-p">
                    Had enough fun with your toy? </p>
                   
                  </center>

              <div className="alert alert-success shadow-lg" role="alert">
                <img src="birthday.svg" class="rounded float-right" width="120" alt="logo" />
                <center>
                <p className="alert-text">Exchange your used toy with another used toy, or donate your toy! </p>
                </center>
                <p class="mb-0">
                  <button className="create" type="button shadow-lg"
                    className="btn btn-warning btn-lg btn-block float-left"
                    style={buttonStyle}
                    data-toggle="modal"
                    data-target={"#taskFormModal"}> <i class="fa fa-share-square"></i> Share your toy
                   </button>
                </p>
              </div>
                
                
                  <div class="container">
    <div class="row">
        <div class="col-sm-3">
            <div class="card bg-warning shadow">              
                <img class="card-img-top img-fluid" src="accessories.jpg" alt="Card image cap"/>
                <div class="card-block">
                    <h4 class="card-title">Small Wooden Plane</h4>
                    <p class="card-text">plane made out of wood. (doesn't really fly)</p>
                    <p class="card-text"><small class="text-muted">Added by <strong>Dejan&nbsp;</strong>15 minutes ago</small>&nbsp;<i class="fa fa-comments"></i></p>
                </div>
            </div>
            <br></br>
            <img src="toy.svg" class="rounded" width="230" height="100"alt="logo"/>
          </div>

        <div class="col-sm-3">
            <div class="card bg-warning shadow">
            <img class="card-img-top img-fluid" src="wall-e.jpg" alt="Card image cap"/>
                <div class="card-block">
                    <h4 class="card-title">Wall-e</h4>
                    <p class="card-text">Small Wall-E action figure</p>
                    <p class="card-text"><small class="text-muted">Added by <strong>Ebraim&nbsp;</strong>3 hours ago</small>&nbsp;<i class="fa fa-comments"></i></p>
                </div>
            </div>
        </div>

        <div class="col-sm-3">
            <div class="card bg-warning shadow">
                <img class="card-img-top img-fluid" src="unicorn.jpg" alt="Card image cap"/>
                <div class="card-block">
                    <h4 class="card-title">Purple Unicorn</h4>
                    <p class="card-text">really nice toy, in very good condition.</p>
                    <p class="card-text"><small class="text-muted">Added by <strong>Smrity&nbsp;</strong>8 hours ago</small>&nbsp;<i class="fa fa-comments"></i></p>
                </div>
            </div>
            <img src="xylophone.svg" class="rounded float-right " width="230" height="100"alt="logo"/>
        </div>
        
        <div class="col-sm-3">
            <div class="card bg-warning shadow">
            <img class="card-img-top img-fluid" src="blue-car.jpg" alt="Card image cap"/>
                <div class="card-block">
                    <h4 class="card-title">Blue Car - Volkswagen</h4>
                    <p class="card-text">It's good as new, just a flat tire</p>
                    <p class="card-text"><small class="text-muted">Added by <strong>Rafael&nbsp;</strong>16 hours ago</small>&nbsp;<i class="fa fa-comments"></i></p>
                </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="card bg-warning shadow">
            <img class="card-img-top img-fluid" src="tinker.jpg" alt="Card image cap"/>
                <div class="card-block">
                    <h4 class="card-title">Tinker Bell</h4>
                    <p class="card-text">Tinker bell small action figure</p>
                    <p class="card-text"><small class="text-muted">Added by <strong>Daniela&nbsp;</strong>1 day ago</small>&nbsp;<i class="fa fa-comments"></i></p>
                </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="card bg-warning shadow">
            <img class="card-img-top img-fluid" src="girl.jpg" alt="Card image cap"/>
                <div class="card-block">
                    <h4 class="card-title">Pyssla</h4>
                    <p class="card-text">Pyssla board with more than 300 pins</p>
                    <p class="card-text"><small class="text-muted">Added by <strong>Barbara&nbsp;</strong>1 day ago</small>&nbsp;<i class="fa fa-comments"></i></p>
                </div>
            </div>
            <br></br>
            <img src="tea-pot.svg" class="rounded float" width="230" height="100"alt="logo"/>

        </div>
        <div class="col-sm-3">
            <div class="card bg-warning shadow">
            <img class="card-img-top img-fluid" src="snowman.jpg" alt="Card image cap"/>
                <div class="card-block">
                <h4 class="card-title">Snowman</h4>
                    <p class="card-text">Snowman with light inside</p>
                    <p class="card-text"><small class="text-muted">Added by <strong>Nisha&nbsp;</strong>2 days ago</small>&nbsp;<i class="fa fa-comments"></i></p>
                   
                </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="card bg-warning shadow">
                <img class="card-img-top img-fluid" src="childhood.jpg" alt="Card image cap"/>
                <div class="card-block">
                    <h4 class="card-title">Spinner</h4>
                    <p class="card-text"></p>
                    <p class="card-text"><small class="text-muted">Added by <strong>Dejan&nbsp;</strong>4 days ago</small>&nbsp;<i class="fa fa-comments"></i></p>
                </div>
            </div>
            <br></br>
            <img src="boost.svg" class="rounded float" width="250" height="100"alt="logo"/>
        </div>
    </div>
</div>

                  </div>
                  </div>
                  
         );
    }
}

const buttonStyle = {
  marginRight: '1px',
  marginBottom: '20px',
}
export default ExchangePage;