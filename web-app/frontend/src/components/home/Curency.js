import React from "react";
import Axios from "axios";
class Convert extends React.Component {
    state = {
        rates: null,
        randomCurrency: null,
    };
async componentDidMount(){
const url = "https://api.exchangeratesapi.io/latest?base=SEK";
const response = await Axios.get(url);
this.setState({ rates: response.data.rates,loading: false });
console.log(response)


let currencies = ['EUR','INR']
this.setState({randomCurrency: currencies[Math.floor(Math.random() * currencies.length)]});


}
render() {
    const {randomCurrency} = this.state
    const convertedPrice= this.state.rates ? this.props.price * this.state.rates[randomCurrency] : "";
    return <div>
        {this.state.rates ? <div>the currency in robel: {convertedPrice}</div> : <div>working..</div>}
    </div>
}
}

export default Convert;
