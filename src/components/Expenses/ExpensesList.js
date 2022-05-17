import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

function ExpensesList(props) {

    // OPTION 2 , this checks a conditio which if true will return this jsx instead of the following one.
    // 
    // if (props.items.length === 0) {
    //  return <h2> className="expenses-list__fallback">Found no expenses </h2>
    // }


    return (
        <div>
            {/* ternary expression for conditional expression, first confition then ?, in between parenthesis what to do when condition is met,  then : and after in parenthesis what to do when condition is not met  */}
            {props.items.length === 0 ? ( 
                <p className="expenses-list__fallback">Found no expenses.</p> 
                ) : (
                    props.items.map(expense => 
                    <ExpenseItem 
                    key={expense.id} // react needs a key to no bugs happen later, just to identify every new compononent created
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date}/>) 
                )
            }
        </div>
    )

};

export default ExpensesList;

// OPTION 2

