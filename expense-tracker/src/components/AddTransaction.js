import React, { Component,useState } from 'react'

export default class AddTransaction extends Component {
    
    render(){
        return(
            <div>
                <h3>Add New Transaction</h3>
                <form>
                    <div className="form-control">
                        <label htmlFor="text">Text</label>
                        <input type="text" placeholder="Enter Text here ..." />
                    </div>
                    <div className="form-control">
                        <label htmlFor="text">Amount<br/>
                            (negative - expense,positive - income)
                        </label>
                        <input type="number" placeholder="Enter Amount here ..." />
                    </div>
                    <button className="btn">Add Transaction</button>
                </form>
            </div>
        )

    }
}