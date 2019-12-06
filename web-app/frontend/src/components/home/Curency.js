import React from "react";
import Axios from "axios";
import MessagePopUp from "./MessagePopUp";
import { equal } from "assert";
class Convert extends React.Component {
    state = {
        rates: null,
        randomCurrency: {},
        code: null,
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

getMessage(code) {
const Message1 =  {Currency: "RUB", Min: 180, Max: 220, Message: "and you can buy 3 McDolands menus with it?"};
const Message2 = {Currency: "INR", Min: 180, Max: 220, Message: "and you can feed 4 people for 3 whole days with it?"};
const Message3 = {Currency: "ILS", Min: 250, Max: 300, Message: "and you can buy 1 kg traditional sweets with it?"};
const Message4 =  {Currency: "SEK", Min: 1500, Max: 1800, Message: "and you can buy one day trip to Stockholm Archipelago for 3 people with it?"};
const Message5 =  {Currency: "RON", Min: 400, Max: 450, Message: "and you can buy 10 days of food for 2 people with it?"};
const Message6 = {Currency: "PLN", Min: 2100, Max: 2300, Message: "and you can have 1 month of food for 2 people or weekend with parents in the polish mountain with it?"};
const Message7 = {Currency: "EUR", Min: 2100, Max: 2300, Message: "and you can buy 1 ticket to EuroDisney and Walt Disney Studios Parks?"};

let Messages = [Message1,Message2,Message3,Message4,Message5,Message6,Message7];
let arrayLength = Messages.length;
for (var i = 0;i < arrayLength; i++)
    {
     if (Messages[i].Currency == code)
        {return Messages[i].Message;}
    }
}


render() {
    const {randomCurrency} = this.state
    console.log(this.state)
    const convertedPrice= this.state.rates ? this.props.price * this.state.rates[randomCurrency.code] : "";
    return <div>
        {this.state.rates ? <div>Did you know that in {randomCurrency.country} this is worth {convertedPrice.toFixed(0)} {randomCurrency.text} </div> : <div>working..</div>}
        <div>{this.getMessage(randomCurrency.code)}</div>
    </div>
    
}
}

export default Convert;
