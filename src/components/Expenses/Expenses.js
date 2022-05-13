import React from "react";


import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {

    const filterChangeHandler = function(selectedYear) {
        console.log('expense.js');
        console.log(selectedYear);

    }

    return(

        //  - HOW PROPS WORK - This EXPENSES function has a props parameter which simply carries the information being passed from the
        //  Expenses component declared in the APP.JS file. This declared Expenses component has a property called ITEMS which simply
        //  equals to the variable EXPENSES in the APP.JS File that carries an array. Therefore here in this file, to pass the info 
        //  from the props parameter to the ExpenseItem compononent, we give the ExpenseItem component properties which equal to
        //  the props parameter, look for items in the props parameter, then inside items which equals the expenses array in APP.JS we look for the rest of data.

        <div>

        
            <Card className="expenses">
                <ExpensesFilter onChangeFilter={filterChangeHandler}/>
                <ExpenseItem 
                    title={props.items[0].title} 
                    amount={props.items[0].amount} 
                    date={props.items[0].date}>
                </ExpenseItem>

                <ExpenseItem 
                    title={props.items[1].title} 
                    amount={props.items[1].amount} 
                    date={props.items[1].date}>
                </ExpenseItem>

                <ExpenseItem 
                    title={props.items[2].title} 
                    amount={props.items[2].amount} 
                    date={props.items[2].date}>
                </ExpenseItem>

                <ExpenseItem 
                    title={props.items[3].title} 
                    amount={props.items[3].amount} 
                    date={props.items[3].date}>
                </ExpenseItem>

            </Card>
        </div>
        
    )

}

export default Expenses;