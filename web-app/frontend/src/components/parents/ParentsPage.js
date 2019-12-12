
import React, { Component } from "react";
import './ParentsPage.css';
import UserApi from "../../api/UserApi";


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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. It was popularised in 
                the 1960s with the release of Letraset <br/>
                sheets containing Lorem Ipsum passages,
                and more recently with <br/>
                desktop publishing software like Aldus PageMaker including 
                versions of Lorem Ipsum.</p>
                <br/>
                <a href="#">See Pourchased Toys</a>
                </div>

            </div>
            </div>
        );
    }
}

export default ParentsPage;