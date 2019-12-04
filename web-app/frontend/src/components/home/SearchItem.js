import React from 'react';
import './Popup.css';
import ToysApi from '../../api/ToysApi';
import Convert from "./Curency";

class SearchItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            item: props.item,
            id: props.id,
            close: props.close
        };
    }

    // componentDidMount() {

    //     ToysApi.getToyById(this.state.id)
    //         .then(({ data }) => this.setState({ item: data, fetching: false }))
    //         .catch(err => console.error(err));

    // }

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
                </div>
            )
    }
}

export default SearchItem;
