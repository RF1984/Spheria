import React from "react";
import Axios from "axios";
class Convert extends React.Component {
    state = {
        rates: null,
        randomCurrency: {},
    };
async componentDidMount(){
const url = "https://api.exchangeratesapi.io/latest?base=SEK";
const response = await Axios.get(url);
this.setState({ rates: response.data.rates,loading: false });
console.log(response)

const EUR = {country: 'France', code: 'EUR', text: 'euros'};
const INR = {country: 'India', code: 'INR', text: 'rupees'};
const ILS = {country: 'Palestina', code: 'ILS', text: 'israel Shekels'}
const PLN = {country: 'Poland', code: 'PLN', text: 'poland zloty'}
const PKR = {country: 'Pakistan',code: 'PKR', text: 'pakistan rupees'}
const RON = {country: 'Romania', code: 'RON', text: 'romanian leu'}
const RUB = {country: 'Russia', code: 'RUB', text: 'russian rubles'}


let currencies = [EUR,INR,ILS,PLN,RON,RUB]
console.log(currencies[Math.floor(Math.random() * currencies.length)]);

this.setState({randomCurrency: currencies[Math.floor(Math.random() * currencies.length)]});


}
render() {
    const {randomCurrency} = this.state
    console.log(this.state)
    const convertedPrice= this.state.rates ? this.props.price * this.state.rates[randomCurrency.code] : "";
    return <div>
        {this.state.rates ? <div>in {randomCurrency.country} this is worth: {convertedPrice.toFixed(2)} {randomCurrency.text} </div> : <div>working..</div>}
    </div>
}
}

export default Convert;
