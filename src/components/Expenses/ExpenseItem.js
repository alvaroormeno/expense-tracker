import React from "react";

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'


// React ensures we get 1 PARAMETER for the component, we can name it whatever we want, tipically it is named props
// It holds all the values for our costum element 
function ExpenseItem(props) {
    
    
    // useState react hook
    // The first element of array is a pointer to the managed value which is props.title
    // Second element is a function we can call to set a new title, hence we called the function setTitle

    // const [title, setTitle] = useState(props.title);

    // const clickHandler = function () {
    //     setTitle('Updated!')
    //     console.log(title)
    // }


    return (
        <Card className='expense-item'>

            {/* THIS IS A SMALLER COMPONENT FOR THE DATE INSIDE THE EXPENSEITEM COMPONENT */}
            <ExpenseDate date={props.date}></ExpenseDate>
            
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change Title</button> */}
        </Card>
    ); 
}

export default ExpenseItem;

