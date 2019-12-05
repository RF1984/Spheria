import React from 'react';
import './Popup.css';
import ToysApi from '../../api/ToysApi';
import Convert from "./Curency";
import UserApi from '../../api/UserApi'

class SearchItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            item: props.item,
            id: props.id,
            close: props.close,
            user: null,

        };
    }
    async componentDidMount(){
        window.userApi = UserApi
       const response = await UserApi.getCurrentUser();

       this.setState({
           user: response.data,
       })
       
    }

     async handleSubmit()  {
        await ToysApi.buyToy(this.state.item.id)

        window.location.reload();
    }

    render() {
        const { item, close } = this.state;
            return (
                <div className="modal">
                    <a className="close" onClick={close}>
                        &times;
                    </a>
                    <div className="header"> {item.toy_Name} </div>
                    <div className="content">
                        <img width="50px" height="50px " src={item.toy_Photo}
                            alt={item.toy_Name} height="100" width="100"></img> {item.toy_Name}
                    </div>
                    Price: {item.toy_Price}
                <div>
                    <Convert price ={item.toy_Price}/>
                </div>
                <div>
                    <button className="btn btn-primary" onClick={() => this.handleSubmit()}>Add Item</button>
                </div>
                </div>
            )
    }
}

export default SearchItem;
