import React from "react";

import './ExpenseDate.css'


function ExpenseDate(props) {

    // HELPER VARIABLES!
    // Having this variable month that holds data of month using data being passed by props makes it cleaer to insert
    // it later inside the component JSX
    const month = props.date.toLocaleString('en-US', {month: "long"});
    const day = props.date.toLocaleString('en-US', {day: "2-digit"});
    const year = props.date.getFullYear();

    return (

    //Calendar type display for Date inside ExpenseItem Component
        
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    )

}

export default ExpenseDate;