import React, { Component } from 'react'

export default class IncomeExpenses extends Component {
    render(){
        return(
            <div>
               <div>
                   <h4>Income</h4>
                   <p className="money plus">+$0.00</p>
               </div>
               <div>
                   <h4>Expense</h4>
                   <p className="money minus">-$0.00</p>
               </div>
            </div>
        )

    }
}