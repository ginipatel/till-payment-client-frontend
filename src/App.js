import {Component} from 'react';
import './App.css';
import axios from 'axios';
import React from "react";
import Transaction from "./Transaction";


class  App extends Component {
    constructor() {
        super();
        this.state = {merchants:[]}
    }

    componentDidMount() {
        let self = this;
        axios.get('http://localhost:3002/merchants')
            .then(function (response) {
                self.setState({
                    ...self.state,
                    merchants: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    };

    render (){
        const {merchants} = this.state;

        return (
            <div className="App">
                <div className="container-fluid">
                    <div className="row">
                        {merchants.map((merchant,i) =>
                            <div className='col' key={i}>
                                <h1 className='merchantName'>{merchant.name}</h1>
                                <div className="transactions" id="collapseExample">
                                    {merchant.transactions.map((t,j)=>{
                                        return <Transaction key={j} transactionDetails={t}/>
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        );
    }



}

export default App;
