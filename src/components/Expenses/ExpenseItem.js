import React from "react";

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'


// React ensures we get 1 PARAMETER for the component, we can name it whatever we want, tipically it is named props
// It holds all the values for our costum element 
function ExpenseItem(props) {
    
    


    return (
        <Card className='expense-item'>

            {/* THIS IS A SMALLER COMPONENT FOR THE DATE INSIDE THE EXPENSEITEM COMPONENT */}
            <ExpenseDate date={props.date}></ExpenseDate>
            
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </Card>
    ); 
}

export default ExpenseItem;

