import React from 'react';
import './Popup.css';
import ToysApi from '../../api/ToysApi';
import Convert from "./Curency";
import UserApi from '../../api/UserApi';
import { Link } from "react-router-dom";
import BuyToyPopup from './BuyToyPopup';
import Popup from "reactjs-popup";


class SearchItem extends React.Component {

    constructor(props) {
        super(props);

        console.log(props);
        this.state = {
            item: props.item,
            id: props.id,
            close: props.close,
            user: null,
            enoughMoney: null,
            show: false,

        };
    }
    async componentDidMount() {
        window.userApi = UserApi
        const response = await UserApi.getCurrentUser();

        this.setState({
            user: response.data,
        })

    }
    
    async handleSubmit() {
        try {
            await ToysApi.buyToy(this.state.item.id)
            window.updateBalance();
            this.setState({ enoughMoney: true,});
            this.props.close();
            console.log(this.state.enoughMoney);
            window.openModal(this.state.enoughMoney);
            
              
        
        } catch (e) {
            this.setState({ enoughMoney: false,});
            this.props.close();
            window.openModal(this.state.enoughMoney);

              
        }
    }

    render() {
        const { item, close, enoughMoney} = this.state;
        return (
            <div className="modal">
                <a className="close" onClick={close}>
                    &times;
                    </a>

                <div className="header shadow p-3 mb-5 bg-warning rounded"> {item.toy_Name} </div>
                <div className="content shadow p-3 mb-5 bg-white rounded">
                    <img width="50px" height="50px " src={item.toy_Photo}
                        alt={item.toy_Name} height="100" width="100"></img> {item.toy_Name}
                    <a className="price float-right p-3 mb-5 bg-warning rounded">
                        Price: {item.toy_Price} SEK
                    </a>
                </div>
                <br></br>
                <div className="msg shadow p-3 mb-5 bg-white rounded">
                    <Convert price={item.toy_Price} />
                </div>
                <div>
                    <button className="btn btn-primary" onClick={() => this.handleSubmit()}>Buy</button>
                    
                    {console.log(enoughMoney)}
                </div>
            </div>
        )
    }
}

export default SearchItem;


/*{
                       updateSomething ? <div>there is not enough money, try to do some <Link to="/tasks" className="nav-Link">Tasks</Link> </div> : <div></div>
                   }
                   {

                    // <BuyToyPopup money={enoughMoney}/>

                       otherPopup ? <div>Congratulations! You just got a new toy!!</div> : <div></div>
                   }
                   */