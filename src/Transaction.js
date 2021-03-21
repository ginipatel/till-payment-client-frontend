import {Component} from 'react';
import './App.css';
import React from "react";
import './transaction.css';



class  Transaction extends Component {
    render (){
        const {transactionDetails} = this.props;
        return (
            <div className="transaction">
                <div className="transactionRow row">
                     <span className='col'>Amount: </span>
                    <span className='col'>{transactionDetails.amount}</span>

                </div>

                <div className='transactionRow row'>
                    <span className='col'> Description </span>
                    <span className='col'>{transactionDetails.description}</span>
                </div>
                <div className='transactionRow row'>
                    <span className='col'>  CCLastFour</span>
                    <span className='col'>{transactionDetails.ccLastFour}</span>
                </div>
                <div className= 'transactionRow row'>
                    <span className='col'> CCExpiry </span>
                    <span className='col'>{transactionDetails.ccExpiry}</span>
                </div>
                <div className='transactionRow row'>
                    <span className='col'>  CCtoken </span>
                    <span className='col'> {transactionDetails.ccToken}</span>
                </div>
                <div className='transactionRow row'>
                    <span className='col'>   CustomerId</span>
                    <span className='col'> {transactionDetails.customerId}</span>
                </div>
                <div className='transactionRow row'>
                    <span className='col'>  Date </span>
                    <span className='col'> {transactionDetails.date}</span>
                </div>
            </div>



        );
    }



}

export default Transaction;
