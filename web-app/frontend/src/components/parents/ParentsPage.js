
import React, { Component } from "react";
import './ParentsPage.css';
import UserApi from "../../api/UserApi";

/**
 * The component represents the parents page. In here the user can set balance, 
 * set automatically allowance that will be added every month (not functional yet)
 * See purchase toys by the child (not functional yet)
 */
class ParentsPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      newBalance: "",
    };
  }
  async handleSubmit() {
    try{
      console.log(this.state.newBalance);
      await UserApi.updateCurrentUserBalance(this.state.newBalance);
      window.updateBalance();
      this.setState({newBalance: ""})

    }
    catch (e){
      console.log(e);
    }
  }

    render() {
        return (
            
            <div class="newBG">
            <div>
            
                <br/><br/>
                <h2 class="tsize">
                     <span class="bigp">P</span>arents
                     </h2>
                
                <div class="mb-3">
                <center>
                <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">kr</span>
                </div>
                <input type="text" value={this.state.newBalance}
                    onChange={e => this.setState({newBalance:e.target.value})} class="form-control" aria-label="Amount (to the nearest dollar)"/>
                <div class="input-group-append">
                  <span class="input-group-text">.00</span>
                </div>
              </div>
              </center>
                <button type="button" class="btn btn-info" onClick={() =>this.handleSubmit()}>Set Balance</button>
                <center>
                <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">kr</span>
                </div>
                <input type="text"  class="form-control" aria-label="Amount (to the nearest dollar)"/>
                <div class="input-group-append">
                  <span class="input-group-text">.00</span>
                </div>
              </div>
              </center>
                
                <center>
                <button type="button" class="btn btn-info">Set automatic allowance</button>
                </center>
                </div>
                <div class="description">
                <p><center><span class="teach">Teach kids to earn,save and spend</span></center><br/>
                This page is exclusive for parents use. Here you can set the balance (for example if you want to add a start balance to your kid).</p>
                <p>You can also set an allowance on this secction of our app. Just type the amount you want, and every month it will automatically be added to the balance.</p>
                <br/>
                <a href="#">See Purchased Toys</a>
                </div>
                &nbsp;
                <div>
                <div class="col-sm-3">
            <div className="card parents shadow">
                <img class="card-img-top img-fluid" src="./toy_images/LEGO_Star_Wars_Action_Battle_Hoth.jpg" alt="Card image cap"/>
                <div class="card-block">
                    <h4 class="card-title">LEGO Star Wars Action</h4>
            
                    <p class="card-text"><small class="text-muted">Bought by&nbsp;<strong>You&nbsp;</strong>just now</small>&nbsp;</p>
                </div>
            </div>
        </div>
                </div>

            </div>
            </div>
        );
    }
}

export default ParentsPage;